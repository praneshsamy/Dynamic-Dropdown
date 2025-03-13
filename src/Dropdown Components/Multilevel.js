

import React, { useState } from "react";
import dropdownData from "./DropdownData";
import "./MultiLevel.css";

const MultiLevel = ({ options, placeholder }) => {
  const [selected, setSelected] = useState(placeholder);

  const handleSelect = (option, topLevel) => {
    if (!option.subOptions) {
      setSelected(topLevel); // Show only the top-level category
    }
  };

  const renderDropdown = (options, parentLabel = null) => {
    return (
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index} className="dropdown-item">
            <div onClick={() => handleSelect(option, parentLabel || option.label)}>
              {option.label} {option.subOptions && "▶"}
            </div>
            {option.subOptions && (
              <div className="submenu">{renderDropdown(option.subOptions, parentLabel || option.label)}</div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button">{selected}</button>
      <div className="dropdown">{renderDropdown(options)}</div>
    </div>
  );
};

export default MultiLevel;
