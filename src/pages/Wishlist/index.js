/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import Modal from "components/Modal";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { wishlistSchema } from "Schemas";
import CustomSelect from "components/CustomFormInputs/CustomSelect";
import CustomInput from "components/CustomFormInputs/CustomInput";
import CustomCalendar from "components/CustomFormInputs/CustomCalender";
import CustomTextArea from "components/CustomFormInputs/CustomTextArea";
import wishListData from "layout/Lists/wishListData";
import Button from "components/Button";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "components/Dropdown";
import CustomPriceInput from "components/CustomFormInputs/CustomPriceInput";
import DeleteWishlist from "./DeleteWishlist";
import { ReactComponent as UploadIcon } from "../../assets/icons/picture-upload.svg";
import { ReactComponent as VerticalDot } from "../../assets/icons/wishlist-vertical-dots.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/wishlist-send.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/link.svg";
import { ReactComponent as DuplicateIcon } from "../../assets/icons/simcard-2.svg";
import { ReactComponent as CopyIcon } from "../../assets/icons/size.svg";
import { ReactComponent as LeftArrowIcon } from "../../assets/icons/left.svg";
import emptyWishlist from "../../assets/images/wishlist-empty-state-image.png";
import DuplicateWishlist from "./DuplicateWishlist";

const onSubmit = async (values) => {
  console.log(values);
};

function Wishlist() {
  const [modeValue, setModeValue] = useState();
  const switchMode = (wishlistID) => {
    wishListData[wishlistID - 1].publishedValue = !wishListData[wishlistID - 1].publishedValue;
    setModeValue((prevMode) => !prevMode);
  };
  const [open, setOpen] = useState(false);
  const [calendarId, setCalenderId] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [deleteModal, setDeleteModal] = useState(false);
  const [duplicateModal, setDuplicateModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCalenderId("wishListDate");
  }, []);

  return (
    <div className=" flex flex-col w-full justify-between p-6">
      <div className=" w-full flex flex-col md:flex-row justify-between ">
        {wishListData && (
          <div className="py-3 md:py-[17px] text-black md:w-[290px] rounded-md bg-white md:mr-6 md:mb-0 mb-6">
            <p className=" ml-4 text-lg font-nunito text-bgWalletBalance">Wallet Balance</p>
            <span className=" ml-4 mt-2 text-bgWalletBalanceFigure text-2xl font-thin font-nunito flex max-md:text-2xl max-lg:text-3xl">
              <p className="">&#x20A6;</p>
              <p className="font-medium">126,997.90</p>
            </span>
          </div>
        )}
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.95 }}
          className="bg-white text-primary px-5 py-3 md:mr-6 md:mb-6 w-full md:w-auto  rounded-md self-center border border-primary outline-none hover:bg-primary hover:text-white"
          type="button"
          onClick={() => setOpen(!open)}
        >
          {" "}
          Create Wishlist +
        </motion.button>
      </div>
      {wishListData === 0 ? (
        <div className=" bg-white h-[825px] w-auto mx-6 overflow-hidden flex flex-col justify-center items-center">
          <div>
            <img src={emptyWishlist} alt="empty-state" />
          </div>
          <div className=" flex flex-col justify-center items-center capitalize mt-1 text-lg">
            <p>You Currently do not have any card available</p>
            <div className=" mt-2">
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
                className={` bg-no-repeat bg-cover flex flex-col justify-between bg-center  relative h-[282px] mb-8 py-3.5 px-4 max-lg:mx-4 mr-12 max-h-68 lg:text-xs text-sm rounded-xl `}
                style={{ backgroundImage: `url(${wishlist.photoSrc})` }}
                key={wishlist.id}
              >
                <div className="flex items-center justify-between mt-4">
                  <div className=" flex flex-col">
                    <p className=" text-white mb-1 text-[16px]">{wishlist.Title}</p>
                    <p className=" text-white text-[14px]">{wishlist.Items}</p>
                  </div>

                  {wishlist.draft ? (
                    <p className="text-slate-400 text-xs tracking-tight">Draft</p>
                  ) : (
                    <div
                      className={
                        wishlist.publishedValue
                          ? "text-xs bg-green-600 flex justify-end items-center h-3.5 w-7 rounded-xl"
                          : "text-xs bg-slate-500 flex justify-start h-3.5 w-7 rounded-xl"
                      }
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <p className={wishlist.publishedValue ? "text-green-600" : "text-slate-500"}>
                        .
                      </p>
                      <button
                        type="button"
                        className="toggler--slider"
                        onClick={() => switchMode(wishlist.id)}
                      >
                        <div
                          className={
                            wishlist.publishedValue
                              ? "w-3 h-3 bg-white text-white rounded-3xl"
                              : "w-3 h-3 bg-white text-white rounded-3xl"
                          }
                        >
                          o
                        </div>
                      </button>
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
                    <SendIcon className=" cursor-pointer" />
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
                      <div className="text-sm relative  tracking-tighter">
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
      <Modal style={{ zIndex: 99 }} width={850} open={open} onClose={() => setOpen(!open)}>
        <Formik
          initialValues={{
            wishListCategory: "",
            wishListTitle: "",
            wishListDescription: "",
            wishListDate: null,
            coverImage: null,
            itemName: "",
            price: "",
          }}
          validationSchema={wishlistSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form style={{ zIndex: 10 }} className=" !z-50 ">
              {/* STEP 1 */}
              {activeStep === 0 && (
                <div className=" flex flex-col gap-4 ">
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <fieldset
                      className={`relative h-[200px] md:h-full flex flex-col justify-end items-start border-2 border-solid border-primary rounded-lg  cursor-pointer rounded-5 bg-white mt-1`}
                    >
                      {values.coverImage ? (
                        <img
                          src={URL.createObjectURL(values.coverImage)}
                          className=" w-full h-full object-cover "
                          alt="Cover pic"
                        />
                      ) : (
                        <div className="relative w-full h-full ">
                          <input
                            id="coverImage"
                            type="file"
                            accept="image/*"
                            className=" opacity-0 w-full h-full z-30 "
                            onChange={(e) => setFieldValue("coverImage", e.target.files[0])}
                          />
                          <label
                            htmlFor="coverImage"
                            className="absolute bottom-0 left-0 mb-4 ml-4 flex justify-center items-center"
                          >
                            <UploadIcon size={60} />
                            <p className="ml-2">Upload Cover Image</p>
                          </label>
                        </div>
                      )}
                      {/* Display image preview if coverImage has a value */}
                    </fieldset>
                    <div className=" flex flex-col justify-between gap-4  ">
                      <CustomSelect
                        label="Wishlist Category"
                        name="wishListCategory"
                        placeholder="Click here to enter title of tribute"
                      >
                        <option value="">Click here to select a type of tribute</option>
                        <option value="birthdays">Birthdays</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="burials">Burials</option>
                        <option value="other">Other</option>
                      </CustomSelect>
                      <CustomInput
                        label="Wishlist Title"
                        name="wishListTitle"
                        type="text"
                        placeholder="Click here to write wishlist Title"
                      />
                      <CustomTextArea
                        label="Wishlist Description"
                        name="wishListDescription"
                        rows="6"
                        className={` min-h-[90px] md:min-h-[120px] resize-none `}
                        placeholder="Click here to write wishlist description"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col-reverse md:grid  md:grid-cols-2 gap-4">
                    <Button
                      onClick={() => setActiveStep(activeStep + 1)}
                      type="button"
                      className={`w-full self-end py-[24px] md:py-[30px] outline-none rounded-md flex justify-center items-center text-white
                      ${
                        values.wishListCategory &&
                        values.wishListTitle &&
                        values.wishListDescription &&
                        values.wishListDate &&
                        values.coverImage
                          ? "bg-primary"
                          : "bg-primary/50 pointer-events-none "
                      }
                    `}
                    >
                      NEXT
                    </Button>{" "}
                    {calendarId && (
                      <CustomCalendar
                        label="Wishlist Date"
                        name="wishListDate"
                        value={values.wishListDate} // Pass the value from Formik
                        onChange={(date) => setFieldValue("wishListDate", date)} // Pass the onChange handler from Formik
                        id={calendarId}
                        placeholder="Select date"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {activeStep === 1 && (
                <div className="flex flex-col gap-4">
                  <LeftArrowIcon
                    className=" absolute z-20 top-4 left-6 cursor-pointer"
                    onClick={() => setActiveStep(0)}
                  />
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <fieldset
                      className={`relative h-[200px] md:h-full flex flex-col justify-end items-start border-2 border-solid border-[#8593AD] rounded-lg  cursor-pointer rounded-5 bg-white mt-1`}
                    >
                      {values.coverImage ? (
                        <img
                          src={URL.createObjectURL(values.coverImage)}
                          className=" w-full h-full object-cover "
                          alt="Cover pic"
                        />
                      ) : (
                        <div className="relative w-full h-full ">
                          <input
                            id="coverImage"
                            type="file"
                            accept="image/*"
                            className=" opacity-0 w-full h-full z-30 "
                            onChange={(e) => setFieldValue("coverImage", e.target.files[0])}
                          />
                          <label
                            htmlFor="coverImage"
                            className="absolute bottom-0 left-0 mb-4 ml-4 flex justify-center items-center"
                          >
                            <UploadIcon size={60} />
                            <p className="ml-2">Upload Cover Image</p>
                          </label>
                        </div>
                      )}
                      {/* Display image preview if coverImage has a value */}
                    </fieldset>
                    <div className=" flex flex-col  gap-2 ">
                      <CustomInput
                        label="Item Name"
                        name="itemName"
                        type="text"
                        placeholder="Click here to enter item name"
                      />
                      <CustomPriceInput
                        label="Price"
                        name="price"
                        type="number"
                        placeholder="click here to enter price"
                      />
                      <div className=" bg-white text-black mt-[28px] flex justify-center items-center hover:cursor-pointer border border-gray-700">
                        Add more Items
                      </div>
                    </div>
                  </div>
                  <p className=" text-errorColor cursor-pointer">Generate image with AI</p>
                  <div className=" w-full flex flex-col md:grid md:grid-cols-2 gap-4 ">
                    <button
                      className={` py-3 text-white rounded-md md:w-[167px]
                      ${values.itemName && values.price && values.coverImage ? " bg-Draft" : " bg-blue-200 pointer-events-none"}
                      `}
                    >
                      Draft
                    </button>
                    <button
                      className={` py-3 text-white rounded-md
                      ${values.itemName && values.price && values.coverImage ? " bg-primary" : " bg-primary/50 pointer-events-none"}
                      `}
                    >
                      Publish Wishlist
                    </button>
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}

export default Wishlist;
