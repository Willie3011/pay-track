import React from "react";
import { Link } from "react-router";
import banner from "../assets/images/banner.svg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen px-5 max-lg:py-22 bg-creme-white">
      <div className="max-w-7xl min-h-screen mx-auto flex flex-col items-center lg:flex-row  gap-6">
        <div className="lg:max-w-1/2 w-full h-full flex max-lg:items-center flex-col ">
          <span className="max-w-fit border rounded-full uppercase font-Inter font-light text-xs p-2 border-secondary text-secondary">
            Welcome to Pay Track
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold lg:text-balance mt-4 max-lg:text-center">
            Your Work. Your Time.{" "}
            <span className="text-primary">Your Earnings.</span>
          </h1>
          <p className="mt-6 text-lg font-medium lg:max-w-[500px] max-lg:text-center">
            Track salaries with ease and transparency. PayTrack empowers workers
            and businesses with simple, reliable tools that turn hours into
            accurate paychecks.
          </p>
          <Link
            to="/dashboard"
            className="mt-6 w-fit flex items-center bg-accent hover:bg-primary text-primary hover:text-accent shadow-sm shadow-accent-2 font-medium py-4 px-6 rounded-full duration-300">
            Get Started Today <FaLongArrowAltRight className="text-2xl ms-5" />
          </Link>
        </div>
        <div className="lg:max-w-1/2 w-full h-full">
          <img
            className="lg:w-[500px] lg:h-[500px] w-full h-full"
            src={banner}
            alt="A banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
