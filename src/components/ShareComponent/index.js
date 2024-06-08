// ShareWishlistModal.js
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
      <div className="flex flex-col">
        <span className="text-lg">Share</span>
        <div className="flex gap-4 mt-5 pr-6 pb-1 overflow-auto overflow-y-hidden cursor-pointer">
          {shareComponent.map((share) => (
            <div key={share.id} onClick={() => handleIconClick(share.link)}>
              <motion.div
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 0.95 }}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <share.icon className="cursor-pointer" />
                <span>{share.name}</span>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="bg-[#F0F1F5] mt-6 rounded-full w-full py-5 px-4 relative flex justify-between items-center">
          <p>{currentUrl || "copy this item here lorem ipsum"}</p>
          <motion.button
            type="button"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.95 }}
            className="absolute right-3 bg-primary py-2 px-6 rounded-full text-white"
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
