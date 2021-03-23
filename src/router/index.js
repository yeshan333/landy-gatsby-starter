import React from "react";
import { Router } from "@reach/router";
import Loadable from '@loadable/component';

import Footer from "../components/Footer";
import Header from "../components/Header";

import GlobalStyles from "../globalStyles";

const Home = Loadable(() => import(`../components/Home`));

const MainRouter = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
        <Router>
          <Home path="/" />
        </Router>
      <Footer />
    </>
  );
};

export default MainRouter;
