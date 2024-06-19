import { NavLink } from "react-router-dom";
import { PATH_DASHBOARD } from "routes/path";
import logo from "../../assets/images/logo.png";
import { ReactComponent as CategoryIcon } from "../../assets/icons/category.svg";
import { ReactComponent as LayerIcon } from "../../assets/icons/layer.svg";
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as GearIcon } from "../../assets/icons/gear.svg";
import { ReactComponent as SupportIcon } from "../../assets/icons/like-dislike.svg";
import { ReactComponent as LogOutIcon } from "../../assets/icons/login.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet.svg";


function Sidebar() {
  return (
    <div className="bg-white flex flex-col h-full max-lg:hidden items-center py-4 px-6">
      <div className="w-20 mt-4 mb-16 mr-5">
        <img src={logo} alt="logo" />
      </div>

      <div className="text-sm">
        <div className="mb-3">
          <NavLink
            to={PATH_DASHBOARD.root}
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-indigo-100 to-white"
                : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-indigo-100 to-white"
            }
          >
            <span className="mr-2">
              <CategoryIcon />
            </span>
            <span className="tracking-tight">Dashboard</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <NavLink
            to={PATH_DASHBOARD.tribute}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-indigo-100 to-white"
                : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-indigo-100 to-white"
            }
          >
            <span className="mr-2">
              <LayerIcon />
            </span>
            <span className="tracking-tight">Tribute</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <NavLink
            to={PATH_DASHBOARD.wallet}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-indigo-100 to-white"
                : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-indigo-100 to-white"
            }
          >
            <span className="mr-2">
              <WalletIcon className="w-5"/>
            </span>
            <span className="tracking-tight">Wallet</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <NavLink
            to={PATH_DASHBOARD.wishlist}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-indigo-100 to-white"
                : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-indigo-100 to-white"
            }
          >
            <span className="mr-2">
              <NoteIcon />
            </span>
            <span className="tracking-tight">Wishlist</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <NavLink
            to={PATH_DASHBOARD.wishcard}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-indigo-100 to-white"
                : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-indigo-100 to-white"
            }
          >
            <span className="mr-2">
              <EditIcon />
            </span>
            <span className="tracking-tight">Wish Card</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <NavLink
            to={PATH_DASHBOARD.settings}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-indigo-100 to-white"
                : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-indigo-100 to-white"
            }
          >
            <span className="mr-2">
              <GearIcon />
            </span>
            <span className="tracking-tight">Settings</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <NavLink
            to={PATH_DASHBOARD.support}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-3 bg-gradient-to-r from-indigo-100 to-white"
                : "flex items-end py-2.5 px-3 hover:bg-gradient-to-r from-indigo-100 to-white"
            }
          >
            <span className="mr-2">
              <SupportIcon />
            </span>
            <span className="tracking-tight">Support</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <button className="flex cursor-pointer py-2.5 px-3 hover:bg-gradient-to-r from-indigo-100 to-white pr-24">
            <span className="mr-2">
              <LogOutIcon />
            </span>
            <span className="tracking-tight">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;