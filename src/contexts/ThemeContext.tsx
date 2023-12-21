// ThemeContext.js
import { PropsWithChildren, useEffect } from "react";
import { createContext, useState, useContext } from "react";
import useLocalStorage from "../hooks/use-localstorage/use-localstorage";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { value, updateValue } = useLocalStorage(
    "theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );
  const [theme, setTheme] = useState<string>(value);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      document.body.classList.remove(prevTheme);
      updateValue(newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    document.body.classList.add(value);
  }, [value]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
};
