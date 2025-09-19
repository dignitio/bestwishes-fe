import { useState } from "react";
import Modal from "components/Modal";
import TransactionData from "layout/Lists/transactiondata";
import Transactionactions from "layout/Lists/transactionactions";
import Transactioncolumns from "layout/Lists/transactioncolumn";
import wallet from "assets/icons/wallet-black.svg";
import SuccessPage from "./successPage";
import TableComponent from "../../../components/Table";

function AdminTransactions() {
  const [transactionRowData, setTransactionRowData] = useState();
  const [showSuccessPage, setShowSuccessPage] = useState();

  const transactionType = [
    { label: "All", value: "" },
    { label: "Successful", value: "success" },
    { label: "Pending", value: "pending" },
    { label: "Failed", value: "failed" },
  ];

  const getStatusStyle = (status) => {
    if (status === "Successful")
      return "bg-[#D0EDCC] text-[#13A500] font-semibold py-1 px-4 text-center -ml-2 text-sm rounded-sm";
    if (status === "Pending")
      return "bg-[#FFF4DE] text-[#C28001] font-semibold py-1 px-4 text-center -ml-2 text-sm rounded-sm";
    if (status === "Failed")
      return "bg-[#FBD2D3] text-[#FF0000] font-semibold py-1 px-4 text-center -ml-2 text-sm rounded-sm";
    return "";
  };

  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-[32px]">
        <div className="bg-white p-[26px] flex gap-[10px] rounded-lg items-center w-full max-w-[305px] h-[120px]">
          <div className="w-[40px] h-[40px] rounded-full flex justify-center bg-[#F0F1F5]">
            <img src={wallet} alt="wallet-icon" className="w-[60%]" />
          </div>
          <div className="flex flex-col gap-[3px]">
            <h1 className="text-[#636363] text-[18px]">Total Wallet Balance</h1>
            <h1 className="font-[800] text-[32px]">₦0.00</h1>
          </div>
        </div>
        <div className="bg-white p-[26px] flex gap-[10px] rounded-lg items-center w-full max-w-[305px] h-[120px]">
          <div className="w-[40px] h-[40px] rounded-full flex justify-center bg-[#F0F1F5]">
            <img src={wallet} alt="wallet-icon" className="w-[60%]" />
          </div>
          <div className="flex flex-col gap-[3px]">
            <h1 className="text-[#636363] text-[18px]">Withdrawable Balance</h1>
            <h1 className="font-[800] text-[32px]">₦0.00</h1>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] bg-white overflow-x-auto">
        <div className="w-full px-4 py-6">
          <TableComponent
            columns={Transactioncolumns}
            data={TransactionData}
            title={"Transaction Management"}
            actions={Transactionactions}
            searchPlaceholder="Search transaction"
            options={transactionType}
            getStatusStyle={getStatusStyle}
            handleClick={(rowData) => {
              setTransactionRowData(rowData);
              setShowSuccessPage(true);
            }}
          />
        </div>
      </div>

      <Modal
        width={524}
        height={350}
        open={showSuccessPage}
        onClose={() => setShowSuccessPage(!showSuccessPage)}
      >
        <SuccessPage
          transactionRowData={transactionRowData}
          onClose={() => setShowSuccessPage(!showSuccessPage)}
        />
      </Modal>
    </div>
  );
}

export default AdminTransactions;
