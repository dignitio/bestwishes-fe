import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PATH_DASHBOARD, PATH_HOME } from "routes/path";
import MainNavButton from "components/MainNavButton";
import Button from "components/Button";
import Modal from "components/Modal";
import CreateTribute from "pages/Tribute/CreateTribute";
import NavMenuButton from "components/NavMenuButton";
import playIcon from "assets/icons/play.png"
import muteIcon from "assets/icons/mute.png"
import userPix from "../../assets/images/userPix.png";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/downArrow.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

function Nav() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdownComponent, setShowDropDownComponent] = useState(false);
  const [play, setPlay] = useState(false)
  

  return (
    <div className="bg-white grid grid-cols-10 justify-between items-center px-3 py-[20px] w-[100%] xl:gap-[153px] gap-[100px] font-lexend">
      <div className="lg:hidden ">
        <MainNavButton />
      </div>
      <div className="hidden col-span-2 md:flex justify-center">
       <div className="cursor-pointer p-1" onClick={()=>setPlay(!play)}>
        {play ? (

          <img src={playIcon} alt="play" className=""/>
        ):(
          <img src={muteIcon} alt="mute" className=""/>

        )}
       </div>
      </div>

      <div className="hidden lg:flex justify-center py-1.5 px-1 items-center gap-[48px] w-full lg:col-span-7 xl:col-span-5 ">
        <div onClick={() => setOpen(!open)}>
          <span className="text-[18px]">Create a Tribute</span>
        </div>
        <NavLink
          to={PATH_HOME.root}
          className={({ isActive }) =>
            `${isActive ? "text-primary" : "text-[#000000]"} xl:text-[18px]`
          }
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          to={PATH_HOME.features}
          className={({ isActive }) =>
            `${isActive ? "text-primary" : "text-[#000000]"} xl:text-[18px]`
          }
        >
          <span>Features</span>
        </NavLink>
        <NavLink
          to={PATH_HOME.about}
          className={({ isActive }) =>
            `${isActive ? "text-primary" : "text-[#000000]"} xl:text-[18px]`
          }
        >
          Why BestWishes.io
        </NavLink>
      </div>
      <div className="flex items-center text-xs gap-[46px] w-fit col-span-3">
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
          <div className="hidden lg:flex xl:gap-[46px] gap-[24px] ">
            <Button
              type={Button}
              onClick={() => setIsLoggedIn(true)}
              className="text-primary text-center text-[18px] bg-white border border-primary flex items-center rounded-[100px] xl:py-[24px] xl:px-[30px]"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              type={Button}
              className="bg-primary text-white max-sm:ml-6 hover:bg-red-500 rounded-[100px] text-center xl:text-[18px] flex items-center xl:py-[24px] xl:px-[30px]"
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
          <Button className=" text-primary flex gap-x-4 items-center font-bold ">
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
