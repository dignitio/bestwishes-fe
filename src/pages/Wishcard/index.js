import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "components/Modal";
import Dropdown from "components/Dropdown";
import SwitchButton from "components/Switch";
import wishCardDetails from "layout/Lists/wishCardDetails";
import DeleteWishcard from "./DeleteWishcard";
import DuplicateWishcard from "./DuplicateWishcard";
import { ReactComponent as VerticalDot } from "../../assets/icons/dotsVertical.svg"
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg"
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg"
import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg"
import { ReactComponent as ShareIcon } from "../../assets/icons/link.svg"
import { ReactComponent as DuplicateIcon } from "../../assets/icons/simcard-2.svg"
import { ReactComponent as CopyIcon } from "../../assets/icons/size.svg"
import { ReactComponent as EmptyIcon } from "../../assets/icons/empty.svg"

function Wishcard() {

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [duplicateModal, setDuplicateModal] = useState(false);

  
  return <div className="pt-8 mb-8">
    <div onClick={(() => setShow(!show))}>
        <p  className="ml-16 -mb-10 outline-none flex" >
           <p className="mr-4">my switch.lol</p>
            <SwitchButton />
        </p>
    </div>
    
    <div className="flex justify-end max-xl:mx-5 xl:mr-28">
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 0.987 }}
            className="bg-white text-primary px-5 py-3 md:mb-6 w-full md:w-auto rounded-md self-center border border-primary outline-none hover:bg-primary hover:text-white"
            type="button"
        >
            {" "}
            <Link
                to="/dashboard/wishcardLibrary"
            >
                View Library of cards
            </Link>
        </motion.button> 
    </div>
    <div>
      {
        show === true ? 
        (
            <div className="2xl:grid-cols-3 xl:grid-cols-2 max-lg:grid-cols-2 md:grid max-sm:block mt-9 mx-8 max-lg:mx-0 max-lg:w-full">
                 {wishCardDetails.map(wishcard => (
                    <div className="bg-white mb-8 py-4 max-md:pt-5 px-3 max-lg:mx-4 mr-12 max-h-68 text-lg rounded-2xl" key={wishcard.id}>
                        <div className="flex items-center justify-between">
                            <div className="ml-4"><SwitchButton /></div>
                            <Dropdown heading={ <VerticalDot className="cursor-pointer hover:bg-gray-100 rounded-lg"/>}>
                                <div className="text-base tracking-tighter">
                                    <div className="flex items-center py-1.5 max-sm:py-1 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3" onClick={() => setDeleteModal(true)}>
                                        <TrashIcon className="w-5 max-sm:w-5 max-lg:w-3.5 mb-1 mx-2 max-sm:ml-1 max-sm:mb-2 max-lg:my-1 max-sm:mr-1 max-lg:mr-1.5"/>
                                        <p>Delete Tribute</p>
                                    </div>
                                    <div className="flex items-center py-1.5 max-sm:py-1  cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                                        <EditIcon className="w-5 max-sm:w-4 max-lg:w-3.5 mb-1 mx-2 max-sm:ml-1 max-sm:mr-2 max-lg:mr-1.5" />
                                        <Link to={`/dashboard/tribute/${wishcard.id}/edit`}>Edit Tribute</Link>
                                    </div>
                                    <div className="flex items-center py-1.5  cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                                        <ShareIcon className="w-5 max-sm:w-4 max-lg:w-3.5 mb-0.5 mx-2 max-sm:ml-1 max-sm:mr-2 max-lg:mr-1.5" />
                                        <p>Share Tribute</p>
                                    </div>
                                    <div className="flex items-center py-1.5  cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3" onClick={() => setDuplicateModal(true)}>
                                        <DuplicateIcon className="w-5 max-sm:w-4 max-lg:w-3.5 mb-0.5 mx-2 max-sm:ml-1 max-sm:mr-2 max-lg:mr-1.5" />
                                        <p>Duplicate</p>
                                    </div>
                                    <div className="flex items-center py-1.5 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                                        <CopyIcon className="w-5 max-sm:w-4 max-lg:w-3.5 mx-2 max-sm:ml-1 max-sm:mr-2 max-lg:mr-1.5" />
                                        <p>Copy Tribute link</p>
                                    </div>
                                </div>
                            </Dropdown>
                        </div>

                        <div className="my-2 rounded-md min-h-72 flex justify-center items-ceter">
                            <Link
                                to={`/dashboard/wishcardLibrary/${wishcard.id}/edit`}
                                key={wishcard.id}
                            >
                                <div className="min-h-64 min-w-64 relative mt-2 mb-4">
                                    <div className="absolute w-3/5 h-4/5 bg-green-500">
                                        <img src={wishcard.backPhotoSRC} alt={wishcard.backPhotoAlt} className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="absolute w-3/5 h-4/5 bottom-0 right-0 bg-purple-400">
                                        <img src={wishcard.frontPhotoSRC} alt={wishcard.frontPhotoAlt} className="w-full h-full object-cover"/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        )
        :
        (
            <div className="pl-12 pr-28">
                <div className="w-full h-screen rounded-xl bg-white flex justify-center items-center text-lg">
                    <div className="text-center">
                        <div>
                            <EmptyIcon className="text-center mx-auto mb-2 -mt-16"/>
                        </div>
                        <p>You currently do not have any card available</p>
                        <p>
                          <Link to="/dashboard/wishcardLibrary" className="text-indigo-400">click here</Link> to get started
                        </p>
                    </div>
                </div>
            </div>
        )
      }
    </div>
    <Modal width={700} open={deleteModal} onClose={() => setDeleteModal(!deleteModal) } >
        <DeleteWishcard/>
    </Modal>
    <Modal width={700} open={duplicateModal} onClose={() => setDuplicateModal(!duplicateModal) }>
        <DuplicateWishcard />
    </Modal>
  </div>;
}

export default Wishcard;