/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import Modal from "components/Modal";
import { motion } from "framer-motion";
import SwitchButton from "components/Switch";
import wishListData from "layout/Lists/wishListData";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "components/Dropdown";
import ShareWishlistModal from "components/ShareComponent";
import WishlistModal from "components/WishListModal";
import DeleteWishlist from "./DeleteWishlist";
import { ReactComponent as VerticalDot } from "../../assets/icons/wishlist-vertical-dots.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/wishlist-send.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/link.svg";
import { ReactComponent as DuplicateIcon } from "../../assets/icons/simcard-2.svg";
import { ReactComponent as CopyIcon } from "../../assets/icons/size.svg";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as EyeSlash } from "../../assets/icons/eye-slash.svg";
import emptyWishlist from "../../assets/images/wishlist-empty-state-image.png";
import DuplicateWishlist from "./DuplicateWishlist";

function Wishlist() {
  const [modeValue, setModeValue] = useState();
  const switchMode = (wishlistID) => {
    wishListData[wishlistID - 1].publishedValue = !wishListData[wishlistID - 1].publishedValue;
    setModeValue((prevMode) => !prevMode);
  };
  const [open, setOpen] = useState(false);
  const [activeSend, setActiveSend] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [duplicateModal, setDuplicateModal] = useState(false);

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // State to manage visibility of wallet balance
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  // Function to toggle visibility
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <div className="flex flex-col w-full justify-between p-6">
      <div className="w-full flex flex-col md:flex-row justify-between">
        {wishListData && (
          <div className="py-3 md:py-[17px] text-black md:w-[290px] rounded-md bg-white md:mr-6 md:mb-0 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="ml-4 text-lg font-nunito text-bgWalletBalance">Wallet Balance</p>
                <span className="ml-4 mt-2 text-bgWalletBalanceFigure text-2xl font-thin font-nunito flex max-md:text-2xl max-lg:text-3xl">
                  <p>&#x20A6;</p>
                  <p className="font-medium">{isBalanceVisible ? "126,997.90" : "******"}</p>
                </span>
              </div>
              <div className="cursor-pointer" onClick={toggleBalanceVisibility}>
                {isBalanceVisible ? <EyeSlash /> : <Eye />}
              </div>
            </div>
          </div>
        )}
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.95 }}
          className="bg-white text-primary px-5 py-3 md:mr-6 md:mb-6 w-full md:w-auto rounded-md self-center border border-primary outline-none hover:bg-primary hover:text-white"
          type="button"
          onClick={openModal}
        >
          Create Wishlist +
        </motion.button>
        <WishlistModal open={isModalOpen} onClose={closeModal} />
      </div>
      {wishListData.length === 0 ? (
        <div className="bg-white h-[825px] w-auto mx-6 overflow-hidden flex flex-col justify-center items-center">
          <div>
            <img src={emptyWishlist} alt="empty-state" />
          </div>
          <div className="flex flex-col justify-center items-center capitalize mt-1 text-lg">
            <p>You Currently do not have any card available</p>
            <div className="mt-2">
              <span className="mr-1 text-primary cursor-pointer" onClick={() => setOpen(!open)}>
                Click here
              </span>
              to get started
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="grid-cols-3 max-lg:grid-cols-2 grid max-sm:block mt-9 max-lg:mx-0 max-lg:w-full">
            {wishListData.map((wishlist) => (
              <Link
                to={`/dashboard/wishlist/${wishlist.id}/edit`}
                className={`bg-no-repeat bg-cover flex flex-col justify-between bg-center relative h-[282px] mb-8 py-3.5 px-4 max-lg:mx-4 mr-12 max-h-68 lg:text-xs text-sm rounded-xl`}
                style={{ backgroundImage: `url(${wishlist.photoSrc})` }}
                key={wishlist.id}
              >
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col">
                    <p className="text-white mb-1 text-[16px]">{wishlist.Title}</p>
                    <p className="text-white text-[14px]">{wishlist.Items}</p>
                  </div>

                  {wishlist.draft ? (
                    <p className="text-slate-400 text-xs tracking-tight">Draft</p>
                  ) : (
                    <div>
                      <SwitchButton />
                    </div>
                  )}
                </div>
                <div className="flex items-center relative justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate();
                    }}
                  >
                    <SendIcon
                      onClick={() => {
                        setActiveSend(true);
                      }}
                      className="cursor-pointer"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="w-4 h-full bg-none"
                  >
                    <Dropdown
                      heading={
                        <VerticalDot
                          className="w-full bg-black hover:bg-black cursor-pointer rounded-lg"
                          onClick={(e) => e.preventDefault()}
                        />
                      }
                    >
                      <div className="text-sm relative tracking-tighter">
                        <div
                          className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3"
                          onClick={() => setDeleteModal(true)}
                        >
                          <TrashIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-0.5 max-sm:mb-1 max-lg:my-1 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                          <p>Delete Wishlist</p>
                        </div>
                        <div className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                          <EditIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-1 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                          <Link to={`/dashboard/wishlist/${wishlist.id}/edit`}>Edit wishlist</Link>
                        </div>
                        <div className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                          <ShareIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-0.5 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                          <p>Share wishlist</p>
                        </div>
                        <div
                          className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3"
                          onClick={() => setDuplicateModal(true)}
                        >
                          <DuplicateIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-0.5 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                          <p>Duplicate</p>
                        </div>
                        <div className="flex items-center mt-1.5 max-sm:mt-3 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                          <CopyIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                          <p>Copy wishlist link</p>
                        </div>
                      </div>
                    </Dropdown>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <Modal width={500} open={deleteModal} onClose={() => setDeleteModal(!deleteModal)}>
        <DeleteWishlist />
      </Modal>
      <Modal width={500} open={duplicateModal} onClose={() => setDuplicateModal(!duplicateModal)}>
        <DuplicateWishlist />
      </Modal>
      <ShareWishlistModal open={activeSend} onClose={() => setActiveSend(!activeSend)} />
    </div>
  );
}

export default Wishlist;
