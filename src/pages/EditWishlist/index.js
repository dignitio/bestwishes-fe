/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Modal from "components/Modal";
import { Form, Formik } from "formik";
import { Schema } from "Schemas";
import CustomInput from "components/CustomFormInputs/CustomInput";
import CustomPriceInput from "components/CustomFormInputs/CustomPriceInput";
import Button from "components/Button";
import wishListData from "layout/Lists/wishListData";
import editWishlistdata from "layout/Lists/editWishlistdata";
import { ReactComponent as LeftArrowIcon } from "../../assets/icons/left.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/picture-upload.svg";
import { ReactComponent as VerticalDot } from "../../assets/icons/black-vertical-icon.svg";
import { ReactComponent as WhiteVerticalDot } from "../../assets/icons/white-vertical-icon.svg";

const onSubmit = async (values) => {
  console.log(values);
};

function EditWishlist() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const foundWishlist = wishListData.find((wishlist) => wishlist.id === parseInt(id, 10));
  return (
    <div>
      <div className=" w-full">
        <div>
          {foundWishlist ? (
            <div className=" w-full">
              <div className=" flex justify-between p-10">
                <div className=" flex text-sky-600">
                  <LeftArrowIcon className="mr-1  w-3.5 h-3.5 max-sm:h-3.5 max-sm:w-3.5 max-lg:w-5 max-lg:h-5" />
                  <Link to="/dashboard/wishlist">Back to Wishlist</Link>
                </div>
                <div className=" font-nunito text-2xl font-medium">{foundWishlist.Title}</div>
                <div className="  " />
              </div>
              <div className="bg-white h-full w-auto mx-10 p-6 overflow-hidden flex flex-col items-start border rounded-lg">
                <div className=" w-full">
                  <img
                    src={foundWishlist.photoSrc}
                    alt={foundWishlist.photoAlt}
                    className=" w-full h-[300px] object-cover object-center border rounded-md"
                  />
                </div>
                <div className=" w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6 my-5 ">
                  <div className=" bg-blue-300 h-[317px] w-full flex justify-start items-end border rounded-md">
                    <button
                      className=" bg-primary h-10 rounded py-0 px-8 text-white ml-5 mb-10"
                      onClick={() => setOpen(!open)}
                    >
                      {" "}
                      Add more items +
                    </button>
                  </div>
                  {editWishlistdata.map((editWishlist) => (
                    <div className="h-[317px] w-full rounded-md">
                      <div
                        className="w-full pb-0 h-2/3 bg-gray-300  bg-cover bg-center rounded-t-md"
                        style={{
                          backgroundImage: editWishlist.photoSrc
                            ? `url(${editWishlist.photoSrc})`
                            : null,
                        }}
                        key={editWishlist.id}
                      >
                        <div className=" flex justify-end items-start pr-6 pt-6">
                          {editWishlist.photoSrc ? (
                            <WhiteVerticalDot className=" cursor-pointer rounded-lg" />
                          ) : (
                            <VerticalDot className=" cursor-pointer rounded-lg" />
                          )}
                        </div>
                      </div>
                      <div className=" bg-gray-200 h-1/3 flex px-6 rounded-b-md justify-between items-center ">
                        <div>
                          <span className="text-sm">{editWishlist.Title}</span>
                          <span className=" mt-1 flex text-xl text-Draft">
                            <p>&#x20A6;</p>
                            <p>{editWishlist.targetAmount}</p>
                          </span>
                          <span className=" mt-1 flex text-[12px]">
                            <p>&#x20A6;</p>
                            <p>{editWishlist.currentAmount}</p>
                          </span>
                        </div>
                        <span className=" bg-white p-2 text-[12px] border rounded-full mt-6">
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
        <Formik
          initialValues={{
            coverImage: null,
            itemName: "",
            price: "",
          }}
          validationSchema={Schema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form style={{ zIndex: 10 }} className=" !z-50">
              <div className="flex flex-col gap-4">
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
                    <Button className=" bg-white text-black mt-[28px] border border-gray-700">
                      Add more Items
                    </Button>
                  </div>
                </div>
                <p className=" text-primary">Generate image with AI</p>
                <div className=" w-full flex flex-col md:grid md:grid-cols-2 gap-4 ">
                  <button
                    className={` py-[17px] text-white w-[167px] rounded-md
                      ${values.itemName && values.price && values.coverImage ? " bg-Draft" : " bg-blue-200 pointer-events-none"}
                      `}
                  >
                    Draft
                  </button>
                  <button
                    className={` py-[17px] text-white outline-none rounded-md
                      ${values.itemName && values.price && values.coverImage ? " bg-primary" : " bg-primary/50 pointer-events-none"}
                      `}
                  >
                    Publish Wishlist
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}

export default EditWishlist;
