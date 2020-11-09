import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "../components/Shared/ScrollToTop";
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
import Company from "../pages/Company";
import Career from "../pages/Career";
import WebDesign from "../pages/Services/WebDesign";
import Management from "../pages/Services/Management";
import Cloud from "../pages/Services/Cloud";
import ItSupport from "../pages/Services/IT_Support"
import ItOutsourcing from "../pages/Services/IT_Outsourcing";
import Application from "../pages/Services/Application";
import ItConsulting from "../pages/Services/IT_Consulting";
import DataAnalytics from "../pages/Services/DataAnalytics";
import Cybersecurity from "../pages/Services/Cybersecurity";
import Ecommerce from "../pages/Services/Ecommerce";
import ImageAnalysis from "../pages/Services/ImageAnalysis";
import WebPortalDevelopment from "../pages/Services/WebPortalDevelopment";
import TestingQa from "../pages/Services/Testing_Qa";

const route = () => {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/company" exact render={() => <Company />} />
          <Route path="/career" exact render={() => <Career />} />
          <Route path="/portfolio" exact render={() => <Software />} />
          <Route path="/webdesign" exact render={() => <WebDesign />} />
          <Route path="/management" exact render={() => <Management />} />
          <Route path="/cloud" exact render={() => <Cloud />} />
          <Route path="/it-support" exact render={() => <ItSupport />} />
          <Route path="/it-outsourcing" exact render={() => <ItOutsourcing />} />
          <Route path="/application" exact render={() => <Application />} />
          <Route path="/it-consulting" exact render={() => <ItConsulting />} />
          <Route path="/data-analytics" exact render={() => <DataAnalytics />} />
          <Route path="/cybersecurity" exact render={() => <Cybersecurity />} />
          <Route path="/ecommerce" exact render={() => <Ecommerce />} />
          <Route path="/image-analysis" exact render={() => <ImageAnalysis />} />
          <Route path="/web-portal-development" exact render={() => <WebPortalDevelopment />} />
          <Route path="/testing-qa" exact render={() => <TestingQa />} />
          <Route path="/404" render={() => <PageNotFound />} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default route;
