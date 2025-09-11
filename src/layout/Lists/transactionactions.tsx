export const Transactionactions = [
  {
    label: 'Successful',
    onClick: (index: number, tableData: any[], setTableData: (data: any[]) => void) => {
      const newData = [...tableData];
      newData[index].status = 'Successful';
      setTableData(newData);
    }
  },
  {
    label: 'Pending',
    onClick: (index: number, tableData: any[], setTableData: (data: any[]) => void) => {
      const newData = [...tableData];
      newData[index].status = 'Pending';
      setTableData(newData);
    }
  },
  {
    label: 'Failed',
    onClick: (index: number, tableData: any[], setTableData: (data: any[]) => void) => {
      const newData = [...tableData];
      newData[index].status = 'Failed';
      setTableData(newData);
    }
  }
];

export default Transactionactions