import React from "react";
import PropTypes from "prop-types";
import { Box, Paper, Typography } from "components/ui";

import * as S from "./MainLayout.styles";

const MainLayout = ({ title, controls, children }) => {
  return (
    <Box sx={S.wrapper}>
      <Box component="header" sx={S.header}>
        <Typography component="h2" sx={S.title}>
          {title}
        </Typography>
        {controls}
      </Box>
      <Box component="main">
        <Paper sx={S.paper} elevation={5}>
          {children}
        </Paper>
      </Box>
    </Box>
  );
};

MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
  controls: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export { MainLayout };
