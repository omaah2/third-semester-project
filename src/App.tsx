import React from "react";
import Auth from "./Pages/Auth/Auth";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Hero from "./Pages/LandingPage/Hero/Hero";
import BookAppointment from "./Pages/LandingPage/Appointment/BookAppointment";
import Service from "./Pages/LandingPage/Service/service";
import How from "./Pages/LandingPage/How/How";
import About from "./Pages/About/About";
import HospitalSearch from "./Components/HospitalSearch";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            {/* Set the LandingPage as the default route */}
            <Route path="/" element={<LandingPage />} />
            {/* Define other routes */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/appointment" element={<BookAppointment />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/services" element={<Service />} />
            <Route path="/how" element={<How />} />
            <Route path="/about" element={<About />} />
            <Route path="/hospitalsearch" element={<HospitalSearch />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
