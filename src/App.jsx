import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./components/Auth/Signup/Signup"
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword"
import Login from "./components/Auth/Login/Login"
import { Container } from "react-bootstrap"
import { useAuth } from "./context/AuthContext"
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
  const { currentUser } = useAuth();
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ background: "#0005", height: "100vh", color: "white" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          {currentUser ? <Route path="/dashboard" element={<Dashboard />} /> : <Route exact path="/" element={<Signup />} />}
        </Routes>
      </Router>
    </Container>
  )
}

export default App
