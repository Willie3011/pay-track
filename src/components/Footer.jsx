import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosArrowUp, IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = ({ scroll }) => {
    return (
        <footer className="bg-primary text-white w-full min-h-full">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="w-full flex flex-col max-sm:justify-center max-sm:items-center">
                        <h2 className="text-accent text-2xl font-bold mb-4">Pay Track</h2>
                        <p className="mb-4 max-w-[300px] text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum architecto similique natus dolore nihil libero vero aliquid quam soluta illum.</p>
                        <div className="socials">
                            <ul className="flex gap-4 mb-6 text-2xl">
                                <li>
                                    <a href="#" className="text-gray-200 hover:text-accent duration-300">
                                        <FaLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-200 hover:text-accent duration-300">
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-200 hover:text-accent duration-300">
                                        <IoLogoWhatsapp />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-200 hover:text-accent duration-300">
                                    <FaInstagramSquare />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <button onClick={scroll} className="w-min whitespace-nowrap flex items-center gap-2 border border-accent rounded-lg text-accent hover:text-primary hover:bg-accent p-4 uppercase text-sm cursor-pointer duration-300"><IoIosArrowUp /> Back to top</button>
                    </div>
                    <div className="w-full flex flex-col max-sm:justify-center max-sm:items-center">
                        <h3 className="text-lg fron-medium mb-4">Site Map</h3>
                        <ul className="flex flex-col max-sm:flex-row gap-6 text-gray-300">
                            <li><a className="hover:text-accent hover:underline duration-300" href="#">Home</a></li>
                            <li><a className="hover:text-accent hover:underline duration-300" href="#">About</a></li>
                            <li><a className="hover:text-accent hover:underline duration-300" href="#">Contact</a></li>
                            <li><a className="hover:text-accent hover:underline duration-300" href="#">How It Works</a></li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col max-sm:justify-center max-sm:items-center">
                        <h3 className="text-lg fron-medium mb-4">Legal</h3>
                        <ul className="flex flex-col max-sm:flex-row gap-6 text-gray-300">
                            <li><a className="hover:text-accent hover:underline duration-300" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-accent hover:underline duration-300" href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;