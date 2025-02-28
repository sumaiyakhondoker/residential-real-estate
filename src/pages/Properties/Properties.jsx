import { useLoaderData } from "react-router-dom";
import Property from "./Property";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Properties = () => {
    const allData = useLoaderData()
    // console.log(allData);
    return (
        <HelmetProvider>
            <Helmet>
                <title>Properties | GrandVista Homes</title>
            </Helmet>
            <div className="max-w-7xl mx-auto my-4 md:my-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
    {
        allData.map(data => <Property key={data.id} data={data}></Property>)
    }


            
        </div>
        </HelmetProvider>
    );
};

export default Properties;