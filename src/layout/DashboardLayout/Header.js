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
        <div className="bg-white ">
            <div className="flex justify-between items-center max-sm:pl-2.5 py-6 px-2 max-lg:pl-6 max-lg:py-8">
                <div className="hidden max-lg:block ml-3">
                    <NavMenuButton/>
                </div>
                <div className="max-lg:hidden">
                    <h3 className="font-medium text-2xl max-lg:text-xl -mb-2">Hello Eni!</h3>
                    <p className="font-light text-base max-lg:text-sm inline">Welcome to your Dashboard!</p>
                    <span className="text-lg">👋</span>
                </div>
                <button className="border border-gray-200 max-sm:hidden bg-gray-50 rounded-md py-6 h-12 px-3 flex items-center w-5/12 max-md:w-64 max-lg:w-80">
                    {}
                    <span className="pr-3 max-lg:px-1.5 opacity-40">
                        <SearchIcon className="max-lg:w-3 max-lg:h-3" />
                    </span>
                    <span className="w-full">
                        <input type="text" placeholder="Enter your search here..." className="outline-0 bg-transparent text-sm h-20 w-full"/>
                    </span>
                </button>
                <div className="flex items-center text-base">
                    <Button onClick={() => setOpen(!open)} type={Button} className="bg-primary max-md:h-12 text-white max-md:ml-16 mx-10 max-md:mx-4  max-sm:ml-6 hover:bg-white hover:text-primary hover:border-2 hover:border-primary max-sm:px-2.5 max-sm:w-44 h-12 rounded-lg">
                        Create Tribute +
                    </Button>
                    <div className="hover:bg-gray-100 rounded-xl p-2 mr-4 max-lg:hidden">
                        <span>
                            <BellIcon />
                        </span>
                    </div>
                    <div className="mx-5 flex items-center max-md:ml-6">
                        <img src={userPix} alt="userPix" className="w-14"/>
                        <span  className="ml-4 hover:bg-gray-100 rounded-md p-2 max-lg:hidden">
                            <ArrowDown />
                        </span>
                    </div>
                </div>
                <Modal width={900} open={open} onClose={() => setOpen(!open)}>
                    <CreateTribute />
                </Modal>
            </div>
        </div>
     );
}

export default Header;