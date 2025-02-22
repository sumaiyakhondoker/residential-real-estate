import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { RiHeartAdd2Line } from "react-icons/ri";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PropertyCardDetails = () => {
  const { id } = useParams();
  const allDatas = useLoaderData();
  const idInt = parseInt(id);

  const propertyData = allDatas.find((data) => data.id === idInt);
  // console.log(idInt, propertyData);

  const {
    estate_title,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = propertyData;

  return (
    <HelmetProvider>

      <Helmet>
        <title>Property Details: {id}</title>
      </Helmet>
      <div>
      {/* upper part */}
      <div className="bg-[url('/pro.PNG')] bg-cover min-h-64 bg-no-repeat text-white">
        <div className="pt-20">
          <h3 className="text-2xl font-semibold uppercase text-center">
            Properties
          </h3>
          <p className=" flex justify-center items-center space-x-1.5 pt-3">
            <IoHomeOutline></IoHomeOutline>{" "}
            <Link to="/" className="hover:link">
              Home
            </Link>{" "}
            <MdKeyboardArrowRight></MdKeyboardArrowRight> Standard Detail
          </p>
        </div>
      </div>

      {/* lower part */}

      <div className="max-w-7xl mx-auto">
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-base-100 shadow-xl text-left p-3 lg:p-7 my-3 md:my-5 lg:my-10 border border-gray-100">
          
          <div className="">
          
            <h2 className="text-2xl font-semibold">{estate_title}</h2>
            

            <p className="text-gray-500 flex items-center">
              <CiLocationOn className="text-lg mr-1"></CiLocationOn> {location}
            </p>

            <figure>
            <div
              className={`badge badge-xs  lg:top-3 lg:left-56 uppercase ${
                status === "sale"
                  ? "badge-secondary"
                  : status === "rent"
                  ? "badge-warning text-white"
                  : status === "new"
                  ? "badge-primary text-white"
                  : ""
              }`}
            >
              {status}
            </div>
          </figure>
          </div>

          <div className="text-center my-auto">
            <p>{area}</p>
          </div>
          <div className="text-center my-auto flex justify-center items-center gap-5">
            <button onClick={()=> alert('Added to wishlist')} className="btn btn-accent text-white text-xl px-2.5"><RiHeartAdd2Line></RiHeartAdd2Line></button>
            <h3 className="text-2xl font-semibold ">{price}</h3>
          </div>
        </div>

        {/* after card */}
        <div className="mb-20">
          <img
            src={image}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />

          <h3 className="text-xl font-bold py-3 border-b border-gray-200">Property Description</h3>
          <p className="py-3">{description}</p>
          <div>
            <h4 className="text-xl font-bold">Facilities</h4>
            {
            facilities.map(facility => <li>{facility}</li>)
          }
          </div>
          
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default PropertyCardDetails;
