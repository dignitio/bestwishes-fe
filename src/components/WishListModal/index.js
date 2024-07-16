/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { wishlistSchema } from "Schemas";
import CustomSelect from "components/CustomFormInputs/CustomSelect";
import CustomInput from "components/CustomFormInputs/CustomInput";
import CustomCalendar from "components/CustomFormInputs/CustomCalender";
import Myeditor from "components/CustomFormInputs/CustomEditor";
import CustomPriceInput from "components/CustomFormInputs/CustomPriceInput";
import CustomTextArea from "components/CustomFormInputs/CustomTextArea";
import Button from "components/Button";
import Modal from "components/Modal";
import { ReactComponent as UploadIcon } from "../../assets/icons/picture-upload.svg";
import { ReactComponent as CircleIcon } from "../../assets/icons/remove-icon.svg";
import { ReactComponent as LeftIcon } from "../../assets/icons/left.svg";

function WishlistModal({ open, onClose }) {
  const [activeStep, setActiveStep] = useState(0);
  const [calendarId, setCalenderId] = useState("wishListDate");

  return (
    <Modal style={{ zIndex: 99 }} width={850} open={open} onClose={onClose}>
      <Formik
        initialValues={{
          wishListCategory: "",
          wishListTitle: "",
          wishListDescription: "",
          wishListDate: null,
          coverImage: null,
          items: [{ img: "", itemName: "", price: "", description: "" }],
        }}
        validationSchema={wishlistSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted with values:", values);
          onClose();
          resetForm();
        }}
      >
        {({ values, setFieldValue, isValid }) => (
          <Form style={{ zIndex: 10 }} className=" !z-50 ">
            {/* STEP 1 */}
            {activeStep === 0 && (
              <div className=" flex flex-col gap-4 ">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  <fieldset
                    className={`relative h-[200px] md:h-full md:max-h-[460px] flex flex-col justify-end items-start border-2 border-solid border-primary rounded-lg  cursor-pointer rounded-5 bg-white `}
                  >
                    {values.coverImage ? (
                      <div className=" relative w-full h-full rounded-lg ">
                        <button
                          type="button"
                          className=" font-bold text-2xl text-red-500 z-30 absolute top-5 right-5 "
                          onClick={() => setFieldValue("coverImage", null)}
                        >
                          <CircleIcon />
                        </button>
                        <img
                          src={URL.createObjectURL(values.coverImage)}
                          className=" w-full h-full object-cover rounded-lg "
                          alt="Cover pic"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-full rounded-lg ">
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
                    <fieldset>
                      <Myeditor
                        label="WishList Description"
                        name="wishListDescription"
                        placeholder="Click here to write wishlist"
                      />
                    </fieldset>
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
              <div className="flex flex-col gap-4 mb-4">
                <div
                  className="absolute top-7 py-2 left-8 bg-indigo-50 px-3 rounded-lg cursor-pointer"
                  onClick={() => setActiveStep(0)}
                >
                  <LeftIcon />
                </div>
                <div className=" max-h-96 overflow-y-auto">
                  {values.items.map((item, index) => (
                    <div key={index} className="w-full py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <fieldset
                        className={`relative h-full max-h-[298px] flex flex-col justify-end items-start border-2 border-solid border-[#1E1B1A] rounded-lg  cursor-pointer rounded-5 bg-white `}
                      >
                        {item.img ? (
                          <div className="w-full rounded-lg h-full relative ">
                            <button
                              type="button"
                              className=" font-bold text-2xl text-red-500 z-30 absolute top-5 right-5 "
                              onClick={() => setFieldValue(`items.${index}.img`, null)}
                            >
                              <CircleIcon />
                            </button>

                            <img
                              src={URL.createObjectURL(item.img)}
                              className=" w-full h-full rounded-lg object-cover "
                              alt="Cover pic"
                            />
                          </div>
                        ) : (
                          <div className="relative w-full h-full ">
                            <input
                              id={`items.${index}.img`}
                              type="file"
                              accept="image/*"
                              className=" opacity-0 w-full h-full z-30 "
                              onChange={(event) => {
                                const file = event.currentTarget.files[0];
                                setFieldValue(`items.${index}.img`, file);
                              }}
                            />
                            <label
                              htmlFor={`items.${index}.img`}
                              className="absolute inset-0 flex justify-start items-center self-end mb-4 ml-6"
                            >
                              <UploadIcon size={60} />
                              <p className="ml-2">Upload Cover Image</p>
                            </label>
                          </div>
                        )}
                      </fieldset>
                      <div className=" flex flex-col gap-2 ">
                        <CustomInput
                          key={`items.${index}.itemName`}
                          label="Item Name"
                          name={`items.${index}.itemName`}
                          onChange={(e) => setFieldValue(`items.${index}.itemName`, e.target.value)}
                          type="text"
                          placeholder="Click here to enter item name"
                        />
                        <CustomPriceInput
                          key={`items.${index}.price`}
                          label="Price"
                          name={`items.${index}.price`}
                          type="number"
                          placeholder="click here to enter price"
                        />
                        <CustomTextArea
                          key={`items.${index}.description`}
                          label="Description"
                          name={`items.${index}.description`}
                          placeholder="click here to type in description"
                          className={`h-20`}
                        />
                        {values.items.length > 1 && (
                          <motion.button
                            whileHover={{ scale: 0.95 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => {
                              if (values.items.length > 1) {
                                setFieldValue(`items`, values.items.slice(1));
                              } else {
                                setFieldValue(`items.0`, {
                                  img: "",
                                  itemName: "",
                                  price: "",
                                  description: "",
                                });
                              }
                            }}
                            type="button"
                            className="bg-removeButton text-white mt-[15px] h-10 rounded py-2 px-8 border"
                          >
                            Remove Item
                          </motion.button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 0.95 }}
                    whileTap={{ scale: 0.8 }}
                    type="button"
                    className=" outline-none w-full py-[24px] md:py-[20px] rounded-md flex justify-center items-center border-primary text-primary border-[1px] border-solid bg-white"
                    onClick={() =>
                      setFieldValue(`items.${values.items.length}`, {
                        img: "",
                        itemName: "",
                        price: "",
                        description: "",
                      })
                    }
                  >
                    Add Another Item
                  </motion.button>
                  <Button
                    type="submit"
                    className={`w-full self-end py-[24px] md:py-[30px] outline-none rounded-md flex justify-center items-center text-white
                      ${isValid ? "bg-primary" : "bg-primary/50 pointer-events-none "}
                    `}
                  >
                    SUBMIT
                  </Button>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default WishlistModal;
