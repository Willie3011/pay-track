import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const HomeLayout = () => {
    return <main className="font-Poppins w-full h-full">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
}

export default HomeLayout;