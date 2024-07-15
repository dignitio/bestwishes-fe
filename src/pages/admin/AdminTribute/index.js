import TableComponent from "../../../components/Table";
import tributeData from "../../../layout/Lists/admintribute"

function AdminTribute() {  

    const columns = [
        {
          Header: 'User',
          accessor: 'user',
        },
        {
          Header: 'Tribute Name',
          accessor: 'tributename',
        },
        {
          Header: 'wishlist',
          accessor: 'wishlist',
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
                    <TableComponent columns={columns} data={tributeData} title={"Tribute Management"} actions={actions} />
                </div>
            </div>
        </div>
     );
}

export default AdminTribute;