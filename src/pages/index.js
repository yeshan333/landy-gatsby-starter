import React from 'react';
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import MainRouter from "../router";
import i18n from "../translation";

const Index = () => (
  <I18nextProvider i18n={i18n}>
    <MainRouter />
  </I18nextProvider>
);

export default Index;