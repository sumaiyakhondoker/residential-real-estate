import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const PropertyCard = ({data}) => {
    const navigate= useNavigate()
    const {id,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image} = data
    console.log(data);

    const handleViewProperty = () =>{
        navigate('/propertyCardDetails')
    }
    return (
        <div className="card bg-base-100 shadow-sm text-left">
  <figure>
    <img className="relative"
      src={image}
      alt="segment_image" />
      <div className={`badge  absolute lg:top-57 lg:left-3 uppercase ${status === 'sale' ? 'badge-secondary' : status === 'rent' ? 'badge-warning text-white' : status === 'new' ? 'badge-primary text-white' : ''}`}>{status}</div>
  </figure>
  <div className="p-6">
    <h2 className="card-title">
      {estate_title}
      
    </h2>
    
    <p className="text-gray-500 flex items-center"><CiLocationOn className="text-lg mr-1"></CiLocationOn> {location}</p>
    <h3 className="text-2xl font-semibold text-accent">{price}</h3>
    <p>{area}</p>
    <div className="card-actions justify-end">
      <button onClick={handleViewProperty} className="btn bg-accent text-white">View Property</button>
      
    </div>
  </div>
</div>
    );
};

export default PropertyCard;