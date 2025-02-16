import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";


const PropertyCardDetails = () => {
    const {id} = useParams()
    const allDatas = useLoaderData()
    const idInt = parseInt(id)
    

    const propertyData = allDatas.find(data => data.id === idInt)
    console.log(idInt, propertyData);

    
    return (
        <div>
            <div className="bg-[url('/pro.PNG')] bg-cover min-h-64 bg-no-repeat text-white">
                <div className="pt-20">
                <h3 className="text-2xl font-semibold uppercase text-center">Properties</h3>
                <p className=" flex justify-center items-center space-x-1.5 pt-3"><IoHomeOutline></IoHomeOutline> <Link to='/' className="hover:link">Home</Link> <MdKeyboardArrowRight></MdKeyboardArrowRight> Standard Detail</p>
                </div>
            </div>
        </div>
    );
};

export default PropertyCardDetails;