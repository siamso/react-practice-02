import React from "react";
import MenuList from "./MenuList";

function TreeView({ menus = [] }) {
  return (
    <div className="min-h-screen w-96 bg-cyan-900">
      <MenuList list={menus} />
    </div>
  );
}

export default TreeView;
