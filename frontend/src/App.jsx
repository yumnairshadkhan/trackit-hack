import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/login";
import Dashboard from './pages/Dashboard';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from './pages/Forgetpassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
