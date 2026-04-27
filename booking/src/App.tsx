import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ModeSelection from "./pages/modeselection";
import BusPage from "./pages/BusPage";
import TrainPage from "./pages/TrainPage";
import FlightPage from "./pages/FlightPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mode" element={<ModeSelection />} />
      <Route path="/bus" element={<BusPage />} />
      <Route path="/train" element={<TrainPage />} />
      <Route path="/flight" element={<FlightPage />} />
    </Routes>
  );
}