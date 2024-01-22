import "./App.css";
import Calculator from "./Components/Calculator";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div
      className="w-screen h-screen "
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Adjust the opacity here (0.5 means 50% opacity)
      }}
    >
      <Navbar />
      <div className="flex justify-center align-middle h-5/6">
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
