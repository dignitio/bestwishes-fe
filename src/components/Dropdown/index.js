import { useState } from 'react';

const Dropdown = ({heading, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="cursor-pointer inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm bg-white text-sm font-medium active:bg-gray-50"
        onClick={toggleDropdown}
      >
        {heading}
      </div>

      {isOpen && (
        <div className="origin-top-right absolute left-4 max-sm:-left-44 max-lg:-left-36 py-1.5 pb-3 top-5 w-40 max-sm:w-48 max-lg:w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{fontFamily: "Nunito Sans",}}>
            {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;