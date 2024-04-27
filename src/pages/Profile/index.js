import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "routes/path";
import React, { useState } from "react";
import CustomInput from "components/CustomFormInputs/CustomInput";
import { Formik } from "formik";
import user from "assets/icons/edit-profile.svg";
import exportIcon from "assets/icons/Export.svg";
import { Schema } from "Schemas";
import close from "assets/icons/close copy.svg"

function Profile() {
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = (link) => {
    setIsActive(link);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded Image:", file);
  };

  const [profilePicture, setProfilePicture] = useState({});

  return (
    <div className="flex justify-center lg:p-[38px] ">
      <div className="bg-white flex flex-col lg:flex-row p-[16px] lg:px-[16px] lg:p-0 lg:gap-[50px] rounded-[16px] justify-center gap-[20px] w-full">
        <div className="flex flex-col lg:flex-row justify-center lg:px-[21px] lg:py-[84px]">
          <div className="flex lg:flex-col flex-row lg:gap-[28px] lg:justify-start justify-between mb-2">
            <Link
              to={PATH_DASHBOARD.profile}
              className="text-[16px] cursor-pointer lg:px-[47px] lg:py-[15px] text-primary"
            >
              <span>Profile</span>
            </Link>
            <Link
              to={PATH_DASHBOARD.bank}
              className={`text-[16px] cursor-pointer lg:px-[47px] lg:py-[15px] ${
                isActive === "bank" ? "text-primary" : "text-[#000000]"
              }`}
              onClick={() => handleLinkClick("bank")}
            >
              <span className="whitespace-nowrap">Bank Details</span>
            </Link>
            <Link
              to={PATH_DASHBOARD.security}
              className={`text-[16px] cursor-pointer lg:px-[47px] lg:py-[15px] ${
                isActive ? "text-primary" : "text-[#000000]"
              }`}
              onClick={() => handleLinkClick("security")}
            >
              <span>Security</span>
            </Link>
          </div>
          {/* eslint-disable-next-line react/self-closing-comp */}
          <div className="lg:hidden inline-block outline outline-1 outline-[#C1D8E6] w-full lg:w-[0.1px] lg:h-[820px] h-[0.1px]"></div>
        </div>

        {/* eslint-disable-next-line react/self-closing-comp */}
        <div className="hidden lg:block outline outline-1 outline-[#C1D8E6] w-full lg:w-[0.1px] lg:h-[820px] h-[0.1px]"></div>
        {/* eslint-disable-next-line react/self-closing-comp */}
        <div className="lg:p-[84px]">
          <div className="lg:w-[577px] w-[100%] flex flex-col gap-[32px]">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                profileImage: null,
              }}
              validationSchema={Schema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ values, handleSubmit, setFieldValue, handleChange }) => (
                <form onSubmit={handleSubmit} className="text-[18px] flex flex-col gap-[32px]">
                  <div className="relative flex justify-center items-center bg-[#636363] w-[100px] h-[100px] rounded-[100px]">
                    {values.profileImage ? (
                      <div className=" relative w-full h-full">
                        <button
                          type="button"
                          className=" font-bold w-[18px] z-50 absolute top-3 right-4 "
                          onClick={() => setFieldValue("profileImage", null)}
                        >
                        <img src={close} alt="close-icon" className="w-full"/>
                        </button>
                        <img
                          src={URL.createObjectURL(values.profileImage)}
                          className=" w-full h-full object-cover rounded-full"
                          alt="Header pic"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-center absolute left-[18px] w-[65px] z-1">
                          <img className="relative w-full" src={user} alt="user-icon" />
                          <img className="absolute " src={exportIcon} alt="user-icon" />
                        </div>
                        <p className="absolute text-[12px] text-white top-[65px]">Upload Image</p>

                        <input
                          type="file"
                          className="relative z-2 opacity-0 w-[78px] h-[78px] rounded-[78px]"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            setFieldValue("profileImage", file)
                           
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <CustomInput
                    label="First Name"
                    name="firstName"
                    value={values.firstName}
                    required
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                  />
                  <CustomInput
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    required
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                  />

                  <CustomInput
                    label="Email Address"
                    name="email"
                    value={values.email}
                    required
                    type="email"
                    placeholder=""
                    onChange={handleChange}
                  />
                  <CustomInput
                    label="Phone Number"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    required
                    type="tel"
                    placeholder=""
                    onChange={handleChange}
                  />

                  <button
                    type="submit"
                    // onClick={() => handleReset()}
                    className={`w-full bg-primary px-[26px] py-[18px] text-white rounded-[4px] ${!values.firstName || !values.lastName || !values.email || !values.phoneNumber || !values.profileImage ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                    disabled={
                      !values.firstName ||
                      !values.lastName ||
                      !values.email ||
                      !values.phoneNumber ||
                      !values.profileImage
                    }
                  >
                    Save
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
