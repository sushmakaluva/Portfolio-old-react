import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";


function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
