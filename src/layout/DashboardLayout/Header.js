import { useState } from "react";
import Button from "components/Button";
import Modal from "components/Modal";
import CreateTribute from "pages/Tribute/CreateTribute";
import NavMenuButton from "components/NavMenuButton";
import userPix from "../../assets/images/userPix.png"
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg"
import { ReactComponent as ArrowDown } from "../../assets/icons/downArrow.svg"
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"

function Header() {

    const [open, setOpen] = useState(false);

    return ( 
        <div className="bg-white flex justify-between items-center max-sm:pl-2.5 py-4 px-2 max-lg:pl-6 max-lg:py-6">
            <div className="hidden max-lg:block">
                <NavMenuButton />
            </div>
            <div className="max-lg:hidden">
                <h3 className="font-medium text-lg -mb-2">Hello Eni!</h3>
                <p className="font-light text-xs inline">Welcome to your Dashboard!</p>
                <span className="text-lg">👋</span>
            </div>
            <button className="border border-gray-200 max-sm:hidden bg-gray-50 rounded-sm py-1.5 px-1 flex items-center w-1/4 max-md:w-52 max-lg:w-64">
                {}
                <span className="px-2 max-lg:px-1.5">
                    <SearchIcon className="max-lg:w-3 max-lg:h-3" />
                </span>
                <span>
                    <input type="text" placeholder="search" className="outline-0 bg-transparent text-sm"/>
                </span>
            </button>
            <div className="flex items-center text-xs">
                <Button type={Button} className="bg-primary max-md:h-7  text-white h-8 hover:bg-red-500 max-sm:px-2.5">
                    + Create Card
                </Button>
                <Button onClick={() => setOpen(!open)} type={Button} className="bg-primary max-md:h-7 text-white max-md:ml-16 mx-10 max-md:mx-4  max-sm:ml-6 h-8 hover:bg-red-500 max-sm:px-2.5">
                    Create Tribute 
                </Button>
                <div className="hover:bg-gray-100 rounded-xl p-2 mr-4 max-lg:hidden">
                    <span>
                        <BellIcon />
                    </span>
                </div>
                <div className="mx-3 flex items-center max-md:ml-3">
                    <img src={userPix} alt="userPix" className="w-9"/>
                    <span  className="ml-3 hover:bg-gray-100 rounded-md p-2 max-lg:hidden">
                        <ArrowDown />
                    </span>
                </div>
            </div>
            <Modal width={600} open={open} onClose={() => setOpen(!open)}>
                <CreateTribute />
            </Modal>
        </div>
     );
}

export default Header;