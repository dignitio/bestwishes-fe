import { useState } from "react";
import Modal from "components/Modal";
import TableComponent from "../../../components/Table";
import tributeData from "../../../layout/Lists/admintribute";

function AdminTribute() {
  const columns = [
    {
      Header: "User",
      accessor: "user",
    },
    {
      Header: "Tribute Name",
      accessor: "tributename",
    },
    {
      Header: "wishlist",
      accessor: "wishlist",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Date Created",
      accessor: "datecreated",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Action",
      accessor: "action",
    },
  ];

  const actions = [
    {
      label: "Active",
      onClick: (index, tableData, setTableData) => {
        const newData = [...tableData];
        newData[index].status = "Active";
        setTableData(newData);
      },
    },
    {
      label: "Inactive",
      onClick: (index, tableData, setTableData) => {
        const newData = [...tableData];
        newData[index].status = "Inactive";
        setTableData(newData);
      },
    },
  ];

  const getStatusStyle = (status) => {
    if (status === "Active")
      return "bg-[#D0EDCC] text-[#13A500] font-semibold py-1 px-4 text-center -ml-2 lg:w-20 text-sm rounded-sm";
    if (status === "Inactive")
      return "bg-[#FBD2D3] text-[#FF0000] font-semibold py-1 px-4 text-center -ml-2 lg:w-20 text-sm rounded-sm";
    return ""; // Default case
  };

 

  return (
    <div>
      <div className="py-8">
        <div className="w-[1350px] ml-12">
          <TableComponent
            columns={columns}
            data={tributeData}
            title={"Tribute Management"}
            actions={actions}
            searchPlaceholder="search tributes"
            filterText="Active Tributes"
            getStatusStyle={getStatusStyle}
          
          />
        </div>
      </div>

      
    </div>
  );
}

export default AdminTribute;
