import { useState } from 'react';

const DeleteDropdown = ({heading, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left mb-8">
      <div
        className="cursor-pointer inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm bg-white text-sm font-medium active:bg-gray-50"
        onClick={toggleDropdown}
      >
        {heading}
      </div>

      {isOpen && (
        <div className="origin-top-right absolute left-24 py-1.5 pb-3 top-2 w-36 max-sm:w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{fontFamily: "Nunito Sans",}}>
            {children}
        </div>
      )}
    </div>
  );
};

export default DeleteDropdown;