import React from "react";
import { ReactComponent as Doublecheck } from "assets/icons/double-check 1.svg";
import Button from "components/Button";

export default function SuccessPage({onClose}) {
  return (
    <div className="flex flex-col justify-center items-center gap-[32px] pb-[30px] ">
      <Doublecheck />
      <div className="flex flex-col gap-[32px] w-[90%]">
        <div className="text-center font-[600] flex flex-col gap-[8px]">
          <h1 className="text-[32px]">Transaction Successful</h1>
          <p className="text-[20px] text-[#828282]">Your transaction was successful</p>
        </div>
        <Button className="text-white w-full" onClick={onClose}>
          Done
        </Button>
      </div>
    </div>
  );
}
