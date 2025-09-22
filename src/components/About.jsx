import about from "../assets/images/banner2.svg"

const About = () => {
    return (
        <section className='w-full min-h-screen px-5 py-22'>
            <div className="max-w-7xl min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="max-lg:w-1/2 h-full">
                    <img src={about} alt="" className='lg:w-[500px] lg:h-[500px] w-full h-full' />
                </div>
                <div className="max-lg:w-1/2">
                    <h2 className='text-4xl font-bold text-gray-900 text-center mb-4'>About Us</h2>
                    <div className="text-gray-700 flex flex-col gap-6">
                        <p>Your time is valuable—and every rand you earn should reflect that. PayTrack was created to give hourly workers, freelancers, and part-time employees {" "} <span className="font-medium">a simple, reliable way to track their pay</span> without the stress of manual calculations.</p>
                        <p>Instead of guessing if your payslip matches your hours, PayTrack makes it easy; just set your hourly rate, record your shifts, and let the app handle the math. You'll see your true salary instantly, and you can compare it with your payslip to make sure nothing's missing.</p>
                        <p>We're not just about numbers—we're about <span className="font-medium">peace of mind</span>. PayTrack gives you confidence in your earnings and the power to keep your hard work protected.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About