import React, { useState } from "react";

function Tabs({ tabs }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnClick = (getCurrenIndex) => {
    setCurrentIndex(getCurrenIndex);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-2">
        {tabs.map((tab, index) => (
          <div
            className={
              currentIndex === index
                ? "text-2xl bg-blue-400 px-5 py-3 cursor-pointer"
                : "text-2xl bg-green-400 px-5 py-3 cursor-pointer"
            }
            onClick={() => handleOnClick(index)}
            key={tab.label}
          >
            <span>{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="text-red-500 m-20">{tabs[currentIndex].content}</div>
    </div>
  );
}

export default Tabs;
