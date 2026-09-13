import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Jobs2030 from "./pages/Jobs2030";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logo">IT<span>2030</span></div>

        <div className="nav-links">
          <Link to="/">IT Jobs 2030</Link>
          <Link to="/roadmap">Career Roadmap</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Jobs2030 />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;