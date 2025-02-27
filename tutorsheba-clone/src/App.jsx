import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home_";
import Tutors from "./pages/tution_list";
import Login from "./pages/login_";
import Signup from "./pages/signup_";
import TutorRequestForm from './pages/request_for_tutor';
import TutorJobDetailsPage from './pages/tutor_details';
import TutorDashboard from './pages/profile_tutor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tution_list" element={<Tutors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/request_for_tutor" element={<TutorRequestForm />} />
        <Route path="/tutor_details" element={<TutorJobDetailsPage />} />
        <Route path="/tutor_profile" element={<TutorDashboard />} />
        

      </Routes>
    </Router>
  );
}

export default App;
