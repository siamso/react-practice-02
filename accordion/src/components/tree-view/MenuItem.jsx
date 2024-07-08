import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import MenuList from "./MenuList";

function MenuItem({ item }) {
  const [displayCurrenLabel, setDisplayCurrentLabel] = useState({});
  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentLabel({
      ...displayCurrenLabel,
      [getCurrentLabel]: !displayCurrenLabel[getCurrentLabel],
    });
  };
  return (
    <li>
      <div className="flex items-center gap-5 cursor-pointer text-white">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrenLabel[item.label] ? (
              <FaMinus style={{ color: "#fff" }} size={15} />
            ) : (
              <FaPlus style={{ color: "#fff" }} size={15} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrenLabel[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
