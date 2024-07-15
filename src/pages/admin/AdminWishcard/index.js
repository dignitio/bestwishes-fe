import TableComponent from "../../../components/Table";
import wishCardData from "../../../layout/Lists/adminWishcard"

function AdminWishcard() {  

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
          onClick: (index, tableData, setTableData) => {
            const newData = [...tableData];
            newData[index].status = 'Active';
            setTableData(newData);
          }
        },
        {
          label: 'Inactive',
          onClick: (index, tableData, setTableData) => {
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
                    <TableComponent columns={columns} data={wishCardData} title={"Tribute Management"} actions={actions} />
                </div>
            </div>
        </div>
     );
}

export default AdminWishcard;