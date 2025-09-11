export const Transactionactions = [
    {
      label: 'Successful',
      onClick: (index, tableData, setTableData) => {
        const newData = [...tableData];
        newData[index].status = 'Successful';
        setTableData(newData);
      }
    },
    {
      label: 'Pending',
      onClick: (index, tableData, setTableData) => {
        const newData = [...tableData];
        newData[index].status = 'Pending';
        setTableData(newData);
      }
    },
    {
        label: 'Failed',
        onClick: (index, tableData, setTableData) => {
          const newData = [...tableData];
          newData[index].status = 'Failed';
          setTableData(newData);
        }
      }
  ];

  export default Transactionactions