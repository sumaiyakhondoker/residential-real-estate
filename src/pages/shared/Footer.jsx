import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className=" bg-base-200 text-base-content  pt-5 md:pt-10 pb-10 lg:pb-20 relative ">
      <div className="max-w-7xl mx-auto footer sm:footer-horizontal">
        <aside>
          <h3 className=" text-2xl text-accent font-semibold flex items-center">
            <HiOutlineBuildingOffice2></HiOutlineBuildingOffice2>
            <span className="font-extrabold mx-1">GrandVista</span> Homes
          </h3>
          <p>
            Discover your dream home with{" "}
            <span className="font-medium">GrandVista Homes</span>. <br />{" "}
            Explore our wide range of residential properties, <br /> and let us
            help you find the perfect place to call home. <br /> Contact us
            today for personalized assistance.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Properties Listing</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <div>
          <form>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-accent text-white join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>

          {/*  */}
          <div className="grid grid-flow-col gap-4 mt-5 text-2xl">
            <a href="#">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#">
              <FaFacebookF></FaFacebookF>
            </a>
            <a href="#">
              <IoLogoYoutube></IoLogoYoutube>
            </a>
            <a href="#">
              <RiInstagramFill></RiInstagramFill>
            </a>
          </div>
        </div>

        <p className=" absolute bottom-5  lg:left-[570px] ">
          Copyright © {new Date().getFullYear()} - All right reserved by
          GrandVista Homes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
