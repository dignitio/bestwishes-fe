import Button from "components/Button";
import userPix from "./images/userPix.png"
import { ReactComponent as BellIcon } from "./assets/icons/bell.svg"
import { ReactComponent as ArrowDown } from "./assets/icons/downArrow.svg"
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg"

function Header() {
    return ( 
        <div className="bg-white flex justify-between items-center py-6 px-4">
            <div>
                <h3 className="font-medium text-xl -mb-2">Hello Eni!</h3>
                <p className="font-light text-sm inline">Welcome to your Dashboard!</p>
                <span className="text-xl">👋</span>
            </div>
            <button className="border border-gray-200 bg-gray-50 rounded-sm py-2 px-2 flex items-center w-1/4">
                {}
                <span className="px-2">
                    <SearchIcon />
                </span>
                <span>
                    <input type="text" placeholder="search" className="outline-0 bg-transparent text-sm"/>
                </span>
            </button>
            <div className="flex items-center text-sm">
                <Button type={Button}>
                    <span className="bg-red-500 px-5 py-2 rounded-sm text-white hover:bg-red-600">+ Create Card</span>
                </Button>
                <Button type={Button}>
                    <span className="bg-red-500 px-5 py-2 rounded-sm text-white hover:bg-red-600">Create Tribute +</span>
                </Button>
                <Button type={Button} className="mx-4 hover:bg-orange-300 hover:bg-gray-100 rounded-xl p-2">
                    <span>
                        <BellIcon />
                    </span>
                </Button>
                <div className="mx-4 flex items-center">
                    <img src={userPix} alt="userPix" className="w-10"/>
                    <span  className="ml-4 hover:bg-gray-100 rounded-md p-2">
                        <ArrowDown />
                    </span>
                </div>
            </div>
        </div>
     );
}

export default Header;