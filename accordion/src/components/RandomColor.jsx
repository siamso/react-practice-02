import React from "react";
import { useState } from "react";

function RandomColor() {
  const [color, setColor] = useState("#00000");
  const [textColor, setTextColor] = useState("#fff");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const generateRandom = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandom(hex.length)];
    }

    setColor(hexColor);
  };
  const handleRGBColor = () => {
    const r = generateRandom(256);
    const g = generateRandom(256);
    const b = generateRandom(256);
    setColor(`rgb(${r},${g}, ${b})`);
  };

  return (
    <div
      className="flex justify-center min-h-screen items-center "
      style={{ background: color }}
    >
      <button
        className="mr-5"
        onClick={typeOfColor === "hex" ? handleHexColor : handleRGBColor}
      >
        Generate Color
      </button>
      <button className="mr-2" onClick={() => setTypeOfColor("hex")}>
        Hex Color
      </button>
      <button onClick={() => setTypeOfColor("RGB")}>RGB color</button>
      <p className="ml-10 text-3xl" style={{ color: textColor }}>
        {color}
      </p>
      <button
        className="text-xs ml-5"
        onClick={() => setTextColor(textColor === "#fff" ? "#000000" : "#fff")}
      >
        Change Text Color
      </button>
    </div>
  );
}
export default RandomColor;
