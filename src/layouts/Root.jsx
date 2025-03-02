import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Root = () => {
  return (
    <div >
      <Navbar></Navbar>
<div className="px-4 lg:p-0">
<Outlet></Outlet>
</div>
      

      <Footer></Footer>
    </div>
  );
};

export default Root;
