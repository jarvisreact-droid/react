import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./qualityscan/about";
import Home from "./qualityscan/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./menu/Sidebar";
import QualityScan from "./qualityscan/quality-scan";
import Student from "./qualityscan/student";
import Contact from "./qualityscan/contact";
import Header from "./menu/header";

function App() {
  return (
    <div className="row container-fluid">
      <div className="col-md-12 bg-dark text-light">
        <Header></Header>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/student" element={<Student />} />
              <Route path="/quality-scan" element={<QualityScan />} />
            </Routes>
          </div>
        </div>
      </div>

      <footer className="col-md-12 bg-dark text-white text-center p-3">
        © 2026 My App Copyrights
      </footer>
    </div>
  );
}

export default App;
