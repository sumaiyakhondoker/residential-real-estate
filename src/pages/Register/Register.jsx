import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="bg-[url('/loginBackground.svg')] bg-cover min-h-screen bg-no-repeat">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          
          <div className="card bg-base-50   w-[400px]  shrink-0 shadow-2xl">
          
            <form className="card-body">
              <fieldset className="fieldset">
              <h1 className="text-3xl font-bold text-white text-center">Register</h1>

                <label className="fieldset-label text-white">Name</label>
                <input type="text" className="input" placeholder="Name" />
                <label className="fieldset-label text-white">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label text-white">Photo URL</label>
                <input type="text" className="input" placeholder="Photo URL" />
                <label className="fieldset-label text-white">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            
            
            <p className="text-white text-center pb-5"> Already A User? <Link to='/login' className="link" >LOGIN</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;