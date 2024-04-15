import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PATH_HOME } from "routes/path";
import Button from "components/Button";
import CreateTribute from "pages/Tribute/CreateTribute";
import Modal from "components/Modal";
import logo from "../../assets/images/logo.png";
import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburger.svg";
// import { ReactComponent as CategoryIcon } from "../../assets/icons/category.svg";
// import { ReactComponent as LayerIcon } from "../../assets/icons/layer.svg";
// import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
// import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
// import { ReactComponent as GearIcon } from "../../assets/icons/gear.svg";
// import { ReactComponent as SupportIcon } from "../../assets/icons/like-dislike.svg";
// import { ReactComponent as LogOutIcon } from "../../assets/icons/login.svg";

const MainNavButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-gray-500 focus:outline-none focus:shadow-outline"
      >
        <p>
          {isMenuOpen ? (
            <span className="absolute text-2xl z-20 max-sm:text-base top-0 max-sm:-right-48 -right-80">
              x
            </span>
          ) : (
            <HamburgerIcon className=" max-lg:w-7 max-lg:h-7" />
          )}
        </p>
      </button>

      {isMenuOpen && (
        <div className="absolute h-screen -ml-4 -mt-12 pl-8 pt-20 top-4 max-sm:w-60 w-96 bg-white rounded-sm shadow-lg overflow-hidden z-10">
          <div className="flex flex-col gap-[48px]">
            <img src={logo} alt="logo" className="max-sm:w-16 max-sm:ml-12 max-lg:mx-auto" />
            <div className="flex flex-col gap-[48px] ">
              <NavLink
                onClick={() => setOpen(!open)}
                className=""
                
              >
                <span>Create a Tribute</span>
              </NavLink>

              <NavLink
                onClick={toggleMenu}
                to={PATH_HOME.root}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "text-[#000000]"
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to={PATH_HOME.features}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "text-[#000000]"
                }
              >
                <span>Features</span>
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to={PATH_HOME.about}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "text-[#000000]"
                }
              >
                Why BestWishes.io
              </NavLink>
              <Button
                type={Button}
                onClick={() => setIsLoggedIn(true)}
                className="text-[#FF433C] text-center py-2.5 px-4 bg-white border border-[#FF433C] rounded-[100px] lg:w-[123px] lg:h-[54px] w-[170px]"
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button
                type={Button}
                className="bg-primary text-white hover:bg-red-500 rounded-lg lg:w-[244px] lg:h-[54px] text-center lg:text-[24px] w-[170px] text-[14px]"
              >
                <Link to="/register">Create Account</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      <Modal width={600} open={open} onClose={() => setOpen(!open)}>
        <CreateTribute />
      </Modal>
    </div>
  );
};

export default MainNavButton;
