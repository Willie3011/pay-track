import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { useState } from "react";

const HomeLayout = () => {
    const [open, setOpen] = useState(false);
    return <main className="font-Poppins w-full min-h-screen relative scroll-smooth">
        <Navbar open={open} setOpen={setOpen} />
        <div onClick={() => setOpen(false)} className={`fixed inset-0 w-screen h-screen bg-black/50 z-40 ${open ? "block" : "hidden"}`}></div>
        <Outlet/>
        <Footer/>
    </main>
}

export default HomeLayout;