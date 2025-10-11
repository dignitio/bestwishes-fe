import React from "react";
import TableComponent from "../../../components/Table";
import wishCardData from "../../../layout/Lists/adminWishcard"

const AdminWishcard: React.FC = () => {

  const columns = [
    {
      Header: 'User',
      accessor: 'user',
    },
    {
      Header: 'Wishcard Name',
      accessor: 'wishcardname',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Date Created',
      accessor: 'datecreated',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Action',
      accessor: 'action',
    },
  ];

  const actions = [
    {
      label: 'Active',
      onClick: (index: number, tableData: any[], setTableData: (data: any[]) => void) => {
        const newData = [...tableData];
        newData[index].status = 'Active';
        setTableData(newData);
      }
    },
    {
      label: 'Inactive',
      onClick: (index: number, tableData: any[], setTableData: (data: any[]) => void) => {
        const newData = [...tableData];
        newData[index].status = 'Inactive';
        setTableData(newData);
      }
    }
  ];

  return (
    <div>
      <div className="py-8">
        <div className="w-[1350px] ml-12">
          <TableComponent
            columns={columns}
            data={wishCardData}
            title={"Tribute Management"}
            actions={actions}
            searchPlaceholder="search wishcards"
            filterText="All Status"
            getStatusStyle={(status: string) => status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminWishcard;