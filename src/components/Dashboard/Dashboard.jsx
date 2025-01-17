import { useEffect, useState } from "react";
import { Table, Button, Stack } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import { useHours } from "../../context/HoursContext";
import AddHoursModal from "../Hours/AddHoursModal/AddHoursModal";
import Pagination from "../Pagination/Pagination";
import EditHoursModal from "../Hours/EditHours/EditHoursModal";

function Dashboard() {
  const { currentUser } = useAuth();
  const { getHours, hours, deleteHours, getHourData } = useHours();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editId, setEditId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ENTRIESPERPAGE = 10;

  //realtime hours update
  useEffect(() => {
    if (!currentUser) return;
    const unsub = getHours(currentUser.uid);

    return () => unsub;
  }, [currentUser]);

  //Pagination
  const totalPages = Math.ceil(hours.length / ENTRIESPERPAGE);
  const indexOfLastEntry = currentPage * ENTRIESPERPAGE;
  const indexOfFirstEntry = indexOfLastEntry - ENTRIESPERPAGE;
  const currentEntries = hours
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(indexOfFirstEntry, indexOfLastEntry);

  const handleAddModalClose = () => setShowAddModal(false);
  const handleEditModalClose = () => setShowEditModal(false);

  async function handleEdit(hourId) {
    setEditId(hourId);
    setShowEditModal(true);
  }

  //delete hours
  async function deleteHoursData(hoursId) {
    try {
      await deleteHours(currentUser.uid, hoursId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mt-2 mb-3">
      <Stack direction="horizontal" gap={3}>
        <h2
          className="display-6 fw-normal p-2 me-auto"
          style={{ fontSize: "2rem" }}>
          Welcome, {currentUser.displayName}
        </h2>
      </Stack>
      <div className="mt-5">
        <Stack direction="horizontal" gap={2}>
          <Button variant="dark" className="me-auto">
            Filter
          </Button>
          <Button variant="light">View Calendar</Button>
          <Button
            onClick={() => setShowAddModal(true)}
            variant="light"
            className="p-2 d-flex align-content-center justify-content-center"
            style={{ height: "40px", width: "40px" }}>
            <MdAdd style={{ fontSize: "20px" }} />
          </Button>
        </Stack>
        <Table hover responsive className="mt-2 mb-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Hours</th>
              <th>Daily pay</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((hour) => (
              <tr key={hour.id} id={hour.id}>
                <td>{hour.id}</td>
                <td>{hour.date}</td>
                <td>{hour.hours || "-"}</td>
                <td>{"-"}</td>
                <td>
                  <Stack direction="horizontal" gap={2} className="col-md-3">
                    <Button
                      variant="outline-dark"
                      className="d-flex btn-sm"
                      onClick={() => handleEdit(hour.id)}>
                      <MdEdit />
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="d-flex btn-sm"
                      onClick={() => deleteHoursData(hour.id)}>
                      <MdDelete />
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="mt-2 d-flex align-items-center justify-content-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      {showAddModal && (
        <AddHoursModal
          showModal={showAddModal}
          onClose={handleAddModalClose}
          userId={currentUser.uid}
          existingEntries={hours}
        />
      )}
      {showEditModal && (
        <EditHoursModal
          showModal={showEditModal}
          onClose={handleEditModalClose}
          userId={currentUser.uid}
          editHourId={editId}
        />
      )}
    </div>
  );
}

export default Dashboard;
