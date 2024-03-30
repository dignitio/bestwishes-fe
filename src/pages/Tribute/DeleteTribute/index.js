import Button from "components/Button";
import DeleteDropdown from "components/DeleteDropdown";
import { useState } from "react";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg"
import { ReactComponent as HideIcon } from "../../../assets/icons/eye-slash.svg"

function DeleteTribute() {
    const [open , setOpen] = useState(false)
    return ( 
        <div className="max-w-lg max-sm:max-w-[23em] mx-auto">
            <TrashIcon className="w-32 max-sm:w-28 h-32 mx-auto mb-5 max-sm:mb-3"/>
            <h3 className="font-semibold text-center mx-auto max-md:text-xl text-2xl max-sm:max-w-full pt-3 max-md:pt-0">Are you sure you want to delete this tribute?</h3>
            <p className="py-6 max-md:py-3.5 pb-7 max-md:text-lg text-xl text-center">This is an irreversible action, once deleted, datas will be lost</p>
            <div className="flex justify-between text-white text-lg max-md:text-base mb-5 max-sm:mx-0 max-lg:mx-8 mx-3">
                <DeleteDropdown heading={<Button type="button" className="bg-sky-800 h-12 max-lg:h-11 px-10 max-md:ml-6 rounded-lg">
                    yes Delete!
                </Button>}>
                    <div className="text-gray-700 tracking-tight">
                        <div className="flex items-center py-1.5 cursor-pointer hover:bg-gray-100 pl-2" onClick={() => setOpen(true)}>
                            <TrashIcon className="w-5 mb-1 mr-1"/>
                            <p>Delete Tribute</p>
                        </div>
                        <div className="flex items-center py-1 cursor-pointer hover:bg-gray-100 pl-2">
                            <HideIcon className="w-5 mb-0.5 mr-1" />
                            <p>Hide Tribute</p>
                        </div>
                    </div>
                </DeleteDropdown>
                
                <Button type="button" className="h-12 px-10 max-lg:h-11 max-md:mr-6 rounded-lg">
                    No, Cancel
                </Button>
            </div>
        </div>
     );
}

export default DeleteTribute;