/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import Modal from "components/Modal";
import { Form, Formik } from "formik";
import { Schema } from "Schemas";
import Uploader from "components/Uploader/Uploader";
import CustomSelect from "components/CustomFormInputs/CustomSelect";
import CustomInput from "components/CustomFormInputs/CustomInput";
import CustomCalendar from "components/CustomFormInputs/CustomCalender";
import CustomTextArea from "components/CustomFormInputs/CustomTextArea";
import Button from "components/Button";
import emptyWishlist from "../../assets/images/wishlist-empty-state-image.png";

const onSubmit = async (values) => {
  console.log(values);
};

function Wishlist() {
  const [open, setOpen] = useState(false);
  const [calendarId, setCalenderId] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setCalenderId("wishListDate");
  }, []);

  return (
    <div className=" flex flex-col justify-between">
      <button
        className="bg-black text-white py-2 px-4 w-fit self-end m-6"
        onClick={() => setOpen(!open)}
      >
        {" "}
        + Create Wishlist
      </button>
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
      <Modal width={850} open={open} onClose={() => setOpen(!open)}>
        <Formik
          initialValues={{
            wishListCategory: "",
            wishListTitle: "",
            wishListDescription: "",
            wishListDate: null,
          }}
          validationSchema={Schema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* STEP 1 */}
              {activeStep === 0 && (
                <div className=" flex flex-col gap-4 ">
                  <div className="w-full grid  grid-cols-2 gap-4">
                    <div>
                      <Uploader />
                    </div>
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
                        className={` min-h-[120px] resize-none `}
                        placeholder="Click here to write wishlist description"
                      />
                    </div>
                  </div>
                  <div className="w-full grid  grid-cols-2 gap-4">
                    <Button
                      onClick={() => setActiveStep(activeStep + 1)}
                      className={`w-full self-end py-[30px] outline-none rounded-md flex justify-center items-center text-white
                ${
                  values.wishListCategory &&
                  values.wishListTitle &&
                  values.wishListDescription &&
                  values.wishListDate
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
                  <div className="w-full grid  grid-cols-2 gap-4">
                    <div>
                      <Uploader />
                    </div>
                    <div className=" flex flex-col  gap-2 ">
                      <CustomInput
                        label="Item Name"
                        name="WishListTitle"
                        type="text"
                        placeholder=""
                      />
                      <CustomInput
                        label="Price"
                        name="wishListTitle"
                        type="text"
                        numeric
                        id="priceInput"
                      />
                    </div>
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
