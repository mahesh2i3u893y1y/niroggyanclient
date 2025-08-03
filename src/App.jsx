import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import DoctorDetails from "./components/DoctorDetails"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/doctor-details/:id" element={<DoctorDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
