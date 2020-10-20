import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";

function App() {
  const appStyle = {
    backgroundImage: "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)"
  }
  return (
    <React.Fragment>
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
    </React.Fragment >

  );
}

export default App;
