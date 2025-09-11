import React from "react";
import { ReactComponent as Doublecheck } from "assets/icons/double-check 1.svg";
import { ReactComponent as Close } from "assets/icons/close.svg";
import Button from "components/Button";
import Transactions from "layout/Lists/transactionlist";

export default function SuccessPage({ onClose, transactionRowData }) {
  console.log(Transactions);
  const mapDataToDetails = (data) => {
    return [
      `${data.user} (${data.email})`, // Recipient Details
      data.wishlist, // Transaction Type
      "123456789", // Transaction Number (Replace with actual transaction number if available)
      data.date, // Transaction Date
      data.amount, // Amount
      data.status, // Status
    ];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Successful":
        return "text-[#007431]";
      case "Pending":
        return "text-[#C28001]";
      case "Failed":
        return "text-[#FF0000]";
      default:
        return "";
    }
  };

  const getCurrentStatus = (transactionStatus) =>{
    switch(transactionStatus) {
      case "Successful":
        return "was successful";
      case "Pending":
        return "is pending";
      case "Failed":
        return "failed";
      default:
        return "";
    }
  }

  const getTransactionTitle = (transactionStatus) =>{
    switch(transactionStatus) {
      case "Successful":
        return "Successful";
      case "Pending":
        return "Pending";
      case "Failed":
        return "Failed";
      default:
        return "";
    }
  }

  const details = mapDataToDetails(transactionRowData);
  const statusColor = getStatusColor(details[5]);
  const currentStatus = getCurrentStatus(transactionRowData.status)
  const TransactionTitle = getTransactionTitle(transactionRowData.status)


  return (
    <div className="flex flex-col justify-center items-center gap-[32px] py-8 w-full max-w-[505px] bg-white m-auto rounded-lg">
      <div className="flex flex-col gap-[32px] w-[90%] gap-y-12">
        <div className="text-center font-[600] flex flex-col gap-[8px]">
          <h1 className={`text-[24px] font-bold ${transactionRowData.status ? statusColor : ""}`}>Transaction {transactionRowData.status ? TransactionTitle : ""}</h1>
          <p className="text-[18px] font-500 text-[#828282]">
            Transfer of {transactionRowData.amount} to {transactionRowData.user},{" "}
            {transactionRowData.bank} {transactionRowData.accountNumber} {transactionRowData.status ? currentStatus : ""}
          </p>
        </div>

        <div>
          <h1 className="text-[18px] font-bold mb-4">Transaction Details</h1>
          <div className="flex flex-col gap-6">
            {Transactions.map((label, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-[#828282] ">{label}</p>
                <p className={`font-medium text-right ${index === 5 ? statusColor : ""}`}>
                  {details[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
