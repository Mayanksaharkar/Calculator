import "./App.css";
import Drawer from "./Components/Drawer";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <div className="w-screen h-lvh bg-base-300">
        <Navbar />
        <Drawer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
