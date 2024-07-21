// "use client";
// import { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   // قراءة القيمة من الـ Local Storage عند التهيئة
//   const initialMode = () => localStorage.getItem("mode") || "dark";
//   const [mode, setMode] = useState(initialMode);

//   // تحديث الـ Local Storage عند تغيير الوضع
//   useEffect(() => {
//     localStorage.setItem("mode", mode);
//   }, [mode]);

//   const toggle = () => {
//     setMode((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   return (
//     <ThemeContext.Provider value={{ toggle, mode }}>
//       <div className={`theme ${mode}`}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };

// طريقة اخرى
"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const localStorageMode = localStorage.getItem("mode");

  const [mode, setMode] = useState("dark");

  // useEffect(() => {
  //   localStorage.setItem("mode", mode);
  // }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
