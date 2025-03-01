import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useForm } from "react-hook-form";

import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const UpdateProfile = () => {

    const {updateUserProfile, user} = useAuth()
    const auth = getAuth(app)
    
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
  const onSubmit = (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                data) => {

    // console.log(data);
    const {fullName,image} = data;
    

  updateUserProfile(fullName, image)
    
  .then(() => {
              toast.success('Profile Updated Successfully!')
            })
  .catch((error) => {
              toast.error(error);
            });
  
 
    
    
  };

  console.log(user);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Update Profile | GrandVista Homes</title>
      </Helmet>
      {/*  */}
      <div className="bg-[url('/updateProfilebg.jpg')] bg-cover min-h-screen bg-no-repeat ">
        <div className="hero min-h-screen">
        <div className="hero-overlay"></div>
          <div className="hero-content flex-col ">
            <div className="card bg-base-50   shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <fieldset className="fieldset">
                  <h1 className="text-3xl font-bold text-white text-center">
                    Update Your Profile Information
                  </h1>

                  <label className="fieldset-label text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder={user.fullName || ''}
                    {...register("fullName")}
                  />

                  <label className="fieldset-label text-white">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder={user.photoURL}
                    {...register("image")}
                  />

                  

                  <button className="btn btn-accent mt-4 text-white">Update</button>
                </fieldset>
              </form>

              
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default UpdateProfile;
