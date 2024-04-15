import { useState } from "react";

import Button from "components/Button";

import duplicateImage from "../../../assets/images/duplicate.png";

function DuplicateWishlist() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-sm max-sm:max-w-xs  max-lg:max-w-md  mx-auto">
      <img src={duplicateImage} alt="duplicate" className="mx-auto -mt-5 w-28 mb-6" />
      <h3 className="text-center max-sm:text-sm max-lg:text-lg text-xl">
        You are about to duplicate this wishlist, kindly change the name to proceed
      </h3>
      <div>
        <input
          type="text"
          placeholder="Happy birthday Ifeoluwa - copy"
          className="my-4 py-2 rounded-xs w-full max-sm:text-xs max-lg:text-base text-lg tracking-tight border pl-4 text-sky-800 outline-0"
        />
      </div>
      <Button
        type="button"
        className="h-10 max-lg:h-8 max-sm:h-6 mb-5 rounded-sm w-full text-white max-sm:text-xs max-lg:text-base bg-sky-800"
      >
        Duplicate
      </Button>
    </div>
  );
}

export default DuplicateWishlist;
