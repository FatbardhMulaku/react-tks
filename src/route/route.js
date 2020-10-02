import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../layout/DefaultLayout";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import WhatWeDo from "../pages/WhatWeDo";
import Faq from "../pages/Faq";
import Security from "../pages/Security";
import Seo from "../pages/Seo";
import WebServices from "../pages/WebServices";
import About from "../pages/About";
import Software from "../pages/Software";
import Team from "../pages/Team";

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
          <Route path="/security" exact render={() => <Security />} />
          <Route path="/seo-analysis" exact render={() => <Seo />} />
          <Route path="/web-services" exact render={() => <WebServices />} />
          <Route path="/who-we-are" exact render={() => <About />} />
          <Route path="/team" exact render={() => <Team />} />
          <Route path="/our-agency" exact render={() => <Software />} />
          <Route path="/404" render={() => <PageNotFound />} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default route;
