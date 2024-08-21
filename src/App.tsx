import HomeTest from "./pages/HomeTest";
import About from "./pages/About";

import Character from "./pages/Character";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          backgroundColor: "YellowGreen",
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/character">Character</Link>
        <div></div>
      </nav>
      <Routes>
        <Route path="/" element={<HomeTest />} />
        <Route path="/about" element={<About />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </Router>
  );
};

export default App;
