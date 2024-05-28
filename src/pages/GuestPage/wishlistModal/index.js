import React, { useState } from "react";
import Modal from "components/Modal";
import WishItems from "layout/Lists/wishlist";
import CreateGuestTribute from "pages/GuestPage/CreateTribute";
import wishlistImage from "../../../assets/images/wishlistimage.jpeg";



function WishListModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white p-3 rounded-md overflow-scroll h-[561px]">
images

      {/* <div className="flex flex-col ">
        <img src={wishlistImage} className="rounded-lg" alt="pic" />
        <div className="translate-y-[-180%] p-3">
          <p className="text-[24px] font-bold">John Wishlist</p>
          <p className="text-[14px]">12 days left</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[28px]">
        {WishItems.map((items) => (
          <div className="bg-[#F0F1F5] rounded-xl cursor-pointer" onClick={() => setOpen(!open)}>
            <img src={items.image} className="rounded-t-xl" alt="wish" />
            <div className="flex items-center p-[12px] justify-between">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[9px]">{items.name}</p>
                <p className="text-[14px] font-semibold text-[#1061B1]">{items.price}</p>
                <p className="text-[7px]">{items.discountPrice}</p>
              </div>
              <p className="text-[10px]">{items.discountPercent}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal className="w-[100%] md:w-[700px]" open={open} onClose={() => setOpen(!open)}>
        <CreateGuestTribute />
      </Modal> */}
    </div>
  );
}

export default WishListModal;
