import { useLoaderData } from "react-router-dom";
import Feature from "./Feature";

const CommonFeatures = () => {
    const {features} = useLoaderData()


  return (
    <div className="text-center my-5 md:my-10 lg:my-20 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold">Common Features</h3>
      <p className="lg:w-3xl mx-auto mt-3">
      Discover the essential features that make each property comfortable and modern, offering a range of amenities designed to enhance your living experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        
        {features.map((feature) => (
          <Feature key={feature.id} feature={feature}></Feature>
        ))}

      </div>
    </div>
  );
};

export default CommonFeatures;
