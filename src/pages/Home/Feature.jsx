import PropTypes from "prop-types";


const Feature = ({feature}) => {
  const {feature_name,description,icon} = feature
    return (
        <div className="flex flex-col justify-center items-center md:flex-row gap-6 pr-2 py-4   bg-base-100 shadow-sm hover:shadow-2xl ">
  <div className="h-18 w-18 pl-5 ">
    <img
    
      src={icon}
      alt="icon" />
  </div>
  <div className=" text-center md:text-left">
    <a href="#" className="text-xl font-bold hover:text-accent">{feature_name}</a>
    <p className="text-gray-500">{description}</p>
    
  </div>
</div>
    );
};

export default Feature;
Feature.propTypes = {
    feature: PropTypes.object,
}