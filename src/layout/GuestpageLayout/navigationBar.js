import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { PATH_DASHBOARD, PATH_HOME } from "routes/path";
import MainNavButton from "layout/GuestpageLayout/GuestNavButton";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Button from "components/Button";
import Modal from "components/Modal";
import CreateTribute from "pages/Tribute/CreateTribute";
import playIcon from "assets/icons/play.png";
import muteIcon from "assets/icons/mute.png";
import userPix from "assets/images/userPix.png";
import { ReactComponent as BellIcon } from "assets/icons/bell.svg";
import { ReactComponent as ArrowDown } from "assets/icons/downArrow.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

function Nav() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [play, setPlay] = useState(false);



  return (
    <div className="bg-white px-5 py-[20px] w-[100%] font-lexend">
      <div className=" w-[100%] flex md:justify-between md:gap-[100px] md:items-center">
        <div className="flex justify-between items-center w-full md:max-lg:w-full lg:w-auto">
          <div className="lg:hidden w-[50%] ">
            <MainNavButton />
          </div>
          <div className="w-[30px]">
            <div className="cursor-pointer p-1 lg:w-[40px]" onClick={() => setPlay(!play)}>
              {play ? (
                <img src={playIcon} alt="play" className="w-full" />
              ) : (
                <img src={muteIcon} alt="mute" className="w-full" />
              )}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center p-2 mx-auto items-center gap-14">
          <div onClick={() => setOpen(!open)} className="cursor-pointer">
            <span className="text-[18px] cursor-pointer">Create a Tribute</span>
          </div>
          <NavLink
            to={PATH_HOME.root}
            className={({ isActive }) =>
              `${isActive ? "text-primary" : "text-[#000000]"}  xl:text-[18px]`
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
        <div className="flex items-center text-xs gap-[46px]">
          {isLoggedIn ? (
            <Menu>
              <div className="flex items-center gap-3">
                <img src={userPix} alt="userPix" className="w-11" />
                <MenuButton className="hover:bg-gray-100 rounded-md cursor-pointer">
                  <ArrowDown />
                </MenuButton>
              </div>

              <MenuItems
                transition
                anchor="bottom end"
                className="bg-white border shadow-md rounded-md p-2 absolute w-[14rem] lg:w-[20rem] right-1 lg:right-2 top-[3rem] lg:top-[5rem] flex flex-col gap-y-[20px] z-20 font-medium"
              >
                <MenuItem>
                  <div className="flex items-center gap-x-4">
                    <NavLink to={PATH_DASHBOARD.root} className="text-gray-700">
                      My Dashboard
                    </NavLink>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="flex items-center gap-x-4">
                    <NavLink to={PATH_DASHBOARD.profile} className="text-gray-700">
                      My profile
                    </NavLink>
                  </div>
                </MenuItem>

                <MenuItem>
                  <Button className="flex justify-center text-white hover:text-primary items-center font-bold">
                    <span className="">Logout</span>
                  </Button>
                </MenuItem>
              </MenuItems>
            </Menu>
          ) : (
            <div className="hidden lg:flex gap-[24px]">
              <Button
                type={Button}
                onClick={() => setIsLoggedIn(true)}
                className="text-primary text-center text-[15px] bg-white border border-primary flex items-center rounded-[100px] "
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button
                type={Button}
                className="bg-primary text-white hover:bg-red-500 rounded-[100px] text-center xl:text-[15px] flex items-center"
              >
                <Link to="/register">Create Account</Link>
              </Button>
            </div>
          )}
        </div>

        <Modal width={600} open={open} onClose={() => setOpen(!open)}>
          <CreateTribute />
        </Modal>
      </div>
    </div>
  );
}

export default Nav;
