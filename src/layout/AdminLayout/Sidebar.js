import { NavLink } from "react-router-dom";
import { PATH_ADMIN } from "routes/path";
import logo from "../../assets/images/white_logo.png";
import { ReactComponent as CategoryIcon } from "../../assets/icons/category.svg";
import { ReactComponent as LayerIcon } from "../../assets/icons/layer.svg";
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/card.svg";
import { ReactComponent as GearIcon } from "../../assets/icons/gear.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/people.svg";
import { ReactComponent as TransactionIcon } from "../../assets/icons/wallet-minus.svg";
import { ReactComponent as LogOutIcon } from "../../assets/icons/login.svg";

function Sidebar() {
  return (
    <div className="bg-primary text-white flex flex-col h-full max-lg:hidden items-center py-4 w-52">
      <div className="w-20 mt-4 mb-16 mr-5">
        <img src={logo} alt="logo" />
      </div>

      <div className="text-sm w-full">
        <div className="mb-3">
          <NavLink
            to={PATH_ADMIN.root}
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-8 w-full bg-white text-primary"
                : "flex items-end py-2.5 px-8 hover:bg-white hover:hover:text-primary to-white"
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
            to={PATH_ADMIN.tribute}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-8 bg-white text-primary"
                : "flex items-end py-2.5 px-8 hover:bg-white hover:text-primary"
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
            to={PATH_ADMIN.users}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-8 bg-white text-primary"
                : "flex items-end py-2.5 px-8 hover:bg-white hover:text-primary"
            }
          >
            <span className="mr-2">
              <UserIcon className="w-5" />
            </span>
            <span className="tracking-tight">Users</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <NavLink
            to={PATH_ADMIN.wishcard}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-8 bg-white text-primary"
                : "flex items-end py-2.5 px-8 hover:bg-white hover:text-primary"
            }
          >
            <span className="mr-2">
              <EditIcon className="w-5"/>
            </span>
            <span className="tracking-tight">wish card</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <NavLink
            to={PATH_ADMIN.wishlist}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-8 bg-white text-primary"
                : "flex items-end py-2.5 px-8 hover:bg-white hover:text-primary"
            }
          >
            <span className="mr-2">
              <NoteIcon/>
            </span>
            <span className="tracking-tight">Wishlist</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <NavLink
            to={PATH_ADMIN.transactions}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-8 bg-white text-primary"
                : "flex items-end py-2.5 px-8 hover:bg-white hover:text-primary"
            }
          >
            <span className="mr-2">
              <TransactionIcon className="w-5" />
            </span>
            <span className="tracking-tight">Transactions</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <NavLink
            to={PATH_ADMIN.settings}
            className={({ isActive }) =>
              isActive
                ? "flex items-end py-2.5 px-8 bg-white text-primary"
                : "flex items-end py-2.5 px-8 hover:bg-white hover:text-primary"
            }
          >
            <span className="mr-2">
              <GearIcon />
            </span>
            <span className="tracking-tight">Settings</span>
          </NavLink>
        </div>
        <div className="mb-3">
          <button className="flex cursor-pointer py-2.5 px-8 hover:bg-white hover:text-primary pr-24">
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