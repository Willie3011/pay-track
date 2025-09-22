import { FaLongArrowAltRight } from "react-icons/fa";
import about from "../assets/images/about.jpg";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-5 py-16 lg:py-20">
      <div className="max-w-7xl h-full mx-auto lg:grid flex flex-col-reverse lg:grid-cols-2 gap-12 lg:gap-6 lg:px-22">
        <div className="w-full h-full">
          <img
            src={about}
            alt=""
            className="lg:w-[500px] lg:h-[500px] w-full h-[500px] object-cover lg:rounded-full rounded-2xl shadow-lg"
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="lg:text-4xl text-3xl font-bold text-gray-900 text-center mb-6">
            About Us
          </h2>
          <div className="text-gray-800 flex flex-col gap-6 text-center">
            <p>
              Your time is valuable—and every rand you earn should reflect that.
              PayTrack was created to give hourly workers, freelancers, and
              part-time employees{" "}
              <span className="font-medium">
                a simple, reliable way to track their pay
              </span>{" "}
              without the stress of manual calculations.
            </p>
            <p>
              Instead of guessing if your payslip matches your hours, PayTrack
              makes it easy; just set your hourly rate, record your shifts, and
              let the app handle the math. You'll see your true salary
              instantly, and you can compare it with your payslip to make sure
              nothing's missing.
            </p>
            <p>
              We're not just about numbers—we're about{" "}
              <span className="font-medium">peace of mind</span>. PayTrack gives
              you confidence in your earnings and the power to keep your hard
              work protected.
            </p>
          </div>

          <Link
            to="/about"
            className="mt-6 w-fit flex items-center text-primary border-2 border-primary hover:bg-primary hover:text-accent shadow-sm font-medium py-4 px-6 rounded-full duration-300">
            Learn more <FaLongArrowAltRight className="text-2xl ms-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
