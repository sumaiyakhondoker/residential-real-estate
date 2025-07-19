import PopularListings from "./PopularListings";
import Slider from "./Slider";
import {Helmet, HelmetProvider} from "react-helmet-async";
import 'animate.css';
import CommonFeatures from "./CommonFeatures";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <HelmetProvider>
      <div className="relative">
      <Helmet>
        <title>Home | GrandVista Homes</title>
      </Helmet>
      
      <Slider></Slider>
      <div className="flex justify-center items-center uppercase absolute top-30 px-13 lg:px-0 lg:top-44 lg:left-[400px] ">
        <div className="text-center space-y-3 ">
        <h3 className=" text-xl md:text-2xl font-semibold animate__animated animate__backInLeft duration-500">Find your dream home!</h3>
        <h1 className="text-3xl md:text-4xl font-bold animate__animated animate__backInLeft duration-500">Best apartments to sale and rent</h1>
        <button><a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group animate__animated animate__backInDown duration-500">
    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-accent rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
    <span className="relative">Learn More</span>
</a></button>
        





        </div>
       
      </div>

      <PopularListings></PopularListings>
      <CommonFeatures></CommonFeatures>
      <AboutUs></AboutUs>
    </div>
    </HelmetProvider> 
  );
};

export default Home;
