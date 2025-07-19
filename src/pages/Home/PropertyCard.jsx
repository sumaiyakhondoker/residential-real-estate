import { CiLocationOn } from "react-icons/ci";
import { Link} from "react-router-dom";
import PropTypes from 'prop-types'; 
const PropertyCard = ({data}) => {
    
    const {id,
        estate_title,
        price,
        status,
        area,
        location,
        image} = data

    
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
    <h3 className="text-xl md:text-2xl font-semibold text-accent">{price}</h3>
    <p>{area}</p>
    <div className="card-actions justify-end">
    <Link to={`/propertyCardDetails/${id}`}><button className="btn bg-accent text-white">View Property</button></Link>
      
    </div>
  </div>
</div>
    );
};

export default PropertyCard;

PropertyCard.propTypes = {
  data: PropTypes.object,
}