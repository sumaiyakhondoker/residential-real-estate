import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const {googleLogin, facebookLogin, githubLogin} = useAuth()
    const handleLogin = (loginMethod)=>{
        loginMethod()
        .then(result =>{
            console.log(result.user);
            navigate(`${location.state || '/'}`)
        })
        .catch(error =>{
            toast.error(error.message)
        })
    }
    return (
        <div className="flex justify-center items-center space-x-4 py-3">
            <div onClick={()=>handleLogin(googleLogin)} className="text-amber-600 border-2 rounded-full p-2 hover:cursor-pointer hover:bg-amber-50 transition duration-300 ">
                <FaGoogle></FaGoogle>
            </div>
            <div onClick={()=>handleLogin(facebookLogin)} className="text-sky-400 border-2 rounded-full p-2 hover:cursor-pointer hover:bg-amber-50 transition duration-300 ">
                <FaFacebookF></FaFacebookF>
            </div>
            <div onClick={()=>handleLogin(githubLogin)}  className="text-black border-2 rounded-full p-2 hover:cursor-pointer hover:bg-amber-50 transition duration-300 ">
                <FiGithub></FiGithub>
            </div>
        </div>
    );
};

export default SocialLogin;