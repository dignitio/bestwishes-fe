/* eslint-disable react/no-unescaped-entities */
import editWishlistdata from "layout/Lists/editWishlistdata";
import Modal from "components/Modal";
import { useState } from "react";
import { motion } from "framer-motion";
import wishListData from "layout/Lists/wishListData";
import { Form, Formik } from "formik";
import { guestWishlist } from "Schemas";
import Button from "components/Button";
import CustomInput from "components/CustomFormInputs/CustomInput";
import CustomPriceInput from "components/CustomFormInputs/CustomPriceInput";
import { ReactComponent as LeftArrowIcon } from "../../assets/icons/left.svg";
import { ReactComponent as VerticalDot } from "../../assets/icons/black-vertical-icon.svg";
import { ReactComponent as WhiteVerticalDot } from "../../assets/icons/white-vertical-icon.svg";

function GuestWishlist() {
  const foundWishlist = wishListData.find((wishlist) => wishlist.id);
  const [selectedEditWishlist, setSelectedEditWishlist] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full">
      <div className=" bg-primary p-6 w-full text-white text-center font-nunito text-[24px] font-light">
        Like this Wishlist? Set up your own - It's absolutely free
      </div>
      <div>
        {foundWishlist ? (
          <div className=" w-full">
            <div className=" bg-white h-full w-auto p-4 m-4 lg:m-20 lg:p-10 overflow-hidden flex flex-col items-start border rounded-lg">
              <div>
                <img
                  src={foundWishlist.photoSrc}
                  alt={foundWishlist.photoAlt}
                  className=" w-screen h-[300px] object-cover object-center border rounded-md"
                />
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6 my-5 font-nunito ">
                {editWishlistdata.map((editWishlist) => (
                  <div
                    className=" h-[250px] lg:h-[317px] w-full rounded-md cursor-pointer"
                    onClick={() => {
                      setSelectedEditWishlist(editWishlist);
                      setOpen(true);
                    }}
                  >
                    <div
                      className="w-full pb-0 h-2/3 bg-gray-300  bg-cover bg-center rounded-t-md"
                      style={{
                        backgroundImage: editWishlist.photoSrc
                          ? `url(${editWishlist.photoSrc})`
                          : null,
                      }}
                      key={editWishlist.id}
                    >
                      <div className=" flex justify-end items-start pr-3.5 lg:pr-6 pt-6">
                        {editWishlist.photoSrc ? (
                          <WhiteVerticalDot className=" cursor-pointer rounded-lg" />
                        ) : (
                          <VerticalDot className=" cursor-pointer rounded-lg" />
                        )}
                      </div>
                    </div>
                    <div className=" bg-gray-200 h-1/3 flex px-3.5 lg:px-6 rounded-b-md justify-between items-center ">
                      <div>
                        <span className="text-sm">{editWishlist.Title}</span>
                        <span className=" mt-1 flex text-sm lg:text-xl text-Draft">
                          <p>&#x20A6;</p>
                          <p>{editWishlist.targetAmount}</p>
                        </span>
                        <span className=" mt-1 flex text-[10px] lg:text-[12px]">
                          <p>&#x20A6;</p>
                          <p>{editWishlist.currentAmount}</p>
                        </span>
                      </div>
                      <span className=" bg-white p-2 text-[10px] lg:text-[12px] border rounded-full mt-6">
                        {editWishlist.percentage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <h2>No guest List</h2>
        )}
      </div>
      <Modal style={{ zIndex: 99 }} width={550} open={open} onClose={() => setOpen(!open)}>
        <div>
          <div className=" flex justify-center items-center text-center text-sm lg:text-lg font-semibold pb-10">
            <span>
              {wishListData
                .filter((wishlist) => wishlist.id === foundWishlist.id)
                .map((prop) => (
                  <span className=" pr-1 ">
                    You are about to make a contribution for{" "}
                    <span className="">{prop.Title}'s</span>
                  </span>
                ))}
              {selectedEditWishlist && (
                <span className=" text-blue-500">{selectedEditWishlist.Title}</span>
              )}
            </span>
          </div>
          <div>
            <Formik
              initialValues={{
                guestName: "",
                guestMail: "",
                guestAmount: "",
              }}
              validationSchema={guestWishlist}
              onSubmit={(values, { resetForm }) => {
                console.log("Form submitted with values:", values);
                setOpen(false);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form style={{ zIndex: 10 }} className=" !z-50 flex flex-col gap-6 px-16">
                  <CustomInput
                    label="Name"
                    name="guestName"
                    type="text"
                    placeholder="Enter your Name"
                  />
                  <CustomInput
                    label="E-mail"
                    name="guestMail"
                    type="email"
                    placeholder="Enter your E-mail"
                  />
                  <CustomPriceInput label="Amount" name="guestAmount" placeholder="Enter Amount" />
                  <Button disabled={isSubmitting} className=" text-white">
                    Contribute
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default GuestWishlist;
