import React, { useRef, useState } from "react";
import useOutsideClick from "./hooks/useOutsideClick";

function UseOutsideClickTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="flex flex-col items-center justify-center">
      {showContent ? (
        <div ref={ref}>
          <h1>THis is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
    </div>
  );
}

export default UseOutsideClickTest;
