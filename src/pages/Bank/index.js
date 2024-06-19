import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "routes/path";
import React, { useState } from "react";
import { Field, Formik } from "formik";
import CustomInput from "components/CustomFormInputs/CustomInput";
import CustomSelect from "components/CustomFormInputs/CustomSelect";

function BankDetails() {
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = (link) => {
    setIsActive(link);
  };

  const [banks] = useState([
    { id: "1", name: "Access Bank", code: "044" },
    { id: "2", name: "Citibank", code: "023" },
    { id: "3", name: "Diamond Bank", code: "063" },
    { id: "4", name: "Dynamic Standard Bank", code: "" },
    { id: "5", name: "Ecobank Nigeria", code: "050" },
    { id: "6", name: "Fidelity Bank Nigeria", code: "070" },
    { id: "7", name: "First Bank of Nigeria", code: "011" },
    { id: "8", name: "First City Monument Bank", code: "214" },
    { id: "9", name: "Guaranty Trust Bank", code: "058" },
    { id: "10", name: "Heritage Bank Plc", code: "030" },
    { id: "11", name: "Jaiz Bank", code: "301" },
    { id: "12", name: "Keystone Bank Limited", code: "082" },
    { id: "13", name: "Providus Bank Plc", code: "101" },
    { id: "14", name: "Polaris Bank", code: "076" },
    { id: "15", name: "Stanbic IBTC Bank Nigeria Limited", code: "221" },
    { id: "16", name: "Standard Chartered Bank", code: "068" },
    { id: "17", name: "Sterling Bank", code: "232" },
    { id: "18", name: "Suntrust Bank Nigeria Limited", code: "100" },
    { id: "19", name: "Union Bank of Nigeria", code: "032" },
    { id: "20", name: "United Bank for Africa", code: "033" },
    { id: "21", name: "Unity Bank Plc", code: "215" },
    { id: "22", name: "Wema Bank", code: "035" },
    { id: "23", name: "Zenith Bank", code: "057" },
  ]);

  return (
    <div className="flex justify-center lg:p-[38px] ">
      <div className="bg-white flex flex-col lg:flex-row p-[16px] lg:px-[16px] lg:p-0 lg:gap-[50px] rounded-[16px] justify-center gap-[20px] w-full">
        <div className="flex flex-col lg:flex-row justify-center lg:px-[21px] lg:py-[84px]">
          <div className="flex lg:flex-col flex-row lg:gap-[28px] lg:justify-start justify-between mb-2">
            <Link
              to={PATH_DASHBOARD.profile}
              className={`text-[16px] cursor-pointer lg:px-[47px] lg:py-[15px] ${isActive === "profile" ? "text-primary" : "text-[#000000]"}`}
              onClick={() => handleLinkClick("profile")}
            >
              <span>Profile</span>
            </Link>
            <Link
              to={PATH_DASHBOARD.bank}
              className="text-[16px] cursor-pointer lg:px-[47px] lg:py-[15px] text-primary"
            >
              <span className="whitespace-nowrap">Bank Details</span>
            </Link>
            <Link
              to={PATH_DASHBOARD.security}
              className={`text-[16px] cursor-pointer lg:px-[47px] lg:py-[15px] ${isActive === "security" ? "text-primary" : "text-[#000000]"}`}
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
              initialValues={{ accountName: "", accountNumber: "", selectedBank: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit} className="text-[18px] flex flex-col gap-[32px]">
                  <CustomSelect
                    label="Select Bank"
                    name="selectedBank"
                    value={values.selectedBank}
                    required
                    onchange={handleChange}
                  >
                    {banks.map((bank) => (
                      <option value={bank.name}>
                        {bank.name}
                      </option>
                    ))}
                  </CustomSelect>

                  <CustomInput
                    label="Account Number"
                    type="text"
                    name="accountNumber"
                    value={values.accountNumber}
                    placeholder="enter your account number"
                    required
                    onChange={handleChange}
                  />

                  <button
                    type="submit"
                    className={`w-full bg-primary px-[26px] py-[18px] text-white rounded-[4px] ${!values.accountNumber || !values.selectedBank ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                    disabled={!values.accountNumber || !values.selectedBank}
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
export default BankDetails;
