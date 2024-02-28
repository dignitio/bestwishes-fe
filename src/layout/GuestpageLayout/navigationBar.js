import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PATH_DASHBOARD, PATH_HOME } from "routes/path";
import MainNavButton from "components/MainNavButton";
import Button from "components/Button";
import Modal from "components/Modal";
import CreateTribute from "pages/Tribute/CreateTribute";
import NavMenuButton from "components/NavMenuButton";
import userPix from "../../assets/images/userPix.png";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/downArrow.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

function Nav() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdownComponent, setShowDropDownComponent] = useState(false);

  return (
    <div className="bg-white flex justify-between items-center p-3 w-[100%] lg:gap-[100px]">
      <div className="hidden max-lg:block">
        <MainNavButton />
      </div>
      <div className="lg:w-[228px]">{/* eslint-disable-next-line react/self-closing-comp */}</div>

      <div className="max-sm:hidden py-1.5 px-1 flex items-center gap-[48px] w-fit ">
        <div onClick={() => setOpen(!open)}>
          <span className="lg:text-[20px]">Create a Tribute</span>
        </div>
        <NavLink to={PATH_HOME.root} className={({ isActive }) => `${isActive ? "text-primary" : "text-[#000000]"} lg:text-[20px]`}>
          <span>Home</span>
        </NavLink>
        <NavLink to={PATH_HOME.features} className={({ isActive }) => `${isActive ? "text-primary" : "text-[#000000]"} lg:text-[20px]`}>
          <span>Features</span>
        </NavLink>
        <NavLink to={PATH_HOME.about} className={({ isActive }) => `${isActive ? "text-primary" : "text-[#000000]"} lg:text-[20px]`}>
          Why BestWishes.io
        </NavLink>
      </div>
      <div className="flex items-center text-xs gap-[46px] w-fit">
        {isLoggedIn ? (
        <div className=" flex items-center gap-2">
          <img src={userPix} alt="userPix" className="w-9" />
          <span
            className="hover:bg-gray-100 rounded-md"
            onClick={() => setShowDropDownComponent(!showDropdownComponent)}
          >
            <ArrowDown />
          </span>
        </div>
        ) : ( 
        <div className=" hidden md:flex gap-[46px] ">
          <Button
            type={Button}
            onClick={() => setIsLoggedIn(true)}
            className="text-[#FF433C] text-center lg:text-[24px] bg-white border border-[#FF433C] rounded-[100px] lg:w-[123px] lg:h-[54px]"
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button
            type={Button}
            className="bg-primary max-md:h-7 text-white max-md:ml-16 max-md:mx-4 max-sm:ml-6 h-8 hover:bg-red-500 max-sm:px-2.5 max-sm:w-60 rounded-[100px] lg:w-[244px] lg:h-[54px] text-center lg:text-[24px]"
          >
            <Link to="/register">Create Account</Link>
          </Button>
        </div>
        )}
      </div>

      {showDropdownComponent && (
        <div className=" bg-white border shadow-md rounded-md p-2 absolute w-[14rem] lg:w-[30rem] right-1 lg:right-2 top-[3rem] lg:top-[3rem] flex flex-col gap-y-[20px] z-20 font-medium ">
          {/* edit profile */}
          <div className=" flex items-center gap-x-4 ">
            <NavLink to={PATH_DASHBOARD.root} className=" text-gray-700">
              My Dashboard
            </NavLink>
          </div>
          {/* change password */}
          <div className=" flex gap-x-4 items-center">
            <NavLink to={PATH_DASHBOARD.profile} className=" text-gray-700">
              My profile
            </NavLink>
          </div>
          <Button className=" text-red-500 flex gap-x-4 items-center  font-bold ">
            <span>Logout</span>
          </Button>
        </div>
      )}

      <Modal width={600} open={open} onClose={() => setOpen(!open)}>
        <CreateTribute />
      </Modal>
    </div>
  );
}

export default Nav;
