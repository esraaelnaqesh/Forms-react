import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./loginForm/Signin";
import Signup from "./registerForm/Signup";
import Home from "./Home";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <NotificationContainer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
