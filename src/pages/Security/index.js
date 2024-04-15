import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "routes/path";
import React, { useState } from "react";
import { Formik } from "formik";
import CustomInput from "components/CustonFormInputs/CustomInput";

function Security() {
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = (link) => {
    setIsActive(link);
  };

  return (
    <div className="flex justify-center lg:p-[38px]">
      <div className="bg-white min-h-[100%] flex flex-col lg:flex-row p-[16px] lg:px-[16px] lg:p-0 lg:gap-[50px] rounded-[16px] justify-center gap-[20px] w-full">
        <div className="flex flex-col lg:flex-row justify-center lg:px-[21px] lg:py-[84px]">
          <div className="flex lg:flex-col flex-row lg:gap-[28px] lg:justify-start justify-between mb-2">
            <Link
              to={PATH_DASHBOARD.profile}
              className={`text-[16px] cursor-pointer lg:px-[47px] lg:py-[15px] ${
                isActive === "profile" ? "text-primary" : "text-[#000000]"
              }`}
              onClick={() => handleLinkClick("profile")}
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
              className="text-[16px] cursor-pointer lg:px-[47px] lg:py-[15px] text-primary"
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
            <h1 className="text-[18px] font-bold">Change Password</h1>
            <Formik
              initialValues={{ oldPassword: "", newPassword: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[32px]">
                  <CustomInput
                    label="Old password"
                    type="password"
                    name="oldPassword"
                    value={values.oldPassword}
                    required
                    obscured
                    readOnly={false}
                    // className="w-full mt-1 border border-1 border-[#AFAFAF] rounded-[4px] px-[26px] py-[18px]"
                    placeholder="enter old password"
                    onChange={handleChange}
                  />
                 
                  <CustomInput
                    label="New password"
                    type="password"
                    name="newPassword"
                    value={values.newPassword}
                    required
                    obscured
                    readOnly={false}
                    placeholder="enter new password"
                    onChange={handleChange}
                  />

                  <button
                    type="submit"
                    className={`w-full bg-primary px-[26px] py-[18px] text-white rounded-[4px] ${!values.oldPassword || !values.newPassword ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                    disabled={!values.oldPassword || !values.newPassword}
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
export default Security;
