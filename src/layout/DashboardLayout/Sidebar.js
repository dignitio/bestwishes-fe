import logo from "./images/logo.png"
import { ReactComponent as CategoryIcon } from "./assets/icons/category.svg"
import { ReactComponent as LayerIcon } from "./assets/icons/layer.svg"
import { ReactComponent as EditIcon } from "./assets/icons/edit.svg"
import { ReactComponent as GearIcon } from "./assets/icons/gear.svg"
import { ReactComponent as SupportIcon } from "./assets/icons/like-dislike.svg"
import { ReactComponent as LogOutIcon } from "./assets/icons/login.svg"

function Sidebar() {
    return ( 
        <div className="bg-white h-screen flex flex-col items-center py-4 px-8">
            <div className="mt-4 mb-20 mr-8">
                <img src={logo} alt="logo"/>
            </div>

            <div className="text-base">
                <div className="mb-3">
                    <button className="flex items-end py-3 px-3">
                        <span className="mr-2">
                            <CategoryIcon />
                        </span>
                        <span className="tracking-tight">Dashboard</span>
                    </button>
                </div>
                <div className="mb-3">
                    <button className="flex py-3 px-3">
                        <span className="mr-2">
                            <LayerIcon />
                        </span>
                        <span className="tracking-tight">Tribute</span>
                    </button>
                </div>
                <div className="mb-3">
                    <button className="flex cursor-pointer py-3 px-3">
                        <span className="mr-2">
                            <EditIcon />
                        </span>
                        <span className="tracking-tight">Create Wish Card</span>
                    </button>
                </div>
                <div className="mb-3">
                    <button className="flex cursor-pointer py-3 px-3">
                        <span className="mr-2">
                            <GearIcon />
                        </span>
                        <span className="tracking-tight">Settings</span>
                    </button>
                </div>
                <div className="mb-3">
                    <button className="flex cursor-pointer py-3 px-3">
                        <span className="mr-2">
                            <SupportIcon />
                        </span>
                        <span className="tracking-tight">Support</span>
                    </button>
                </div>
                <div className="mb-3">
                    <button className="flex cursor-pointer py-3 px-3 pr-24">
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