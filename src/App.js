import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About/About";
import BookAppoinment from "./pages/BookAppointment/BookAppoinment";
import DocInfo from "./pages/DocInfo/DocInfo";
import Doctors from "./pages/Doctors/Doctors";
import FAQ from "./pages/FAQ/FAQ";
import Signin from "./pages/Form/Signin";
import Signup from "./pages/Form/Signup";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import PrivacyPolicies from "./pages/PrivacyPolicies/PrivacyPolicies";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/doctors">
            <Doctors />
          </Route>
          <Route exact path="/doctor/:name">
            <DocInfo />
          </Route>
          <Route path="/doctor/:name/:id">
            <BookAppoinment />
          </Route>
          <Route path="/privacy&policies">
            <PrivacyPolicies />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
