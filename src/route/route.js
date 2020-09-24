import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../layout/DefaultLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import WhatWeDo from "../pages/WhatWeDo";
import Faq from "../pages/Faq";

const route = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/contact" exact render={() => <Contact />} />
          <Route path="/blog" exact render={() => <Blog />} />
          <Route path="/what-we-do" exact render={() => <WhatWeDo />} />
          <Route path="/faq" exact render={() => <Faq />} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default route;
