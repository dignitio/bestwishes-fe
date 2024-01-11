import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "routes/path";
import React, { useState } from "react";

function BankDetails() {
    const [isBankPage, setIsBankPage] = useState(false)
    const [isProfilePage, setIsProfilePage] = useState(false)

    return (
        <div className="flex flex-col p-[38px] ">
            <div className="bg-white flex p-[16px] gap-[50px] rounded-[16px]">
                <div className="flex justify-center px-[21px] py-[84px]">
                    <div className="flex flex-col gap-[28px]">
                        <Link to={PATH_DASHBOARD.profile}
                            className="text-[16px] cursor-pointer px-[47px] py-[15px]"
                        // onClick={() => setIsProfilePage(true)}
                        // onKeyDown={(e) => e.key === 'Enter' && setIsProfilePage(true)}
                        >
                            <span>Profile</span>
                        </Link>
                        <Link to={PATH_DASHBOARD.bank}
                            className="text-[16px] cursor-pointer px-[47px] py-[15px]"
                        // onClick={() => setIsBankPage(true)}
                        // onKeyDown={(e) => e.key === 'Enter' && setIsBankPage(true)}

                        >
                            <span>Bank Details</span>
                        </Link>
                        <Link to={PATH_DASHBOARD.security}
                            className="text-[16px] cursor-pointer px-[47px] py-[15px]"
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
                        <form className="text-[18px] flex flex-col gap-[32px]">
                            <label htmlFor="bankName">Bank Name<br />
                                <select className="w-full mt-1 border border-1 border-[#AFAFAF] rounded-[4px] px-[26px] py-[18px] text-[#828282]" id="bankName" required>
                                    <option value="" disabled selected>Click here to select your bank</option>
                                </select>
                            </label>
                            <label htmlFor="email">Account Name<br />
                                <input className="required w-full mt-1 border border-1 border-[#AFAFAF] rounded-[4px] px-[26px] py-[18px] text-[#828282]" id="email" placeholder="enter your account name" />
                            </label>
                            <label htmlFor="email" >Account Number<br />
                                <input className="required w-full mt-1 border border-1 border-[#AFAFAF] rounded-[4px] px-[26px] py-[18px] text-[#828282]" id="email" placeholder="enter your account number" />
                            </label>


                        </form>
                        <button className="w-full bg-[#FF433C] opacity-[0.2] px-[26px] py-[18px] text-white rounded-[4px]">Saved</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default BankDetails
