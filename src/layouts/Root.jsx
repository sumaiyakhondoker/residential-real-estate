import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Root = () => {
  return (
    <div >
      <Navbar></Navbar>
<div className="px-2 lg:px-0">
<Outlet></Outlet>
</div>
      

      <Footer></Footer>
    </div>
  );
};

export default Root;
