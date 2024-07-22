import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, doc, getDocs, addDoc, onSnapshot, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "./AuthContext";

const HoursContext = React.createContext();

export function useHours() {
  return useContext(HoursContext);
}

export function HoursProvider({ children }) {
  const [hours, setHours] = useState([]);

  function getUserRef(userId) {
    return doc(db, "users", userId);
  }

  async function getHours(userId) {
    const userDocRef = getUserRef(userId);
    const workHoursColRef = collection(userDocRef, "workHours");

    return onSnapshot(workHoursColRef, (snapshot) => {
      const hoursData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHours(hoursData);
    })
  }

  async function getHourData(userId, hoursId){
    const hoursDocRef = doc(db, 'users', userId, 'workHours', hoursId);
    return (await getDoc(hoursDocRef)).data();
  }

  async function addHours(userId, hours) {
    const userDocRef = getUserRef(userId);
    const workHoursColRef = collection(userDocRef, "workHours");
    return await addDoc(workHoursColRef, hours);
  }

  function editHours(userId, hourId, hours) {
    const hoursDocRef = doc(db, 'users', userId, 'workHours', hourId);
    return updateDoc(hoursDocRef, hours)
  }

  function deleteHours(userId, hoursId) {
    const workDocRef = doc(db, 'users', userId, 'workHours', hoursId);
    return deleteDoc(workDocRef);
  }


  const value = {
    hours,
    getHourData,
    getHours,
    addHours,
    editHours,
    deleteHours
  };
  return (
    <HoursContext.Provider value={value}>{children}</HoursContext.Provider>
  );
}
