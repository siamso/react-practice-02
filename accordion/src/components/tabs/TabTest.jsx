import React from "react";
import Tabs from "./Tabs";

function TabTest() {
  const RandomContent = () => {
    return <div>Random Content</div>;
  };
  const tabs = [
    {
      label: "Tab 1",
      content: <div>this is tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>this is tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomContent />,
    },
  ];
  return <Tabs tabs={tabs} />;
}

export default TabTest;
