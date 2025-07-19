import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, setLoading } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
// console.log(location.state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true)
    // console.log(data);
    const {email, password} = data
    signInUser(email, password)
   
    .then(result =>{
      console.log(result.user);
      setLoading(false)
      toast.success('Logged in Successfully!!')
      navigate(`${location.state || '/'}`)
    })
    .catch(error =>{
      toast.error(error.message.slice(9, 41))
    })
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Login | GrandVista Homes</title>
      </Helmet>
      <div className="bg-[url('/loginBackground.svg')] bg-cover md:min-h-screen bg-no-repeat">
        <div className="hero md:min-h-screen">
          <div className="hero-content flex-col">
            <div className="card bg-base-50 w-[300px] md:w-[400px]  shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <fieldset className="fieldset">
                  <h1 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">
                    Login
                  </h1>

                  <label className="fieldset-label text-blue-900 lg:text-white">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-red-500">This field is required</span>}

                  <label className="fieldset-label text-blue-900 lg:text-white">Password</label>
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />

                  {errors.password && <span className="text-red-500">This field is required</span>}
                  <div>
                    <a className="link link-hover text-blue-900 lg:text-white">
                      Forgot password?
                    </a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <div className="divider divider-info text-sky-300 px-5">
                <span className="text-sm md:text-base">Continue with</span>
              </div>
              <SocialLogin></SocialLogin>
              <p className="text-sm md:text-base text-sky-300 text-center pb-5">
                Need An Account?{" "}
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Login;
