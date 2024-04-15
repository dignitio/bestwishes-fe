import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PATH_HOME } from "routes/path";
import Button from "components/Button";
import CreateTribute from "pages/Tribute/CreateTribute";
import Modal from "components/Modal";
import { ReactComponent as Closeicon } from "assets/icons/close.svg";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="relative font-lexend">
      <button
        onClick={toggleMenu}
        className="text-gray-500 focus:outline-none focus:shadow-outline"
      >
        <p>
{

            <HamburgerIcon className=" max-lg:w-7 max-lg:h-7" />
}
          
        </p>
      </button>

      {isMenuOpen && (
        <div className="fixed h-screen left-0 p-8 pt-20 top-0 max-sm:w-60 w-96 bg-white rounded-sm shadow-lg overflow-hidden z-10">
          <Closeicon className="w-4 absolute text-2xl z-20 max-sm:text-base top-[24px] right-[24px]" onClick={toggleMenu}/>
          <div className="flex flex-col gap-[48px]">
            <img src={logo} alt="logo" className="max-sm:w-16 max-sm:ml-12 max-lg:mx-auto" />
            <div className="flex flex-col gap-[100px]">
              <div className="flex flex-col gap-[48px] ">
                <NavLink
                  onClick={() => {
                    setOpen(!open);
                    toggleMenu();
                  }}
                  className=""
                >
                  <span>Create a Tribute</span>
                </NavLink>

                <NavLink
                  onClick={toggleMenu}
                  to={PATH_HOME.root}
                  className={({ isActive }) => (isActive ? "text-primary" : "text-[#000000]")}
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={toggleMenu}
                  to={PATH_HOME.features}
                  className={({ isActive }) => (isActive ? "text-primary" : "text-[#000000]")}
                >
                  <span>Features</span>
                </NavLink>
                <NavLink
                  onClick={toggleMenu}
                  to={PATH_HOME.about}
                  className={({ isActive }) => (isActive ? "text-primary" : "text-[#000000]")}
                >
                  Why BestWishes.io
                </NavLink>
              </div>
              <div className="flex flex-col items-center gap-4 w-full">
                <button type={Button} onClick={() => setIsLoggedIn(true)} className="w-full text-primary text-center text-[14px] bg-white border border-primary flex items-center rounded-md p-3 flex justify-center">
                  <Link to="/login">Login</Link>
                </button>
                <button className="w-full bg-primary text-white hover:bg-red-500 rounded-md text-center text-[14px] flex items-center p-3 text-center flex justify-center">
                  <Link to="/register">Create Account</Link>
                </button>
              </div>
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
