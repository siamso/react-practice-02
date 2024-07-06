import React from "react";
import { useState } from "react";
import data from "./data.js";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [enableMultiClick, setEnableMultiClick] = useState(false);

  const handleSingleClick = (generatedId) => {
    setSelected(generatedId === selected ? null : generatedId);
  };
  const handleMultiClick = (generatedId) => {
    const copySet = [...multiple];
    const findCopySetIndex = copySet.indexOf(generatedId);

    findCopySetIndex === -1
      ? copySet.push(generatedId)
      : copySet.splice(findCopySetIndex, 1);
    setMultiple(copySet);
  };
  return (
    <>
      <div className="flex p-5 flex-col items-center">
        <button
          onClick={() => setEnableMultiClick(!enableMultiClick)}
          className="p-5 bg-orange-400 w-max mb-5"
        >
          Enable MultiClick
        </button>
        {data && data.length > 0 ? (
          <div>
            {data.map((dataItem) => (
              <div className="mb-20 bg-cyan-400 p-10 w-auto" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiClick
                      ? () => handleMultiClick(dataItem.id)
                      : () => handleSingleClick(dataItem.id)
                  }
                  className="flex items-center mb-5"
                >
                  <h1 className="text-3xl flex-1">{dataItem.question}</h1>
                  <span className="text-3xl">+</span>
                </div>
                {enableMultiClick
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <p>{dataItem.answer}</p>
                    )
                  : selected === dataItem.id && <p>{dataItem.answer}</p>}
              </div>
            ))}
          </div>
        ) : (
          <p>No Data To Show</p>
        )}
      </div>
    </>
  );
}

export default Accordion;
