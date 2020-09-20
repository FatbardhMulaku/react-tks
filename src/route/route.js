import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../layout/DefaultLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import CaseStudies from "../pages/CaseStudies";

const route = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/contact" exact render={() => <Contact />} />
          <Route path="/blog" exact render={() => <Blog />} />
          <Route path="/Case-studies" exact render={() => <CaseStudies />} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default route;
