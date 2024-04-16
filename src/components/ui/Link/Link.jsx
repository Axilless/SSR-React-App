import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "components/ui";

const Link = ({ to, style, children }) => {
  return (
    <Box display="inline-block">
      <RouterLink style={style} to={to}>
        {children}
      </RouterLink>
    </Box>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export { Link };
