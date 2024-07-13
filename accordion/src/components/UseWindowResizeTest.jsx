import React from "react";
import useWindowResize from "./hooks/useWindowResize";

function UseWindowResizeTest() {
  const { width, height } = useWindowResize();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>UseWindowResize</h1>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </div>
  );
}

export default UseWindowResizeTest;
