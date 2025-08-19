import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { useState } from "react";

const HomeLayout = () => {
    const [open, setOpen] = useState(false);
    return <main className="font-Poppins w-full h-full">
        <Navbar open={open} setOpen={setOpen}/>
        <div className={`absolute inset-0 bg-black opacity-50 z-0 ${open ? "block" : "hidden"}`}></div>
        <Outlet/>
        <Footer/>
    </main>
}

export default HomeLayout;