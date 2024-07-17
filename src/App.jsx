import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import Signup from "./components/Auth/Signup/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Login from "./components/Auth/Login/Login";
import { Container } from "react-bootstrap";
import { useAuth } from "./context/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Auth/Profile/Profile";

function App() {
  const { currentUser } = useAuth();
  return (
    <div className="bg-light">
      <Navbar />
      <Container style={{ height: "100vh" }}>
        <Router>
          <Routes>
              <Route exact path="/" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                
                path="/forgot-password"
                element={<ForgotPassword />}
              />
            {currentUser ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Signup />} />
                {/* <Route path="*" element={<Dashboard />} /> */}
              </>
            )}
            {/* <Route path="*" element={<Signup />} /> */}
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
