import Button from "components/Button";
import { useState } from "react";
import  duplicateImage from "../../../assets/images/duplicate.png"

function DuplicateTribute() {
    const [open , setOpen] = useState(false)
    return ( 
        <div className="max-w-[300px] mx-auto">
            <img src={duplicateImage} alt="duplicate"  className="mx-auto -mt-5 w-28 mb-6"/>
            <h3 className="text-center text-sm">You are about to duplicate this tribute, kindly change the name to proceed</h3>
            <div>
                <input type="text" placeholder="Happy birthday Ifeoluwa - copy" className="my-4 py-2 rounded-[5px] w-full text-[10px] tracking-tighter border pl-4 text-sky-800 outline-0"/>
            </div>
            <Button type="button" className="h-6 mb-5 rounded-sm w-full text-white text-[9px] bg-sky-800">
                Duplicate
            </Button>
        </div>
     );
}

export default DuplicateTribute;