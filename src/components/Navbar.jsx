import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = ({open, setOpen}) => {

  return (
    <nav className="h-20 w-full bg-primary text-white relative">
      <section className="max-w-7xl h-full mx-auto p-5 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl">
          Pay Track
        </Link>

        <ul className="hidden lg:flex items-center  gap-2">
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-base font-medium px-6 py-3 rounded-full hover:text-primary hover:bg-accent duration-300 ${
                  isActive ? "bg-accent text-primary" : "bg-transparent"
                }`
              }
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-base font-medium px-6 py-3 rounded-full hover:text-primary hover:bg-accent duration-300 ${
                  isActive ? "bg-accent text-primary" : "bg-transparent"
                }`
              }
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-base font-medium px-6 py-3 rounded-full hover:text-primary hover:bg-accent duration-300 ${
                  isActive ? "bg-accent text-primary" : "bg-transparent"
                }`
              }
              to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-base font-medium px-6 py-3 rounded-full hover:text-primary hover:bg-accent duration-300 ${
                  isActive ? "bg-accent text-primary" : "bg-transparent"
                }`
              }
              to="/how-it-works">
              How It Works
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu */}
        <div
          className={`${
            open ? "left-0" : "-left-[999px]"
          } absolute top-0 flex min-h-screen w-3/4 bg-white text-black shadow-sm items-center justify-center z-10 duration-300`}>
        
            {/* close button */}
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 h-8 w-8 rounded-2xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 flex items-center justify-center duration-300 cursor-pointer"><MdClose/></button>
          <ul className="flex flex-col p-8 gap-16 items-center">
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium px-6 py-3 rounded-full hover:text-primary hover:bg-accent duration-300 ${
                    isActive ? "bg-accent text-primary" : "bg-transparent"
                  }`
                }
                to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium px-6 py-3 rounded-full hover:text-primary hover:bg-accent duration-300 ${
                    isActive ? "bg-accent text-primary" : "bg-transparent"
                  }`
                }
                to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium px-6 py-3 rounded-full hover:text-primary hover:bg-accent duration-300 ${
                    isActive ? "bg-accent text-primary" : "bg-transparent"
                  }`
                }
                to="/contact">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium px-6 py-3 rounded-full hover:text-primary hover:bg-accent duration-300 ${
                    isActive ? "bg-accent text-primary" : "bg-transparent"
                  }`
                }
                to="/how-it-works">
                How It Works
              </NavLink>
            </li>
          </ul>
        </div>

        <div className=" flex items-center justify-between gap-2 lg:gap-5">
          <Link
            className="text-base font-medium px-6 py-3 rounded-full border-2 border-transparent hover:border-accent text-primary hover:text-accent  bg-accent hover:bg-transparent duration-300"
            to="/register">
            Register
          </Link>
          <Link
            className="text-base font-medium px-6 py-3 rounded-full border-2 border-accent text-accent hover:text-primary bg-transparent hover:bg-accent duration-300 hidden lg:block"
            to="/login">
            Log in
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden block outline-none text-3xl cursor-pointer">
            <MdMenu />
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
