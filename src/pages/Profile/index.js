import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "routes/path";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import user from "../../assets/icons/edit-profile.svg";
import exportIcon from "../../assets/icons/Export.svg";

function Profile() {
  const [isActive, setIsActive] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
    if (e.target.value === "0") {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  };

  // const handleReset = (e) => {
  //   e.preventDefault()
  //   // Reset the form
  //   reset();
  // };

  return (
    <div className="flex flex-col p-[38px] ">
      <div className="bg-white flex p-[16px] gap-[50px] rounded-[16px]">
        <div className="flex justify-center px-[21px] py-[84px]">
          <div className="flex flex-col gap-[28px]">
            <Link
              to={PATH_DASHBOARD.profile}
              className="text-[16px] cursor-pointer px-[47px] py-[15px] text-[#FF433C]"
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
              className={`text-[16px] cursor-pointer px-[47px] py-[15px] ${
                isActive ? "text-[#FF433C]" : "text-[#000000]"
              }`}
              onClick={() => handleLinkClick("security")}
            >
              <span>Security</span>
            </Link>
          </div>
        </div>

        {/* eslint-disable-next-line react/self-closing-comp */}
        <div className="outline outline-1 outline-[#C1D8E6] w-[0.1px] h-[820px]"></div>
        {/* eslint-disable-next-line react/self-closing-comp */}
        <div className="p-[84px]">
          <div className="w-[577px] flex flex-col gap-[32px]">
            <form
              onSubmit={handleSubmit(onsubmit)}
              className="text-[18px] flex flex-col gap-[32px]"
            >
              <div className="relative flex justify-center items-center bg-[#636363] w-[100px] h-[100px] rounded-[100px]">
                <div className="flex justify-center absolute left-[18px] w-[65px] z-1">
                  <img className="relative w-full" src={user} alt="user-icon" />
                  <img className="absolute " src={exportIcon} alt="user-icon" />
                </div>
                <p className="absolute text-[12px] text-white top-[65px]">Upload Image</p>
                <input
                  type="file"
                  className="relative z-2 opacity-0 w-[78px] h-[78px] rounded-[78px]"
                />
              </div>
              <div>
                <p className="mb-2">First Name</p>
                <input
                  {...register("firstName")}
                  required
                  type="text"
                  className=" w-full border border-1 border-[#AFAFAF] rounded-[4px] px-[10px] py-[18px] h-[62px] text-[#828282] bg-red-500"
                  placeholder=""
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="mb-2">Last Name</p>
                <input
                  {...register("lastName")}
                  required
                  type="text"
                  className="w-full border border-1 border-[#AFAFAF] rounded-[4px] px-[10px] py-[18px] text-[#828282]"
                  placeholder=""
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="mb-2">Email Address</p>
                <input
                  {...register("email")}
                  required
                  type="email"
                  className=" w-full border border-1 border-[#AFAFAF] rounded-[4px] px-[10px] py-[18px] text-[#828282]"
                  placeholder=""
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="mb-2">Phone Number</p>
                <input
                  {...register("phoneNumber")}
                  required
                  type="tel"
                  className="required w-full border border-1 border-[#AFAFAF] rounded-[4px] px-[10px] py-[18px] text-[#828282]"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                // onClick={() => handleReset()}
                className={`w-full bg-[#FF433C] px-[26px] py-[18px] text-white rounded-[4px] ${isButtonDisabled ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                disabled={isButtonDisabled}
              >
                Saved
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
