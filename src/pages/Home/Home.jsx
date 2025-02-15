import PopularListings from "./PopularListings";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="relative">
      <Slider></Slider>
      <div className="flex justify-center items-center uppercase absolute lg:top-44 lg:pl-[500px] ">
        <div className="text-center space-y-3">
        <h3 className="text-2xl font-semibold">Find your dream home!</h3>
        <h1 className="text-4xl font-bold">Best apartments to rent</h1>
        <button className="btn bg-accent text-white">Learn More</button>
        </div>
       
      </div>

      <PopularListings></PopularListings>
    </div> 
  );
};

export default Home;
