import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "routes/path";
import React, { useState } from "react";
import CustomInput from "components/CustonFormInputs/CustomInput";
import { useForm } from "react-hook-form";

function Security() {
  const [isActive, setIsActive] = useState(false);
  const[isButtonDisabled, setIsButtonDisabled] = useState(true)

  const handleLinkClick = (link) => {
    setIsActive(link);
  };

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    setValue,
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  const handleInputChange = (e) => {
    if (e.target.value === '0') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }

  return (
    <div className="flex flex-col p-[38px] ">
      <div className="bg-white flex p-[16px] gap-[50px] rounded-[16px]">
        <div className="flex justify-center px-[21px] py-[84px]">
          <div className="flex flex-col gap-[28px]">
            <Link
              to={PATH_DASHBOARD.profile}
              className={`text-[16px] cursor-pointer px-[47px] py-[15px] ${
                isActive === "profile" ? "text-[#FF433C]" : "text-[#000000]"
              }`}
              onClick={() => handleLinkClick("profile")}
            >
              <span>Profile</span>
            </Link>
            <Link
              to={PATH_DASHBOARD.bank}
              className={`text-[16px] cursor-pointer px-[47px] py-[15px] ${
                isActive === "bank" ? "text-[#FF433C]" : "text-[#000000]"
              }`}
              onClick={() => handleLinkClick("bank")}
            >
              <span>Bank Details</span>
            </Link>
            <Link
              to={PATH_DASHBOARD.security}
              className="text-[16px] cursor-pointer px-[47px] py-[15px] text-[#FF433C]"
            >
              <span>Security</span>
            </Link>
          </div>
        </div>

        {/* eslint-disable-next-line react/self-closing-comp */}
        <div className="outline outline-1 outline-[#C1D8E6] w-[0.1px] h-[820px]"></div>
        {/* eslint-disable-next-line react/self-closing-comp */}
        <div className="p-[84px]">
          <div className="w-[577px] flex flex-col gap-[13px] ">
            <h1 className="text-[18px] font-bold">Change Password</h1>
          
              <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-[32px]">
                <input
                  type="email"
                  {...register("email")}
                  required
                  className="w-full mt-1 border border-1 border-[#AFAFAF] rounded-[4px] px-[26px] py-[18px]"
                  placeholder="enter old password"
                  onChange={handleInputChange}
                />

                <button
                  type="submit"
                  className={`w-full bg-[#FF433C] px-[26px] py-[18px] text-white rounded-[4px] ${isButtonDisabled ? 'opacity-[0.2] cursor-not-allowed' : ''}`}
                  disabled = {isButtonDisabled}
                >
                  Send link
                </button>
              </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Security;
