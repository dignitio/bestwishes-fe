import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTable, useSortBy, usePagination } from 'react-table';
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import { ReactComponent as MenuIcon } from "../../assets/icons/horizontal-menu.svg"
import { ReactComponent as FilterIcon } from "../../assets/icons/fillter2.svg"
import { ReactComponent as LeftIcon } from "../../assets/icons/arrow-left.svg"
import { ReactComponent as RightIcon } from "../../assets/icons/arrow-right.svg"

const TableComponent = ({ columns, data, title, linkTitle, linkURL }) => {
  const [tableData, setTableData] = useState(data);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleStatusChange = (index, newStatus) => {
    const newData = [...tableData];
    newData[index].status = newStatus;
    setTableData(newData);
    setOpenDropdownIndex(null);
  };

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
      data: tableData,
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

    for (let i = startPage; i < endPage; i+=1) {
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
        <div className="pl-5 pr-8 mt-4">
          <div className='flex justify-between items-center'>
            <h2 className="text-xl my-8 pl-6 font-semibold">{title}</h2>
            <div className="flex">
              <button className="border border-gray-200 max-sm:hidden bg-gray-50 rounded-md h-9 px-3 flex items-center w-72">
                  {}
                  <span className="pr-1.5">
                      <SearchIcon className="max-lg:w-3 max-lg:h-3" />
                  </span>
                  <span className="w-full">
                      <input type="text" placeholder="Search wishcard" className="outline-0 bg-transparent text-sm placeholder:text-black h-20 w-full"/>
                  </span>
              </button>
              <button className="border border-gray-200 max-sm:hidden bg-gray-50 rounded-md py-4 h-9 px-3 flex items-center w-36 ml-5">
                {}
                  <span className="w-full">
                      <input type="text" placeholder="Active tributes" className="outline-0 bg-transparent text-sm placeholder:text-black h-20 w-full"/>
                  </span>
                  <span className="">
                      <FilterIcon className="max-lg:w-3 max-lg:h-3" />
                  </span>
              </button>
            </div>
          </div>
          <div className="text-primaryColor underline tracking-tight hover:opacity-40 text-[16px]">
            <Link to={`${linkURL}`}>{linkTitle}</Link>
          </div>
        </div>
        <table {...getTableProps()} className="w-full ">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="font-semibold text-center text-lg pb-2 px-1"
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
                      className="py-4 border-b text-center px-10 relative"
                    >
                      {cell.column.id === 'action' ? (
                        <div>
                          <button onClick={() => setOpenDropdownIndex(openDropdownIndex === i ? null : i)}>
                            {}
                            <MenuIcon />
                          </button>
                          {openDropdownIndex === i && (
                            <div className="absolute right-6 top-7 w-28 bg-white shadow-lg rounded-lg z-10">
                              <button
                                className="flex items-center px-2 w-full rounded-t-lg py-2.5  text-gray-700  border-b hover:bg-gray-100"
                                onClick={() => handleStatusChange(i, 'Active')}
                              >
                                Active
                              </button>
                              <button
                                className="flex items-center px-1.5 py-2.5 w-full text-gray-700 hover:bg-gray-100"
                                onClick={() => handleStatusChange(i, 'Inactive')}
                              >
                                Inactive
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p
                          className={`${
                            cell.value === 'Active' && 'bg-green-100 text-green-700 py-1 px-2 xl:w-20 xl:mx-auto text-sm rounded-sm'
                          } ${
                            cell.value === 'Inactive' && 'bg-red-100 text-red-700 py-1 px-2 xl:w-20 xl:mx-auto text-sm rounded-sm'
                          }`}
                        >
                          {cell.render('Cell')}
                        </p>
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
