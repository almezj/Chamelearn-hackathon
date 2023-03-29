import "./App.css";
import Navbar from "./components/Navbar.js";
import Activities from "./components/Activities.js";
import Footer from "./components/Footer.js";
import ReactionActivity from "./components/ReactionActivity";
import MemoryActivity from "./components/MemoryActivity";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App bg-gradient-to-tr from-primary-green to-secondary-green">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/ReactionActivity"
            element={<ReactionActivity />}
          />
          <Route
            exact
            path="/MemoryActivity"
            element={<MemoryActivity />}
          />
          <Route exact path="/" element={<Activities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
