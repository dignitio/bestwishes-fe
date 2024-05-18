import React, { useState } from "react";
import SearchIcon from "../../assets/icons/search.svg"

const SearchInput = React.forwardRef(
  (
    { name, placeholder, maxLength, onChange, onClickSearchIcon, value },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
      <div className=" relative flex items-center md:w-[600px] xl:w-[762px]">
        
        <input
          className={` appearance-none border rounded pr-3 w-full pl-[50px] py-[14px] bg-white md:pl-[60px] md:py-[14px] text-[14px] md:text-[16px] font-semibold text-[#000000] ${isFocused ? 'border-primary' : 'border-LightGray'} leading-6 focus:outline-none focus:bg-white focus:border-Blue`}
          type="search"
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          value={value}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
         <span className="absolute inset-y-5 md:inset-y-4 left-5 w-[16px] h-[16px] md:w-[24px] md:h-[24px]">
            <img src={SearchIcon} alt="" className="w-full h-full" />
          </span>
      </div>
    );
  }
); 

export default SearchInput