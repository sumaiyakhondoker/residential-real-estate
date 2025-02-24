import { useLoaderData } from "react-router-dom";
import Property from "./Property";


const Properties = () => {
    const allData = useLoaderData()
    // console.log(allData);
    return (
        <div className="max-w-7xl mx-auto my-4 md:my-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
    {
        allData.map(data => <Property key={data.id} data={data}></Property>)
    }


            
        </div>
    );
};

export default Properties;