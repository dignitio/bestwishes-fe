import Button from "components/Button";
import Dropdown from "components/Dropdown";
import { useState } from "react";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg"
import { ReactComponent as HideIcon } from "../../../assets/icons/eye-slash.svg"

function DeleteTribute() {
    const [open , setOpen] = useState(false)
    return ( 
        <div className="max-w-[250px] mx-auto">
            <TrashIcon className="w-24 h-24 mx-auto mb-5 -mt-6"/>
            <h3 className="font-semibold text-center mx-auto text-sm max-w-[230px]">Are you sure you want to delete this tribute?</h3>
            <p className="py-3 pb-6 text-xs text-center">This is an irreversible action, once deleted, datas will be lost</p>
            <div className="flex justify-between text-white text-[9px] mb-5">
                <Dropdown heading={<Button type="button" className="text-[9px] bg-sky-800 h-6">
                    yes Delete!
                </Button>}>
                    <div className="text-[10px] text-gray-700 tracking-tighter">
                        <div className="flex items-center my-1 cursor-pointer hover:bg-gray-100 pl-2" onClick={() => setOpen(true)}>
                            <TrashIcon className="w-3 mb-1 mr-1"/>
                            <p>Delete Tribute</p>
                        </div>
                        <div className="flex items-center my-1 cursor-pointer hover:bg-gray-100 pl-2">
                            <HideIcon className="w-3 mb-0.5 mr-1" />
                            <p>Hide Tribute</p>
                        </div>
                    </div>
                </Dropdown>
                
                <Button type="button" className="h-6">
                    No, Cancel
                </Button>
            </div>
        </div>
     );
}

export default DeleteTribute;