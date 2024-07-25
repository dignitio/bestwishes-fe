import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ heading, children, headingClassName, dropdownClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <div
        className={`cursor-pointer inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm text-sm font-medium active:bg-gray-50 ${headingClassName}`}
        onClick={toggleDropdown}
      >
        {heading}
      </div>

      {isOpen && (
        <div className={`origin-top-right absolute -left-48 max-lg:-left-44 py-1 top-3 w-48 max-lg:w-44 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-40 ${dropdownClassName}`} style={{ fontFamily: "Nunito Sans" }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
