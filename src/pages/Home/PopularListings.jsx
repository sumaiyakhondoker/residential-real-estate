import { useLoaderData } from 'react-router-dom';
import PropertyCard from './PropertyCard';

const PopularListings = () => {
    const allDatas = useLoaderData()
    return (
        <div className='text-center my-5 md:my-10 lg:my-20 max-w-7xl mx-auto'>
            <h3 className="text-3xl font-bold">Popular Listings</h3>
            <p className='lg:w-3xl mx-auto mt-3'>Discover a range of residential properties, from family homes to luxury apartments, available for sale or rent. Find your ideal home with modern amenities in prime locations.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
            {
                allDatas.map(data => <PropertyCard key={data.id} data={data}></PropertyCard>)
            }
            </div>
        </div>
    );
};

export default PopularListings;