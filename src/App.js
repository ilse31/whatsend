import { useRecoilState } from "recoil";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./routers/index";
import theme from "./store/theme/index.js";

function App() {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const handleClick = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };
  const defaultTheme =
    currentTheme === "dark" ? "bg-dark text-white" : "bg-white text-dark";
  return (
    <div className={`App ${defaultTheme}`}>
      <Navbar Theme={currentTheme} ThemeSwitch={handleClick} />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
