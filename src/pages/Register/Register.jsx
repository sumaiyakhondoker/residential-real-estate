import { Helmet, HelmetProvider } from "react-helmet-async";
import { useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate()
  const {registerUser} = useAuth()
  const [showPassword, setShowPassword] = useState(false)
    

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  
  const onSubmit = (data) => {
    
    const {email, password} = data
    const isValid = passwordRegex.test(password);
    if(isValid){
      registerUser(email, password)
      .then(result =>{
        console.log(result.user);
        toast.success('You Have Registered Successfully!')
        navigate('/')
  
      })
      .catch(error =>{
         
        toast.error(error.message.slice(9,43));
      })
    }
    else{
      toast('Password must have an uppercase letter, a lowercase letter, and length must be at least 6 character!');
    }

    
  }
    return (

      <HelmetProvider>
        <Helmet>
              <title>Register | GrandVista Homes</title>
        </Helmet>
        <div className="bg-[url('/loginBackground.svg')] bg-cover min-h-screen bg-no-repeat">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          
          <div className="card bg-base-50 w-[400px]  shrink-0 shadow-2xl">
          
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
              <h1 className="text-3xl font-bold text-blue-900 text-center">Register</h1>

                <label className="fieldset-label text-blue-900 lg:text-white">Full Name</label>
                <input  type="text" className="input w-full" placeholder="Full Name"  {...register("fullName", { required: true })}/>

                {errors.fullName && <span className="text-red-500">This field is required</span>}

                <label className="fieldset-label text-blue-900 lg:text-white">Email</label>
                <input type="email" className="input w-full" placeholder="Email" {...register("email", { required: true })}/>
                {errors.email && <span className="text-red-500">This field is required</span>}

                
                <label className="fieldset-label text-blue-900 lg:text-white">Photo URL</label>
                <input type="text" className="input w-full" placeholder="Photo URL" {...register("image")}/>

                <label className="fieldset-label text-blue-900 lg:text-white">Password</label>
                <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input w-full"
                  placeholder="Password"
                  
                  {...register("password", { required: true })}
                  
                />
                <span className="absolute top-2 md:top-3 text-lg right-2 cursor-pointer" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye ></FaRegEye> }</span>
                
                </div>

                {errors.password && <span className="text-red-500">This field is required</span>}

                
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            
            
            <p className="text-sky-300 text-center pb-5"> Already A User? <Link to='/login' className="link" >LOGIN</Link></p>
          </div>
        </div>
      </div>
    </div>
      </HelmetProvider>
    );
};

export default Register;