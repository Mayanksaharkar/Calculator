import "./App.css";
import Calculator from "./Components/Calculator";
import Drawer from "./Components/Drawer";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
    <div className="w-screen h-screen bg-base-300">
      <Navbar />
      <Drawer/>
      <div className="flex justify-center align-middle h-5/6">
        <Calculator />
      </div>

    </div>
    <Footer/>
</div>
  );
}

export default App;
