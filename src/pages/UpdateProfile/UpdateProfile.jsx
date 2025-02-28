import { Helmet, HelmetProvider } from "react-helmet-async";

const UpdateProfile = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Update Profile | GrandVista Homes</title>
            </Helmet>
            <div>
            this is update profile route
            </div>
        </HelmetProvider>
    );
};

export default UpdateProfile;