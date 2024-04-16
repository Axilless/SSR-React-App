import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const MetaTags = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta content="true" name="HandheldFriendly" />
      <meta content="width" name="MobileOptimized" />
      <meta content="yes" name="apple-mobile-web-app-capable" />

      <meta name="keywords" content={keywords.join(", ")}></meta>
    </Helmet>
  );
};

MetaTags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { MetaTags };
