import React from "react";
import cl from "./MySelect.module.css";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className={cl.container}>
      <p className={cl.textBefore}>{defaultValue}</p>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
