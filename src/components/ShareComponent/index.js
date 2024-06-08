import { useState } from "react";
import Modal from "components/Modal";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import shareComponent from "layout/Lists/shareComponent";

function ShareWishlistModal({ open, onClose }) {
  const [currentUrl, setCurrentUrl] = useState("");
  const notify = () => toast("Copied!!!");

  const handleIconClick = (url) => {
    setCurrentUrl(url);
  };

  return (
    <Modal width={500} open={open} onClose={onClose}>
      <div className="flex w-full flex-col">
        <span className="text-lg px-12 md:px-0 lg:px-0">Share</span>
        <div className="flex gap-4 mt-3 lg:mt-5 md:mt-4 md:px-0 px-12 lg:pr-6 pb-1 scroll-bar-hide overflow-auto lg:overflow-auto lg:overflow-y-hidden cursor-pointer">
          {shareComponent.map((share) => (
            <motion.div
              key={share.id}
              onClick={() => handleIconClick(share.link)}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 0.95 }}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <share.icon className="cursor-pointer" />
              <span>{share.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="bg-[#F0F1F5] mt-6 ml-9 md:ml-0 rounded-full w-96 md:w-full lg:w-full py-2.5 px-6 lg:py-5 lg:px-4 relative flex gap-1 justify-between items-center">
          <p className=" line-clamp-1 w-full ">{currentUrl || "copy this item here lorem ipsum"}</p>
          <motion.button
            type="button"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.95 }}
            className=" bg-primary py-2 px-4 lg:py-2 lg:px-6 rounded-full text-white"
            onClick={() => {
              navigator.clipboard.writeText(currentUrl);
              notify();
            }}
          >
            Copy
          </motion.button>
          <Toaster />
        </div>
      </div>
    </Modal>
  );
}

export default ShareWishlistModal;
