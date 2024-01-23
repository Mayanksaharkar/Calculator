import "./App.css";
import Calculator from "./Components/Calculator";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="w-screen h-screen bg-base-300">
      <Navbar />
      <div className="flex justify-center align-middle h-5/6">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
