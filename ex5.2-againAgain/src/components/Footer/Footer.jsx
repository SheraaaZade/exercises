import { useTheme } from "../../contexts/themeContext";

const Footer = () => {
  const { toggleTheme } = useTheme();

  return (
    <footer>
      <button onClick={toggleTheme}>Changer de thème</button>
    </footer>
  );
};
export default Footer;
