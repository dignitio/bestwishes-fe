import Button from "components/Button";
import DeleteDropdown from "components/DeleteDropdown";
import { useState } from "react";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as HideIcon } from "../../../assets/icons/eye-slash.svg";

function DeleteTribute() {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-md max-sm:max-w-xs  max-lg:max-w-md mx-auto max-lg:h72">
      <TrashIcon className="w-24 max-sm:w-20 h-24 mx-auto mb-5 max-sm:mb-3 -mt-6" />
      <h3 className="font-semibold text-center mx-auto max-sm:text-sm max-lg:text-lg text-xl max-w-[230p max-sm:max-w-full">
        Are you sure you want to delete this tribute?
      </h3>
      <p className="py-3 pb-6 max-sm:text-xs max-lg:text-base text-lg text-center">
        This is an irreversible action, once deleted, datas will be lost
      </p>
      <div className="flex justify-between text-white text-sm mb-5 max-sm:mx-0 max-lg:mx-8 mx-3">
        <DeleteDropdown
          heading={
            <Button type="button" className="bg-sky-800 h-9 max-lg:h-8 max-sm:h-7">
              yes Delete!
            </Button>
          }
        >
          <div className="text-gray-700 tracking-tight">
            <div
              className="flex items-center my-1 cursor-pointer hover:bg-gray-100 pl-2"
              onClick={() => setOpen(true)}
            >
              <TrashIcon className="w-3 mb-1 mr-1" />
              <p>Delete Tribute</p>
            </div>
            <div className="flex items-center my-1 cursor-pointer hover:bg-gray-100 pl-2">
              <HideIcon className="w-3 mb-0.5 mr-1" />
              <p>Hide Tribute</p>
            </div>
          </div>
        </DeleteDropdown>

        <Button type="button" className="h-9 max-lg:h-8 max-sm:h-7">
          No, Cancel
        </Button>
      </div>
    </div>
  );
}

export default DeleteTribute;
