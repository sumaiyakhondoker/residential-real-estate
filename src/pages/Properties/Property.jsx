import PropTypes from 'prop-types'
import { CiLocationOn } from 'react-icons/ci';

const Property = ({data}) => {
    console.log(data);
    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image} = data
    return (
        <div className=" pt-4 px-4 pb-6 shadow-md dark:bg-gray-50 dark:text-gray-800">
	
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			
		</div>
        
		<div className="space-y-1">
				<h3 className="text-xl font-semibold dark:text-violet-600">{estate_title}</h3>
                <p className="text-gray-500 flex items-center"><CiLocationOn className="text-lg mr-1"></CiLocationOn> {location}</p>
                <h3 className="text-2xl font-semibold text-accent">{price}</h3>
                <p className='border-b border-gray-200 pb-3'>{area}</p>
			

                <h3 className="text-xl font-bold pt-2">Property Description</h3>
          <p className="pb-2">{description}</p>
          <div>
            <h4 className="text-xl font-bold">Facilities</h4>
            {
            facilities.map(facility => <li>{facility}</li>)
          }
          </div>
			
		</div>
	</div>
</div>
    );
};

export default Property;

Property.propTypes = {
    data : PropTypes.object,
}