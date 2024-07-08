import React, { useEffect, useState } from "react";

function useLocalStorage({ key, defaultTheme }) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultTheme)
      );
    } catch (e) {
      console.log(e.message);
      currentValue = defaultTheme;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
