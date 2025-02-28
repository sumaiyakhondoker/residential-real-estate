import { Helmet, HelmetProvider } from "react-helmet-async";
import Map from "./Map";
import { FaFacebookF, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { FaPhoneAlt,FaEnvelope  } from "react-icons/fa";
import { IoHomeOutline, IoLogoYoutube } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {

	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm()
	
	  const onSubmit = (data) => {
		console.log(data);
		toast.success('Message sent successfully! ')
	  }
    return (
        <HelmetProvider>
            <Helmet>
                <title>Contact | GrandVista Homes</title>
            </Helmet>
            <div>
				{/* upper part */}
				<div className="bg-[url('/pro.PNG')] bg-cover min-h-64 bg-no-repeat text-white">
        <div className="pt-20">
          <h3 className="text-2xl font-semibold uppercase text-center">
            Contact us
          </h3>
          <p className=" flex justify-center items-center space-x-1.5 pt-3 ">
            <span className="flex justify-center items-center hover:text-accent"><IoHomeOutline className="mr-1"></IoHomeOutline>{" "}
            <Link to="/" className="hover:link ">
              Home
            </Link>{" "}</span>
            <MdKeyboardArrowRight></MdKeyboardArrowRight> Contact Us
          </p>
        </div>
      </div>
            <div className="py-5 md:py-10 lg:py-15 dark:bg-gray-100 dark:text-gray-900">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">If you are interested in working with us,
            please get in touch. Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<FaLocationDot className="text-xl mr-2"></FaLocationDot>
					<span>Rue de Rivoli, 75001 Paris, France</span>
				</p>
				<p className="flex items-center">
					<FaPhoneAlt className="text-xl mr-2"></FaPhoneAlt>
					<span>+33 1 23 45 67 89</span>
				</p>
				<p className="flex items-center">
					<FaEnvelope className="text-xl mr-2"></FaEnvelope>
					<span>info@residentialparis.com</span>
				</p>
				<div className="flex gap-4 mt-8 text-xl">
							<a href="#" className="hover:text-white p-2 hover:bg-sky-500 hover:rounded-xl transition duration-200">
							  <FaTwitter></FaTwitter>
							</a>
							<a href="#" className="hover:text-white p-2 hover:bg-sky-800 hover:rounded-xl transition duration-200">
							  <FaFacebookF></FaFacebookF>
							</a>
							<a href="#" className="hover:text-white p-2 hover:bg-red-600 hover:rounded-xl transition duration-200">
							  <IoLogoYoutube></IoLogoYoutube>
							</a>
							<a href="#" className="hover:text-white p-2 hover:bg-amber-500 hover:rounded-xl transition duration-200">
							  <RiInstagramFill></RiInstagramFill>
							</a>
						  </div>
			</div>
		</div>
		<form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col py-6 space-y-3 md:py-0 md:px-6">
		<h1 className="text-4xl font-bold">FeedBack</h1>
			<label className="block ">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Leroy Jenkins" className="block py-2 pl-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" {...register("fullName", { required: true })}/>
				
				</label>
			{errors.fullName && <span className="text-red-600">This field is required</span>}


			<label className="block ">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="leroy@jenkins.com" className="block py-2 pl-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" {...register("email", { required: true })}/>
				</label>

			{errors.email && <span className="text-red-600">This field is required</span>}


			<label className="block">
				<span className=" mb-1">Message</span>
				<textarea rows="3" className="block py-2 pl-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" {...register("message", { required: true })}></textarea>
			
				</label>	
				{errors.message && <span className="text-red-600">This field is required</span>}
			<button className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600 uppercase btn btn-accent text-white">Send message</button>
		</form>
	</div>
</div>
            



            {/* map */}
            <Map></Map>
        </div>
        </HelmetProvider>
    );
};

export default Contact;