import React from 'react';
import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <title>Landy - React Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description"
        content="Landy is a free React landing page template designed for developers and startups." />
      <meta name="keywords"
        content="Landy is a free React landing page template designed for developers and startups." />
      <meta property="og:title" content="Landy - React Template" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://landy.website/" />
      <meta property="og:description"
        content="Landy is a free React landing page template designed for developers and startups." />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_EN" />
      <meta property="og:site_name" content="Landy" />
      <meta property="og:url" content="https://landy.website/" />
      <meta property="twitter:title" content="Landy - React Template" />
      <meta property="twitter:description"
        content="Landy is a free React landing page template designed for developers and startups." />
      <meta property="twitter:site" content="https://landy.website/" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" async />
    </Helmet>
  );
}

export default Head;