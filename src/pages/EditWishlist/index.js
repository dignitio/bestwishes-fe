import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Modal from "components/Modal";
import { motion } from "framer-motion";
import AddItemModal from "components/Modal/EditAddItemModal";
import Dropdown from "components/Dropdown";
import wishListData from "layout/Lists/wishListData";
import editWishlistdata from "layout/Lists/editWishlistdata";
import DeleteWishlist from "pages/Wishlist/DeleteWishlist";
import { Form, Formik } from "formik";
import { EditWishlistSchema } from "Schemas";
import CustomInput from "components/CustomFormInputs/CustomInput";
import CustomPriceInput from "components/CustomFormInputs/CustomPriceInput";
import { ReactComponent as LeftArrowIcon } from "../../assets/icons/left.svg";
import { ReactComponent as VerticalDot } from "../../assets/icons/black-vertical-icon.svg";
import { ReactComponent as WhiteVerticalDot } from "../../assets/icons/white-vertical-icon.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";

function EditWishlist() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const foundWishlist = wishListData.find((wishlist) => wishlist.id === parseInt(id, 10));
  const wishlistLength = editWishlistdata.length;

  return (
    <div>
      <div className="w-full">
        <div>
          {foundWishlist ? (
            <div className="w-full">
              <div className="flex justify-between p-10">
                <div className="flex items-center text-sky-600 text-md">
                  <LeftArrowIcon className="mr-1 w-3.5 h-3.5 max-sm:h-3.5 max-sm:w-3.5 max-lg:w-5 max-lg:h-5" />
                  <Link to="/dashboard/wishlist">Back to Wishlist</Link>
                </div>
              </div>
              <div className="bg-white h-full w-auto mx-10 p-10 overflow-hidden flex flex-col items-start border rounded-lg">
                <div className="font-nunito text-xl font-medium flex justify-center items-center w-full pb-6 md:text-3xl">
                  {foundWishlist.Title}
                </div>

                <div className="w-full">
                  <img
                    src={foundWishlist.photoSrc}
                    alt={foundWishlist.photoAlt}
                    className="w-full h-[300px] object-cover object-center border rounded-md"
                  />
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-5">
                  <div className="bg-blue-300 h-[317px] w-full flex justify-start items-end border rounded-md">
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      whileHover={{ scale: 0.95 }}
                      className="bg-primary h-10 rounded py-0 px-8 text-white ml-5 mb-10"
                      onClick={() => setOpen(!open)}
                    >
                      Add more items +
                    </motion.button>
                  </div>
                  {editWishlistdata.map((editWishlist) => (
                    <div className="h-[317px] w-full rounded-md" key={editWishlist.id}>
                      <div
                        className="w-full pb-0 h-2/3 bg-gray-300 bg-cover bg-center rounded-t-md"
                        style={{
                          backgroundImage: editWishlist.photoSrc
                            ? `url(${editWishlist.photoSrc})`
                            : null,
                        }}
                      >
                        <div className="flex justify-end items-start pr-6 pt-6">
                          {editWishlist.photoSrc ? (
                            <Dropdown
                              headingClassName="bg-none"
                              heading={<WhiteVerticalDot className="bg-none cursor-pointer rounded-lg" />}
                              dropdownClassName="bg-white"
                            >
                              <div
                                className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer bg-none hover:bg-gray-100 pl-2 max-sm:pl-3"
                                onClick={() => setEditOpen(true)}
                              >
                                <EditIcon className="w-3 bg-none max-sm:w-4 max-lg:w-3.5 mb-1 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                                <span>Edit wishlist</span>
                              </div>
                              <div
                                className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3"
                                onClick={() => setDeleteModal(true)}
                              >
                                <TrashIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-0.5 max-sm:mb-1 max-lg:my-1 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                                <p>Delete Wishlist</p>
                              </div>
                            </Dropdown>
                          ) : (
                            <Dropdown
                              headingClassName="bg-white"
                              heading={<VerticalDot className="cursor-pointer rounded-lg bg-none" />}
                              dropdownClassName="bg-white"
                            >
                              <div
                                className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer bg-none hover:bg-gray-100 pl-2 max-sm:pl-3"
                                onClick={() => setEditOpen(true)}
                              >
                                <EditIcon className="w-3 bg-none max-sm:w-4 max-lg:w-3.5 mb-1 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                                <span>Edit wishlist</span>
                              </div>
                              <div
                                className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3"
                                onClick={() => setDeleteModal(true)}
                              >
                                <TrashIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-0.5 max-sm:mb-1 max-lg:my-1 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                                <p>Delete Wishlist</p>
                              </div>
                            </Dropdown>
                          )}
                        </div>
                      </div>
                      <div className="bg-gray-200 h-1/3 flex px-6 rounded-b-md justify-between items-center">
                        <div>
                          <span className="text-sm">{editWishlist.Title}</span>
                          <span className="mt-1 flex text-xl text-Draft">
                            <p>&#x20A6;</p>
                            <p>{editWishlist.targetAmount}</p>
                          </span>
                          <span className="mt-1 flex text-[12px]">
                            <p>&#x20A6;</p>
                            <p>{editWishlist.currentAmount}</p>
                          </span>
                        </div>
                        <span className="bg-white p-2 text-[12px] border rounded-full mt-6">
                          {editWishlist.percentage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <h2>Wishlist not Found</h2>
          )}
        </div>
      </div>
      <Modal style={{ zIndex: 99 }} width={850} open={open} onClose={() => setOpen(!open)}>
        <AddItemModal wishlistLength={wishlistLength} />
      </Modal>
      <Modal width={500} open={deleteModal} onClose={() => setDeleteModal(!deleteModal)}>
        <DeleteWishlist />
      </Modal>
      <Modal width={600} open={editOpen} onClose={() => setEditOpen(!editOpen)}>
        <Formik
          initialValues={{
            editWishlistName: "",
            editWishlistAmount: "",
          }}
          validationSchema={EditWishlistSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form submitted with values:", values);
            setEditOpen(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form style={{ zIndex: 10 }} className="!z-50 lg:mb-4 flex flex-col gap-6 sm:px-6">
              <CustomInput
                label="Wishlist Name"
                name="editWishlistName"
                type="text"
                placeholder="Change Wishlist name here"
              />
              <CustomPriceInput
                label="Wishlist Amount"
                name="editWishlistAmount"
                placeholder="Change Wishlist Amount"
              />
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-primary rounded py-4 px-8 hover:bg-white hover:text-primary hover:border hover:border-primary text-white lg:mb-4 mb-2"
              >
                Save Changes
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}

export default EditWishlist;
