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
        <div className="bg-white flex justify-between items-center max-md:px-8 py-4 px-2">
            <div className="hidden max-md:block">
                <NavMenuButton />
            </div>
            <div className="max-md:hidden">
                <h3 className="font-medium text-lg -mb-2">Hello Eni!</h3>
                <p className="font-light text-xs inline">Welcome to your Dashboard!</p>
                <span className="text-lg">👋</span>
            </div>
            <button className="border border-gray-200 max-md:hidden bg-gray-50 rounded-sm py-1.5 px-1 flex items-center w-1/4">
                {}
                <span className="px-2">
                    <SearchIcon />
                </span>
                <span>
                    <input type="text" placeholder="search" className="outline-0 bg-transparent text-sm"/>
                </span>
            </button>
            <div className="flex items-center text-xs">
                <Button type={Button} className="bg-primary max-md:h-7 max-md:text-[11px] max-md:-ml-16 text-white h-8 hover:bg-red-500">
                    + Create Card
                </Button>
                <Button onClick={() => setOpen(!open)} type={Button} className="bg-primary max-md:h-7 max-md:text-[11px] text-white max-md:ml-16 mx-10 h-8 hover:bg-red-500">
                    Create Tribute 
                </Button>
                <div className="hover:bg-gray-100 rounded-xl p-2 mr-4 max-md:hidden">
                    <span>
                        <BellIcon />
                    </span>
                </div>
                <div className="mx-3 flex items-center max-md:ml-7">
                    <img src={userPix} alt="userPix" className="w-9"/>
                    <span  className="ml-3 hover:bg-gray-100 rounded-md p-2 max-md:hidden">
                        <ArrowDown />
                    </span>
                </div>
            </div>
            <Modal width={550} open={open} onClose={() => setOpen(!open)}>
                <CreateTribute />
            </Modal>
        </div>
     );
}

export default Header;