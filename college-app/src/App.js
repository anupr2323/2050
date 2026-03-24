import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";   // ✅ ADD THIS
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import FoodPage from "./pages/FoodPage";
import TransportPage from "./pages/TransportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/transport" element={<TransportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
