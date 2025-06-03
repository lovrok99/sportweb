import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Vijesti from "./components/Vijesti";
import Utakmice from "./components/Utakmice";
import Transferi from "./components/Transferi";
import Clanak from "./components/Clanak";
import Hnl from "./components/Hnl";
function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vijesti" element={<Vijesti />} />
            <Route path="/utakmice" element={<Utakmice />} />
            <Route path="/transferi" element={<Transferi />} />
            <Route path="/hnl" element={<Hnl />} />
            <Route path="/vijesti/:id" element={<Clanak />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
