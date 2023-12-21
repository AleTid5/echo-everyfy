import TimerIcon from "../../../../assets/icons/TimerIcon";
import MoonIcon from "../../../../assets/icons/MoonIcon";
import SunIcon from "../../../../assets/icons/SunIcon";
import { useThemeContext } from "../../../../contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-neutral-200 dark:bg-neutral-600">
      <div className="flex items-center gap-2 text-lg font-semibold dark:text-white">
        <TimerIcon className="w-6 h-6" />
        <span>EchoEveryfy</span>
      </div>
      <button aria-label="Toggle Dark Mode">
        {theme === "light" ? (
          <MoonIcon
            className="h-4 w-4 text-gray-800 dark:text-white"
            onClick={toggleTheme}
          />
        ) : (
          <SunIcon
            className="h-4 w-4 text-gray-800 dark:text-white"
            onClick={toggleTheme}
          />
        )}
      </button>
    </header>
  );
};

export default Header;
