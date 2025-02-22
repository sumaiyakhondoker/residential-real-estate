import { Helmet, HelmetProvider } from "react-helmet-async";
import { useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate()
  const {registerUser} = useAuth()
    

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
        toast.error(error.message);
      })
    }
    else{
      toast.warning('Password must have an uppercase letter, a lowercase letter, and length must be at least 6 character!');
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
              <h1 className="text-3xl font-bold text-white text-center">Register</h1>

                <label className="fieldset-label text-white">Full Name</label>
                <input  type="text" className="input" placeholder="Full Name"  {...register("fullName", { required: true })}/>

                {errors.fullName && <span className="text-red-500">This field is required</span>}

                <label className="fieldset-label text-white">Email</label>
                <input type="email" className="input" placeholder="Email" {...register("email", { required: true })}/>
                {errors.email && <span className="text-red-500">This field is required</span>}

                
                <label className="fieldset-label text-white">Photo URL</label>
                <input type="text" className="input" placeholder="Photo URL" {...register("image")}/>

                <label className="fieldset-label text-white">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />

                {errors.password && <span className="text-red-500">This field is required</span>}

                
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            
            
            <p className="text-white text-center pb-5"> Already A User? <Link to='/login' className="link" >LOGIN</Link></p>
          </div>
        </div>
      </div>
    </div>
      </HelmetProvider>
    );
};

export default Register;