import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ReportThieft from "./pages/ReportTheft/ReportTheft";
import TrackCase from "./pages/TrackCase/TrackCase";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report-theft" element={<ReportTheft />} />
        <Route path="/track-case" element={<TrackCase />} />
      </Routes>
    </>
  );
}

export default App
