import React from "react";
import Button from "components/Button";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";

function DeleteWishlist() {
  return (
    <div className="max-w-md max-sm:max-w-xs  max-lg:max-w-md mx-auto max-lg:h72">
      <TrashIcon className="w-24 max-sm:w-20 h-24 mx-auto mb-5 max-sm:mb-3 -mt-6" />
      <h3 className="font-semibold text-center mx-auto max-sm:text-sm max-lg:text-lg text-xl max-w-[230p max-sm:max-w-full">
        Are you sure you want to delete this wishlist?
      </h3>
      <p className="py-3 pb-6 max-sm:text-xs max-lg:text-base text-lg text-center">
        This is an irreversible action, once deleted, data will be lost
      </p>
      <div className="flex justify-between text-white text-sm mb-5 max-sm:mx-0 max-lg:mx-8 mx-3">
        <Button type="button" className="bg-sky-800 h-9 max-lg:h-8 max-sm:h-7">
          yes Delete!
        </Button>
        <Button type="button" className="h-9 max-lg:h-8 max-sm:h-7">
          No, Cancel
        </Button>
      </div>
    </div>
  );
}

export default DeleteWishlist;
