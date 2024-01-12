import Button from "components/Button";
import userPix from "../../assets/images/userPix.png"
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg"
import { ReactComponent as ArrowDown } from "../../assets/icons/downArrow.svg"
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"

function Header() {
    return ( 
        <div className="bg-white flex justify-between items-center py-4 px-2">
            <div>
                <h3 className="font-medium text-lg -mb-2">Hello Eni!</h3>
                <p className="font-light text-xs inline">Welcome to your Dashboard!</p>
                <span className="text-lg">👋</span>
            </div>
            <button className="border border-gray-200 bg-gray-50 rounded-sm py-1.5 px-1 flex items-center w-1/4">
                {}
                <span className="px-2">
                    <SearchIcon />
                </span>
                <span>
                    <input type="text" placeholder="search" className="outline-0 bg-transparent text-sm"/>
                </span>
            </button>
            <div className="flex items-center text-xs">
                <Button type={Button}>
                    <span className="bg-red-500 px-4 py-2 rounded-sm text-white hover:bg-red-600">+ Create Card</span>
                </Button>
                <Button type={Button}>
                    <span className="bg-red-500 px-4 py-2 rounded-sm text-white hover:bg-red-600">Create Tribute +</span>
                </Button>
                <Button type={Button} className="hover:bg-gray-100 rounded-xl p-2">
                    <span>
                        <BellIcon />
                    </span>
                </Button>
                <div className="mx-3 flex items-center">
                    <img src={userPix} alt="userPix" className="w-9"/>
                    <span  className="ml-3 hover:bg-gray-100 rounded-md p-2">
                        <ArrowDown />
                    </span>
                </div>
            </div>
        </div>
     );
}

export default Header;