import Button from "components/Button";
import { useState } from "react";
import  duplicateImage from "../../../assets/images/duplicate.png"

function DuplicateTribute() {
    const [open , setOpen] = useState(false)
    return ( 
        <div className="max-w-md max-sm:max-w-xs  max-lg:max-w-lg mx-auto">
            <img src={duplicateImage} alt="duplicate"  className="mx-auto w-40 max-md:w-36"/>
            <h3 className="text-center max-sm:text-lg text-2xl my-3 max-md:mb-1">You are about to duplicate this tribute, kindly change the name to proceed</h3>
            <div>
                <input type="text" placeholder="Happy birthday Ifeoluwa - copy" className="mt-4 max-md:mt-1 mb-6 max-md:mb-3 py-2 rounded-xs w-full max-lg:text-base text-lg tracking-tight border pl-4 text-sky-800 outline-0 h-14 max-md:h-12"/>
            </div>
            <Button type="button" className="h-14 max-md:h-12 mb-5 rounded-md w-full text-white max-sm:text-xs max-lg:text-base bg-sky-800">
                Duplicate
            </Button>
        </div>
     );
}

export default DuplicateTribute;