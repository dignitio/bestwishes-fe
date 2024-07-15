/* eslint-disable */

import { useState, useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/horizontal-menu.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/fillter2.svg";
import { ReactComponent as LeftIcon } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as RightIcon } from "../../assets/icons/arrow-right.svg";

const TableComponent = ({ columns, data, title, actions }) => {
  const [tableData, setTableData] = useState(data);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [filterStatus, setFilterStatus] = useState("");

  const handleActionClick = (index, action) => {
    action.onClick(index, tableData, setTableData);
    setOpenDropdownIndex(null);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredData = useMemo(() => {
    if (!filterStatus) return tableData;
    return tableData.filter(row => row.status.toLowerCase().includes(filterStatus.toLowerCase()));
  }, [tableData, filterStatus]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page: tablePage,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize: tablePageSize }
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  const renderPageNumbers = () => {
    const totalPagesToShow = 9;
    const pages = [];
    const startPage = Math.max(0, pageIndex - Math.floor(totalPagesToShow / 2));
    const endPage = Math.min(pageCount, startPage + totalPagesToShow);

    for (let i = startPage; i < endPage; i += 1) {
      pages.push(
        <button
          key={i}
          onClick={() => gotoPage(i)}
          className={`px-3 ${i === pageIndex ? 'font-bold text-red-500' : ''}`}
        >
          {i + 1}
        </button>
      );
    }

    if (endPage < pageCount) {
      pages.push(<span key="dots">...</span>);
    }

    return pages;
  };

  return (
    <>
      <div className="bg-white rounded-2xl border pb-5">
        <div className="pl-5 pr-8">
          <div className='flex justify-between items-center'>
            <h2 className="text-xl my-8 pl-3 font-semibold">{title}</h2>
            <div className="flex">
              <button className="border border-gray-200 max-sm:hidden bg-gray-50 rounded-md h-9 px-3 flex items-center w-72">
                {}
                <span className="pr-1.5">
                  <SearchIcon className="max-lg:w-3 max-lg:h-3" />
                </span>
                <span className="w-full">
                  <input type="text" placeholder="Search wishcard" className="outline-0 bg-transparent text-sm placeholder:text-black h-20 w-full" />
                </span>
              </button>
              <div className="border border-gray-200 max-sm:hidden bg-gray-50 rounded-md py-4 h-9 px-3 flex items-center w-36 ml-5">
                <span className="w-full">
                  <input
                    type="text"
                    placeholder="Active tributes"
                    className="outline-0 bg-transparent text-sm placeholder:text-black h-20 w-full"
                    value={filterStatus}
                    onChange={handleFilterChange}
                  />
                </span>
                <span>
                  <FilterIcon className="max-lg:w-3 max-lg:h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <table {...getTableProps()} className="w-full ">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="font-semibold text-left text-lg pb-2 px-10"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {tablePage.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td
                      {...cell.getCellProps()}
                      className="py-3 border-b text-left px-10 relative"
                    >
                      {cell.column.id === 'status' ? (
                        
                        <>
                          <p
                            className={`${
                              cell.value === 'Active' && 'bg-green-100 text-green-700 py-1 px-4 -ml-2 lg:w-20 text-sm rounded-sm'
                            } ${
                              cell.value === 'Inactive' && 'bg-red-100 text-red-700 -ml-2 py-1 px-4 lg:w-20 text-sm rounded-sm'
                            }
                          `}
                          >
                            {cell.render('Cell')}
                          </p>
                        </>
                      ) : cell.column.id === 'action' ? (
                        <div>
                          <button onClick={() => setOpenDropdownIndex(openDropdownIndex === i ? null : i)} className='rounded-full py-3 pr-4 hover:bg-gray-100'>
                            <MenuIcon className='ml-5 hover:bg-gray-100'/>
                          </button>
                          {openDropdownIndex === i && (
                            <div className="absolute right-6 top-7 w-28 bg-white shadow-lg rounded-lg z-10">
                              {actions.map((action, actionIndex) => (
                                <button
                                  key={actionIndex}
                                  className="flex items-center px-2 w-full rounded-t-lg py-2.5 text-gray-700 border-b hover:bg-gray-100"
                                  onClick={() => handleActionClick(i, action)}
                                >
                                  {action.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="w-8/12 justify-center mx-auto text-sm text-center mt-3 flex">
          <button onClick={() => previousPage()} disabled={!canPreviousPage} className='flex bg-[#c2c9d6] text-white mr-2 px-3 py-1.5 rounded-sm'>
            <span className="">
              <LeftIcon className="max-lg:w-3 max-lg:h-3" />
            </span>
            Prev
          </button>
          {renderPageNumbers()}
          <button onClick={() => nextPage()} disabled={!canNextPage} className='flex bg-primary text-white ml-2 px-3 py-1.5 rounded-sm'>
            Next 
            <span className="">
              <RightIcon className="max-lg:w-3 max-lg:h-3" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
