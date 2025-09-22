import { FaUserCircle, FaEdit } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";

const HowTo = () => {
  return (
    <section className="min-h-full px-5 py-20 max-lg:py-22 bg-light-green">
      <div className=" max-w-7xl mx-auto flex flex-col items-center gap-6">
        <h2 className="-mb-4 text-4xl font-bold text-gray-900 text-center max-sm:text-3xl text-balance">
          Your Salary, Calculated with Confidence
        </h2>
        <p className="max-w-[600px] text-center text-gray-700 max-sm:text-sm">
          Whether you freelance, work part-time, or full-time, PayTrack helps
          you {" "}
          <span className="font-medium">
            log your hours, calculate your salary, and confirm every rand is
            accounted for.
          </span>
        </p>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-22">
          {/* Left */}
          <div className="w-full h-full flex flex-col gap-6">
            <div className="px-4 py-8 rounded-lg shadow-xs hover:shadow-sm bg-white border flex flex-col items-center border-creme-white duration-300 h-full">
              <FaUserCircle className="text-5xl mb-4 text-primary" />
              <span className="block mb-4 font-medium text-lg max-sm:text-center">
                1. Sign Up & Save Your Rate
              </span>
              <p className="text-center text-sm">
                Create your PayTrack profile in minutes. Enter your hourly rate from your employer and let PayTrack securely store it for precise monthly calculations.
              </p>
            </div>
            <div className="px-4 py-8 rounded-lg shadow-xs hover:shadow-sm bg-white border flex flex-col items-center border-creme-white duration-300 h-full">
              <FaEdit className="text-5xl mb-4 text-secondary" />
              <span className="block mb-4 font-medium text-lg max-sm:text-center">
                2. Log Your Hours Easily
              </span>
              <p className="text-center text-sm">
                Add your work time the way that suits you best-<span className="font-medium">daily shifts, weekly totals, or full-month entries.</span> {" "} Don't forget to include off-days for accuracy.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="w-full h-full flex flex-col gap-6">
            <div className="px-4 py-8 rounded-lg shadow-xs hover:shadow-sm bg-white border flex flex-col items-center border-creme-white duration-300 h-full">
              <FaMoneyBillTrendUp className="text-5xl mb-4 text-accent" />
              <span className="block mb-4 font-medium text-lg max-sm:text-center">
                3. Genrate Your Salary Instantly
              </span>
              <p className="text-center text-sm">
                Generate your salary instantly. PayTrack <span className="font-medium">calculates totals with
                precision</span> so you can plan ahead and budget with ease.
              </p>
            </div>
            <div className="px-4 py-8 rounded-lg shadow-xs hover:shadow-sm bg-white border flex flex-col items-center border-creme-white duration-300 h-full">
              <MdWorkHistory className="text-5xl mb-4 text-accent-2" />
              <span className="block mb-4 font-medium text-lg max-sm:text-center">
                4. Review Your Salary History
              </span>
              <p className="text-center text-sm">
                Track your salary trends over time with <span className="font-medium">graphs and tables</span>. Compare month-to-month, confirm your employer’s payments, and make sure you’re never shortchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
