import sunIcon from "../../assets/icons/sun.png";
import moonIcon from "../../assets/icons/moon.png";


export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="dark-toggle"
      onClick={onToggle}
      type="button"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      <img
        src={theme === "dark" ? sunIcon : moonIcon}
        alt="Alternar tema"
        className="theme-icon"
      />
    </button>
  );
}