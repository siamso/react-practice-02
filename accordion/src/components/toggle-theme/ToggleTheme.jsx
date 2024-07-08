import React from "react";

function ToggleTheme({ theme, setTheme }) {
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="m-5 text-black dark:text-white">Hello Bruh!</h1>
      <button
        className="text-white bg-black dark:text-black dark:bg-white"
        onClick={handleTheme}
      >
        Change Theme
      </button>
    </div>
  );
}

export default ToggleTheme;
