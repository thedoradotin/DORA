import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import EducationPage from "./pages/EducationPage.js";
import SocialAwarenessPage from "./pages/SocialAwarenessPage.js";
import HealthPage from "./pages/HealthPage.js";
import GalleryPage from "./pages/GalleryPage.js";
import ContactPage from "./pages/ContactPage.js";
import RegisterPage from "./pages/RegisterPage.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/education" exact component={EducationPage} />
        <Route path="/social-awareness" exact component={SocialAwarenessPage} />
        <Route path="/health" exact component={HealthPage} />
        <Route path="/gallery" exact component={GalleryPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
