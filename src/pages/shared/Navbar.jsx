import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import userImg from '/user.png'

const Navbar = () => {
  const {user, logOut} = useAuth()
  console.log(user);

    const navlinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/properties'>Properties</NavLink></li>
    <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
    <li><NavLink to='/contact'>Contact Us</NavLink></li>
    
    {/* conditional ,if the user logged in */}
    <li><NavLink to='/userProfile'>User Profile</NavLink></li>
      
    
    
    </>

    const handleLogout = () =>{
      logOut()
      .then(()=>{
        console.log('user logged out');
      })
      .catch(error =>{
        console.log(error);
      })
    }
    return (
        <div className=" bg-base-100 shadow-sm ">
          <div className="max-w-7xl mx-auto navbar">
          <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navlinks}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-2xl text-accent font-semibold uppercase"><HiOutlineBuildingOffice2></HiOutlineBuildingOffice2><span className="font-extrabold">GrandVista</span> Homes</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    
    {user ? <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User Image"
            src={`${user.photoURL || userImg}`} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        
      </ul>
      <button onClick={handleLogout} className="btn ml-3">Logout</button>
    </div> 
    :
    <>
    <Link to='/register' className="btn btn-outline btn-accent mr-3 outline-accent  hover:text-white">Create Account</Link>
    <Link to='/login' className="btn btn-outline btn-accent  outline-accent  hover:text-white">Login</Link>
    </>
    
    
    }
  </div>
          </div>
  
</div>
    );
};

export default Navbar;