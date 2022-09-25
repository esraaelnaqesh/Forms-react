//import "./App.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
 import Home from "./Home";
 import Profile from "./pages/Profile"
import Header from "./components/Header";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
//import { useTheme } from '@material-ui/core/styles';
import withRoot from './withRoot'
import { useTheme } from '@material-ui/core/styles';
import { AuthProvider } from "./components/auth";

function App() {

  const { i18n } = useTranslation();
  const theme = useTheme();
  document.body.dir = i18n.dir();

  useEffect(() => {
    document.body.dir = i18n.dir();
    theme.direction = i18n.dir();
  }, [i18n.dir()]);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
        <Suspense fallback={'loading...'}>
          <ReactNotifications />
         
          <Header />
          <div className="auth-wrapper">
            <div className="auth-inner">
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/profile" element={<Profile/>} />
                </Routes>
              </div>
            </div>
          </div>
          </Suspense>
        </div>
      </Router>
      </AuthProvider>
  
  );
}

export default withRoot(App);
