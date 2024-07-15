import TableComponent from "../../../components/Table";
import wishListData from "../../../layout/Lists/adminWishlist"


function AdminWishlist() {  

    const columns = [
        {
          Header: 'User',
          accessor: 'user',
        },
        {
          Header: 'Wishlist Name',
          accessor: 'wishlistname',
        },
        {
          Header: 'Tribute',
          accessor: 'tribute',
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

    return ( 
        <div>
            <div className="py-8">
                <div className="w-[1400px] ml-12">
                    <TableComponent columns={columns} data={wishListData} title={"Wishlist Management"} />
                </div>
            </div>
        </div>
     );
}

export default AdminWishlist;