import React, { useState } from 'react';
import adminUserlist from 'layout/Lists/adminUsers';
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { ReactComponent as LeftIcon } from "../../../assets/icons/arrow-left.svg";
import { ReactComponent as RightIcon } from "../../../assets/icons/arrow-right.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/horizontal-menu.svg";
import { ReactComponent as FilterIcon } from "../../../assets/icons/fillter2.svg";
import { ReactComponent as LockIcon } from "../../../assets/icons/lock.svg";
import { ReactComponent as DownIcon } from "../../../assets/icons/arrow-down.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/profile-2user.svg";


const AdminUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const users = adminUserlist

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const displayedUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const renderPageNumbers = () => {
    const totalPagesToShow = 9;
    const pages = [];
    const startPage = Math.max(0, currentPage - Math.floor(totalPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + totalPagesToShow);

    for (let i = startPage; i < endPage; i += 1) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`px-2 ${i + 1 === currentPage ? 'font-bold' : ''}`}
        >
          {i + 1}
        </button>
      );
    }

    if (endPage < totalPages) {
      pages.push(<span key="dots">...</span>);
    }

    return pages;
  };

  return (
    <>
      <div className="p-10 w-[1400px]">
        <div className="flex gap-x-8 tracking-normal">
          <div className="bg-white px-3 py-2 rounded-xl shadow-sm w-60">
            <div className="flex justify-between items-center px-2 pt-3">
              <div>
                <p className="text-base">Total Users</p>
                <h2 className="font-semibold text-2xl">4,6789</h2>
              </div>
              <div className='rounded-full p-2.5 bg-gray-200'>
                <UserIcon />
              </div>
            </div>
            <div className="mt-5"><hr /></div>
            <div className="flex text-sm mt-3 mb-2 text-[#c2c9d6]">
              <p>This Week</p>
              <div className="ml-1 -mt-0.5">
                <DownIcon />
              </div>
            </div>
          </div>
          <div className="bg-white px-3 py-2 rounded-xl shadow-sm w-60">
            <div className="flex justify-between items-center px-2 pt-3">
              <div>
                <p className="text-base">Active Users</p>
                <h2 className="font-semibold text-2xl">2,890</h2>
              </div>
              <div className='rounded-full p-2.5 bg-gray-200'>
                <UserIcon />
              </div>
            </div>
          </div>
          <div className="bg-white px-3 py-2 rounded-xl shadow-sm w-60">
            <div className="flex justify-between items-center px-2 pt-3">
              <div>
                <p className="text-base">New Users</p>
                <h2 className="font-semibold text-2xl">890</h2>
              </div>
              <div className='rounded-full p-2.5 bg-gray-200'>
                <UserIcon />
              </div>
            </div>
            <div className="mt-5"><hr /></div>
            <div className="flex text-sm mt-3 mb-2 text-[#c2c9d6]">
              <p>Today</p>
              <div className="ml-1 -mt-0.5">
                <DownIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-8 mb-6 flex justify-between items-end">
            <h3 className="text-xl font-semibold">User Management</h3>
            <div className="flex">
              <button className="border border-gray-200 max-sm:hidden bg-gray-50 rounded-md py-4 h-10 px-3 flex items-center w-72">
                {}
                <span className="pr-1.5">
                  <SearchIcon className="max-lg:w-3 max-lg:h-3" />
                </span>
                <span className="w-full">
                  <input type="text" placeholder="Search users" className="outline-0 bg-transparent text-sm placeholder:text-black h-20 w-full" />
                </span>
              </button>
              <button className="border border-gray-200 max-sm:hidden bg-gray-50 rounded-md py-4 h-10 px-3 flex items-center w-36 ml-5">
                {}
                <span className="w-full">
                  <input type="text" placeholder="Active users" className="outline-0 bg-transparent text-sm placeholder:text-black h-20 w-full" />
                </span>
                <span className="pr-1.5">
                  <FilterIcon className="max-lg:w-3 max-lg:h-3" />
                </span>
              </button>
            </div>
          </div>
          <div className="list grid grid-cols-4 gap-y-7">
            {displayedUsers.map((user, index) => (
              <div key={index} className="bg-white w-72 py-2 px-3 rounded-xs">
                <div className="flex justify-between items-center my-1">
                  <p className={`text-xs font-semibold px-3.5 py-1 rounded-sm ${user.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>{user.status}</p>
                  <div className="mr-1">
                    <MenuIcon />
                  </div>
                </div>
                <p className="mt-3 font-semibold">{user.name}</p>
                <p className="text-sm text-[#c2c9d6]">{user.email}</p>
                <div className="text-base text-[#c2c9d6] flex justify-between mt-2">
                  <p>{user.date}</p>
                  {user.encrypt &&
                    <div className='text-black mr-1 -mt-1'>
                      <LockIcon />
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center text-sm mt-8">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className='bg-[#c2c9d6] flex text-white mr-2 px-3 py-1.5 rounded-sm'>
          <span className="">
              <LeftIcon className="max-lg:w-3 max-lg:h-3" />
          </span>
            Prev
          </button>
          {renderPageNumbers()}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className='bg-primary flex text-white ml-2 px-3 py-1.5 rounded-sm'>
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

export default AdminUsers;