/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Switch from "react-switch";

const SwitchButton = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };
  
    return (
      <div className="example">
        <label>
          <Switch
            onChange={handleChange}
            checked={checked}
            className="w-5 h-3.5 -left-3"
            // onColor="#fff"
            handleDiameter={15}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={16}
            width={30}
          />
        </label>
      </div>
    );
  };

  export default SwitchButton