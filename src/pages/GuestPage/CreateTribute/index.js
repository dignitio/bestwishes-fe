import { useState } from "react";
import CustomInput from "components/CustonFormInputs/CustomInput";
import { Formik } from "formik";
import Button from "components/Button";

function CreateGuestTribute({ selectedWishlist }) {
  return (
    <div className="">
      <div className="flex flex-col gap-[20px] md:px-3">
        <p className="text-[14px] md:text-[24px] text-justify leading-5">
          You are about to make contribution for Olakunle’s{" "}
          <span className="text-[#3684F7] leading-5">{selectedWishlist?.name}</span>
        </p>
        <Formik
          initialValues={{ name: "", email: "", amount: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, handleSubmit, handleChange }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[20px] md:p-[30px] md:text-[24px]"
            >
              <CustomInput
                label="Name"
                type="text"
                name="name"
                value={values.name}
                required
                onChange={handleChange}
              />
              <CustomInput
                label="Email"
                type="email"
                name="email"
                value={values.email}
                required
                onChange={handleChange}
              />
              <CustomInput
                label="Amount"
                type="number"
                name="amount"
                value={values.amount}
                required
                onChange={handleChange}
              />

              <button
                type="submit"
                className={`w-full bg-[#FF433C] px-[26px] py-[18px] text-white rounded-[4px] ${!values.name || !values.email || !values.amount ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                disabled={!values.name || !values.email || !values.amount}
              >
                Contribute
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreateGuestTribute;
