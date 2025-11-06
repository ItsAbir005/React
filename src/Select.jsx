import React, { createContext, useContext, useState } from "react";

const SelectContext = createContext();

export default function Select({ children }) {
  const [selected, setSelected] = useState("");

  return (
    <SelectContext.Provider value={{ selected, setSelected }}>
      <div className="select-wrapper">{children}</div>
    </SelectContext.Provider>
  );
}

function Option({ value }) {
  const { selected, setSelected } = useContext(SelectContext);
  console.log("Selected value:", selected);
  return (
    <div
      onClick={() => setSelected(value)}
      style={{
        padding: "8px",
        cursor: "pointer",
        background: selected === value ? "lightblue" : "white",
      }}
    >
      {value}
    </div>
  );
}

Select.Option = Option;
