
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
  return (
    <HelmetProvider>

      <Helmet>
        <title>Login | GrandVista Homes</title>
      </Helmet>
      <div className="bg-[url('/loginBackground.svg')] bg-cover min-h-screen bg-no-repeat">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          
          <div className="card bg-base-50   w-[400px]  shrink-0 shadow-2xl">
          
            <form className="card-body">
              <fieldset className="fieldset">
              <h1 className="text-3xl font-bold text-white text-center">Login</h1>

                <label className="fieldset-label text-white">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label text-white">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover text-white">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <div className="divider text-white px-5"><span className="border border-white px-2">OR</span></div>
            <SocialLogin></SocialLogin>
            <p className="text-white text-center pb-5">Need An Account? <Link to='/register' className="link" >REGISTER</Link></p>
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default Login;
