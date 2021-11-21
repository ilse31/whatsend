import "./App.css";
import Footer from "./components/Footer";
import Router from "./routers/index";

function App() {
  return (
    <div className='App'>
      <Router />
      <Footer />
    </div>
  );
}

export default App;
