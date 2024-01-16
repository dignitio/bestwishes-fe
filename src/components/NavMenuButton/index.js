import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { PATH_DASHBOARD } from "routes/path";
import logo from "../../assets/images/logo.png";
import { ReactComponent as CategoryIcon } from "../../assets/icons/category.svg";
import { ReactComponent as LayerIcon } from "../../assets/icons/layer.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as GearIcon } from "../../assets/icons/gear.svg";
import { ReactComponent as SupportIcon } from "../../assets/icons/like-dislike.svg";
import { ReactComponent as LogOutIcon } from "../../assets/icons/login.svg";

const NavMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none focus:shadow-outline">
            <p>
            {isMenuOpen ? (
                <span className='absolute text-lg z-20 top-0'>x</span>
            ) : (
                // <HamburgerIcon className=''/>
                <img src={logo} alt='logo'  className='w-16 -ml-3'/>
            )}
            </p>
        </button>

      {isMenuOpen && (
        <div className="absolute h-screen -ml-8 -mt-8 pl-8 pt-20 top-4 w-60 bg-white rounded-sm shadow-lg overflow-hidden z-10">
            <div className="text-xs -ml-4">
                <div className="mb-6">
                    <NavLink to={PATH_DASHBOARD.root} end className={({ isActive }) => isActive ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-gray-200 to-white" : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-gray-200 to-white"}>
                        <span className="mr-2">
                        <CategoryIcon className='w-4 h-4' />
                        </span>
                        <span className="tracking-tight">Dashboard</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <NavLink to={PATH_DASHBOARD.tribute} className={({ isActive }) => isActive ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-gray-200 to-white" : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-gray-200 to-white"}>
                        <span className="mr-2">
                        <LayerIcon className='w-4 h-4'/>
                        </span>
                        <span className="tracking-tight">Tribute</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <NavLink to={PATH_DASHBOARD.createCard} className={({ isActive }) => isActive ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-gray-200 to-white" : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-gray-200 to-white"}>
                        <span className='mr-2'>
                        <EditIcon className='w-4 h-4'/>
                        </span>
                        <span className="tracking-tight">Create Wish Card</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <NavLink to={PATH_DASHBOARD.settings} className={({ isActive }) => isActive ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-gray-200 to-white" : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-gray-200 to-white"}>
                        <span className="mr-2">
                        <GearIcon className='w-4 h-4'/>
                        </span>
                        <span className="tracking-tight">Settings</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <NavLink to={PATH_DASHBOARD.support} className={({ isActive }) => isActive ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-gray-200 to-white" : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-gray-200 to-white"}>
                        <span className="mr-2">
                        <SupportIcon className='w-4 h-4'/>
                        </span>
                        <span className="tracking-tight">Support</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <button className="flex cursor-pointer py-2.5 px-3 hover:bg-gradient-to-r from-gray-200 to-white pr-24">
                        <span className="mr-2">
                        <LogOutIcon className='w-4 h-4'/>
                        </span>
                        <span className="tracking-tight">Logout</span>
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default NavMenuButton;
