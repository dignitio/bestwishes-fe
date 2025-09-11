import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import wallet from "assets/icons/wallet-black.svg";
import CustomInput from "components/CustomFormInputs/CustomInput";
import { Formik } from "formik";
import CustomSelect from "components/CustomFormInputs/CustomSelect";
import CustomCheckbox from "components/CustomFormInputs/CustomCheckbox";
import { ReactComponent as Debit } from "assets/icons/debit.svg";
import { ReactComponent as Credit } from "assets/icons/credit.svg";
import { date } from "yup";
import Button from "components/Button";
import Modal from "components/Modal";
import SuccessPage from "pages/SuccessPage";

export default function Wallet() {
  const [openSuccessPage, setOpenSuccessPage] = useState(false);
  const transactionDetails = [
    {
      type: "debit",
      mode: "withdraw",
      amount: "₦740,000",
      date: "17-08-2024",
    },
    {
      type: "debit",
      mode: "withdraw",
      amount: "₦740,000",
      date: "07-08-2024",
    },
    {
      type: "credit",
      mode: "deposit",
      amount: "₦340,000",
      date: "07-08-2024",
    },
    {
      type: "debit",
      mode: "withdraw",
      amount: "₦740,000",
      date: "07-08-2024",
    },
    {
      type: "credit",
      mode: "transfer",
      amount: "₦340,000",
      date: "07-08-2024",
    },
    {
      type: "credit",
      mode: "deposit",
      amount: "₦340,000",
      date: "07-08-2024",
    },
    {
      type: "debit",
      mode: "withdraw",
      amount: "₦740,000",
      date: "07-08-2024",
    },
  ];

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

  const [clickedTransaction, setClickedTransaction] = useState(transactionDetails.length + 1);
  const [savedAccounts, setSavedAccounts] = useState([]);

  function toggletransaction(index) {
    if (clickedTransaction === index) {
      setClickedTransaction(transactionDetails.length + 1);
    } else {
      setClickedTransaction(index);
    }
  }

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  console.log(savedAccounts);

  return (
    <div className="flex flex-col xl:flex-row gap-[40px] p-[40px]">
      <div className="w-full xl:w-[55%] flex flex-col gap-[40px]">
        <div className="flex flex-col md:flex-row gap-[32px] w-full">
          <div className="bg-white p-[26px] flex gap-[10px] rounded-lg items-center w-full md:w-[50%] h-[120px]">
            <div className="w-[40px] h-[40px] rounded-full flex justify-center bg-[#F0F1F5]">
              <img src={wallet} alt="wallet-icon" className="w-[60%]" />
            </div>
            <div className="flex flex-col gap-[3px]">
              <h1 className="text-[#636363] text-[18px]">Total Wallet Balance</h1>
              <h1 className="font-[800] text-[32px]">₦0.00</h1>
            </div>
          </div>
          <div className="bg-white p-[26px] flex gap-[10px] rounded-lg items-center w-full md:w-[50%] h-[120px]">
            <div className="w-[40px] h-[40px] rounded-full flex justify-center bg-[#F0F1F5]">
              <img src={wallet} alt="wallet-icon" className="w-[60%]" />
            </div>
            <div className="flex flex-col gap-[3px]">
              <h1 className="text-[#636363] text-[18px]">WIthdrawable Balance</h1>
              <h1 className="font-[800] text-[32px]">₦0.00</h1>
            </div>
          </div>
        </div>

        <div className="bg-white w-full p-[32px] flex flex-col gap-[32px] rounded-lg">
          <h1 className="font-[600] text-[20px]">Withdrawal Information</h1>

          <Formik
            initialValues={{
              amount: "",
              accountName: "",
              bankName: "",
              accountNumber: "",
              wishlist: "",
              securityPin: "",
              description: "",
              saveAccount: false,
            }}
            onSubmit={(values) => {
              console.log(values);
              if (values.saveAccount) {
                setSavedAccounts((prev) => [
                  ...prev,
                  {
                    accountName: values.accountName,
                    bankName: values.bankName,
                    accountNumber: values.accountNumber,
                  },
                ]);
              }
              setOpenSuccessPage(true); 
            }}
          >
            {({ values, handleSubmit, handleChange, setFieldValue, resetForm }) => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[32px]">
                {savedAccounts.length > 0 && (
                  <div className="flex flex-col ">
                    <p className="text-sm md:text-base text-[#1E1B1A] font-[700] mb-1.5 underline">Saved Accounts</p>
                    <div className="flex gap-[15px] w-[100%] overflow-x-scroll savedAccounts">
                      {savedAccounts.map((account, index) => (
                        <div
                          className="flex flex-col gap-[5px] items-center cursor-pointer"
                          key={index}
                          onClick={() => {
                            setFieldValue("accountName", account.accountName);
                            setFieldValue("bankName", account.bankName);
                            setFieldValue("accountNumber", account.accountNumber);
                          }}
                        >
                          <div
                            className="flex items-center justify-center rounded-full w-[30px] h-[30px] p-[10px] text-white font-bold"
                            style={{ backgroundColor: getRandomColor() }}
                          >
                            <p className="text-[16px]">{getInitial(account.accountName)}</p>
                          </div>
                          <p className="truncate w-full">{account.accountName}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <CustomInput
                  label="Enter amount to withdraw"
                  type="text"
                  name="amount"
                  value={values.amount}
                  onchange={handleChange}
                />

                <div className="flex flex-col gap-[10px]">
                  <CustomInput
                    label="Account Name"
                    type="text"
                    name="accountName"
                    value={values.accountName}
                    onchange={handleChange}
                    placeholder="click here to enter"
                  />
                  <p className="font-[600] text-[12px] md:text-[16px]">
                    Name on your account must be the same as that of your account number
                  </p>
                </div>
                <CustomSelect
                  label="Bank"
                  name="bankName"
                  value={values.bankName}
                  onchange={handleChange}
                  // {banks.map((bank) => ({ value: bank.name, label: bank.name, key: bank.id }))}
                >
                  <option value="" className="">
                    click here to select
                  </option>
                  {banks.map((bank) => (
                    <option value={bank.name}>{bank.name}</option>
                  ))}
                </CustomSelect>

                <div className="flex flex-col gap-[10px]">
                  <CustomInput
                    label="Account Number"
                    name="accountNumber"
                    value={values.accountNumber}
                    onchange={handleChange}
                    placeholder="click here to enter"
                  />
                  <CustomCheckbox
                    name="saveAccount"
                    text="save account for future use"
                    accent="text-primary"
                    id=""
                  />
                </div>
                <CustomSelect
                  label="Wishlist"
                  name="wishlist"
                  value={values.wishlist}
                  onchange={handleChange}
                >
                  <option value="" className="">
                    click here to select
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </CustomSelect>

                <CustomInput
                  label="Description"
                  type="text"
                  name="description"
                  value={values.description}
                  onchange={handleChange}
                  placeholder="click here to enter"
                />

                <CustomInput
                  label="Security Pin"
                  type="text"
                  name="securityPin"
                  value={values.securityPin}
                  onchange={handleChange}
                  placeholder="click here to enter"
                />
                <div className="flex flex-col flex-col-reverse md:flex-row gap-[32px] md:gap-[10px] w-full md:h-[46px] justify-center">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 0.987 }}
                    className="bg-white text-primary w-full md:w-[50%] h-[46px] md:h-full rounded px-8 self-center border border-primary outline-none hover:bg-[#E0E7FF] hover:border-[#E0E7FF] hover:text-primary"
                    type="button"
                    onClick={() => resetForm()}
                  >
                    Cancel
                  </motion.button>
                  <Button
                    className={`text-white w-full md:w-[50%] h-[46px] md:h-full  ${!values.amount || !values.accountName || !values.bankName || !values.accountNumber || !values.wishlist || !values.securityPin || !values.description ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                    type="submit"
                    disabled={
                      !values.amount ||
                      !values.accountName ||
                      !values.bankName ||
                      !values.accountNumber ||
                      !values.wishlist ||
                      !values.securityPin ||
                      !values.description
                    }
                  >
                    Withdraw
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className="w-full xl:w-[40%] bg-white p-[24px] md:p-[32px] flex flex-col gap-[32px] rounded-lg">
        <h1 className="font-[600] text-[20px]">Recent Transactions</h1>
        <div className="flex flex-col gap-[10px]">
          {transactionDetails.map((item, index) => {
            let modeTitle;
            if (item.mode === "transfer") {
              modeTitle = "Transfer Made";
            } else if (item.mode === "deposit") {
              modeTitle = "Deposit Made";
            } else {
              modeTitle = "Cash Withdrawal";
            }

            let modeDescription;
            if (item.mode === "transfer" || item.mode === "deposit") {
              modeDescription = "Deposit made";
            } else {
              modeDescription = "Withdrawal made";
            }

            const amountSign = item.type === "debit" ? "-" : "+";
            const amountColor = item.type === "debit" ? "text-[#ff0000]" : "text-[#007431]";

            return (
              <div
                key={index}
                className="flex flex-col gap-[24px] py-[10px] md:py-[16px]"
                style={{ borderBottom: "1px solid #D4DDDF" }}
              >
                <div
                  className={`flex flex-col md:flex-row gap-[32px] md:gap-0 md:justify-between md:items-center cursor-pointer ${clickedTransaction === index ? "min-h-[40px]" : "min-h-[30px]"}`}
                  onClick={() => toggletransaction(index)}
                >
                  <div className="flex gap-[10px] items-center">
                    {item.type === "debit" ? <Debit /> : <Credit />}
                    <div className="flex flex-col gap-[3px]">
                      <h1 className="font-[600] text-[20px]">{modeTitle}</h1>
                      <h1 className="font-[400] text-[16px]">{modeDescription}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[3px] items-end">
                    <h1 className={`font-[600] text-[24px] md:text-[18px] ${amountColor}`}>
                      {amountSign}
                      {item.amount}
                    </h1>
                    <h1 className="font-[400] text-[16px] md:text-[14px]">{item.date}</h1>
                  </div>
                </div>
                {clickedTransaction === index && (
                  <div
                    data-aos="fade-up"
                    className="flex flex-wrap justify-between gap-x-[20px] gap-y-[30px] text-[#00000090] text-[16px] p-[10px]"
                  >
                    <div className="flex gap-[10px]">
                      <h1 className="font-[600] text-[#818489]">TransactionID:</h1>
                      <p className=" font-[400] text-[#C2C9D6]">TXN1234567890</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <h1 className="font-[600] text-[#818489]">Description:</h1>
                      <p className=" font-[400] text-[#C2C9D6]">
                        Happy Birthday dear, God bless you!
                      </p>
                    </div>
                    <div className="flex gap-[10px]">
                      <h1 className="font-[600] text-[#818489]">Source:</h1>
                      <p className=" font-[400] text-[#C2C9D6]">The wishlist</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <h1 className="font-[600] text-[#818489]">Recipient&apos;s Name:</h1>
                      <p className=" font-[400] text-[#C2C9D6]">Isiekwene Chisom</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <Button className="text-white w-full ds:w-[60%] mx-auto py-[12px] whitespace-nowrap h-[46px]">
          View More Transactions
        </Button>
      </div>

      <Modal
        width={524}
        height={350}
        open={openSuccessPage}
        onClose={() => setOpenSuccessPage(!openSuccessPage)}
      >
        <SuccessPage onClose={() => setOpenSuccessPage(!openSuccessPage)} />
      </Modal>
    </div>
  );
}
