import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const SocialLogin = () => {
    return (
        <div className="flex justify-center items-center space-x-4 py-3">
            <div className="text-amber-600 border-2 rounded-full p-2 hover:cursor-pointer hover:bg-amber-50 transition duration-300 ">
                <FaGoogle></FaGoogle>
            </div>
            <div className="text-sky-600 border-2 rounded-full p-2 hover:cursor-pointer hover:bg-amber-50 transition duration-300 ">
                <FaFacebookF></FaFacebookF>
            </div>
            <div className="text-black border-2 rounded-full p-2 hover:cursor-pointer hover:bg-amber-50 transition duration-300 ">
                <FiGithub></FiGithub>
            </div>
        </div>
    );
};

export default SocialLogin;