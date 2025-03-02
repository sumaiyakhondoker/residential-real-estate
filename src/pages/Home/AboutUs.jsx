import { HiArrowRightCircle } from "react-icons/hi2";

const AboutUs = () => {
    return (
        <div className=" my-5 md:my-10 lg:my-20 max-w-7xl mx-auto">
              <div className="text-center">
              <h3 className="text-3xl font-bold">About Us</h3>
              <p className="lg:w-3xl mx-auto mt-3 ">
              At GrandVista Homes, we specialize in residential properties, offering a variety of homes to fit your lifestyle. Let us guide you to your dream home.
              </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 md:gap-8 mt-5 ">
                <div className="" >
                    <img className="w-full" src="/bed.jpg" alt="" />
                </div>
                <div className="lg:w-2/3">
                    <h3 className="text-xl font-semibold">Your Trusted Partner in Finding the Perfect Home</h3>
                    <p className="text-gray-500">At GrandVista Homes, we are committed to helping you find the ideal home that fits your lifestyle. With years of experience in the residential real estate market, we offer expert guidance, a wide range of properties, and personalized service to make your home search easy and enjoyable. Our achievements reflect our dedication to client satisfaction, with hundreds of successful property matches and a reputation for reliability.</p>

                    <h3 className="text-xl font-semibold pt-5">Achievements:</h3>
                    <ul>
                        <li className="flex items-center gap-1"><HiArrowRightCircle className="text-xl"></HiArrowRightCircle>500+ Happy Homeowners</li>
                        <li className="flex items-center gap-1"><HiArrowRightCircle className="text-xl"></HiArrowRightCircle>10+ Years of Expertise</li>
                        <li className="flex items-center gap-1"><HiArrowRightCircle className="text-xl"></HiArrowRightCircle>Award-Winning Customer Service</li>
                        <li className="flex items-center gap-1"><HiArrowRightCircle className="text-xl"></HiArrowRightCircle>Wide Selection of Premium Residential Properties</li>
                    </ul>


                </div>
                
              </div>
              
        </div>
    );
};

export default AboutUs;