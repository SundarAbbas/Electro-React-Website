import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Solutions from "./Components/Solutions";
import { Routes, Route , Router} from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </div>
  );
}

export default App;
