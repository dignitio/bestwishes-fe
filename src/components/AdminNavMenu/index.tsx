import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { PATH_ADMIN } from "routes/path";
import logo from "../../assets/images/white_logo.png";
import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburger.svg";
import { ReactComponent as CategoryIcon } from "../../assets/icons/category.svg";
import { ReactComponent as LayerIcon } from "../../assets/icons/layer.svg";
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/card.svg";
import { ReactComponent as GearIcon } from "../../assets/icons/gear.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/people.svg";
import { ReactComponent as TransactionIconIcon } from "../../assets/icons/wallet-minus.svg";
import { ReactComponent as SupportIcon } from "../../assets/icons/like-dislike.svg";
import { ReactComponent as LogOutIcon } from "../../assets/icons/login.svg";

const AdminNavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
        <button onClick={toggleMenu} className="text-gray-300 focus:outline-none focus:shadow-outline">
            <p>
            {isMenuOpen ? (
                <span className='absolute text-2xl z-20 max-sm:text-base top-0 max-sm:-right-48 -right-80'>x</span>
            ) : (
                <HamburgerIcon className=' max-lg:w-7 max-lg:h-7'/>
            )}
            </p>
        </button>

      {isMenuOpen && (
        <div className="absolute h-screen -ml-4 -mt-12 pl-8 pt-20 top-4 max-sm:w-60 w-96 bg-primary text-white rounded-sm shadow-lg overflow-hidden z-10">
            <div className="max-sm:text-sm max-md:text-lg max-sm:-ml-4 -ml-8">
                <img src={logo} alt='logo'  className='max-sm:w-16 max-sm:ml-12 max-sm:mb-8 mb-12 max-lg:mx-auto'/>
                <div className="mb-6">
                    <NavLink to={PATH_ADMIN.root} end className={({ isActive }) => isActive ? "flex max-sm:items-end max-lg:items-center py-2.5 px-4 bg-white text-primary" : "flex max-sm:items-end max-lg:items-center py-2.5 px-4 hover:bg-white hover:text-primary"}>
                        <span className="mr-2">
                        <CategoryIcon className='w-6 h-6 max-sm:w-4 max-sm:h-4' />
                        </span>
                        <span className="tracking-tight">Dashboard</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <NavLink to={PATH_ADMIN.tribute} className={({ isActive }) => isActive ? "flex max-sm:items-end max-lg:items-center py-2.5 px-4 bg-white text-primary" : "flex max-sm:items-end max-lg:items-center py-2.5 px-4 hover:bg-white hover:text-primary"}>
                        <span className="mr-2">
                        <LayerIcon className='w-6 h-6 max-sm:w-4 max-sm:h-4'/>
                        </span>
                        <span className="tracking-tight">Tribute</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <NavLink to={PATH_ADMIN.users} className={({ isActive }) => isActive ? "flex max-sm:items-end max-lg:items-center py-2.5 px-4 bg-white text-primary" : "flex max-sm:items-end max-lg:items-center py-2.5 px-4 hover:bg-white hover:text-primary"}>
                        <span className="mr-2">
                        <UserIcon className='w-6 h-6 max-sm:w-4 max-sm:h-4'/>
                        </span>
                        <span className="tracking-tight">Users</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <NavLink to={PATH_ADMIN.wishcard} className={({ isActive }) => isActive ? "flex max-sm:items-end max-lg:items-center py-2.5 px-4 bg-white text-primary" : "flex max-sm:items-end max-lg:items-center py-2.5 px-4 hover:bg-white hover:text-primary"}>
                        <span className='mr-2'>
                        <EditIcon className='w-6 h-6 max-sm:w-4 max-sm:h-4'/>
                        </span>
                        <span className="tracking-tight">wish card</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <NavLink to={PATH_ADMIN.wishlist} className={({ isActive }) => isActive ? "flex max-sm:items-end max-lg:items-center py-2.5 px-4 bg-white text-primary" : "flex max-sm:items-end max-lg:items-center py-2.5 px-4 hover:bg-white hover:text-primary"}>
                        <span className='mr-2'>
                        <NoteIcon className='w-6 h-6 max-sm:w-4 max-sm:h-4'/>
                        </span>
                        <span className="tracking-tight">Wishlist</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <NavLink to={PATH_ADMIN.transactions} className={({ isActive }) => isActive ? "flex max-sm:items-end max-lg:items-center py-2.5 px-4 bg-white text-primary" : "flex max-sm:items-end max-lg:items-center py-2.5 px-4 hover:bg-white hover:text-primary"}>
                        <span className="mr-2">
                        <TransactionIconIcon className='w-6 h-6 max-sm:w-4 max-sm:h-4'/>
                        </span>
                        <span className="tracking-tight">Transactions</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <NavLink to={PATH_ADMIN.settings} className={({ isActive }) => isActive ? "flex max-sm:items-end max-lg:items-center py-2.5 px-4 bg-white text-primary" : "flex max-sm:items-end max-lg:items-center py-2.5 px-4 hover:bg-white hover:text-primary"}>
                        <span className="mr-2">
                        <GearIcon className='w-6 h-6 max-sm:w-4 max-sm:h-4'/>
                        </span>
                        <span className="tracking-tight">Settings</span>
                    </NavLink>
                </div>
                <div className="mb-6">
                    <button className="flex cursor-pointer py-2.5 px-4 hover:bg-white hover:text-primary w-full">
                        <span className="mr-2">
                        <LogOutIcon className='w-6 h-6 max-sm:w-4 max-sm:h-4'/>
                        </span>
                        <span className="tracking-tight ">Logout</span>
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default AdminNavMenu;
