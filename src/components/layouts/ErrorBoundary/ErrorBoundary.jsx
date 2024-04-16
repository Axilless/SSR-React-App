import React from "react";
import { useRouteError } from "react-router-dom";
import { Box, Stack, Typography, Link, useMediaQuery } from "components/ui";
import { getLinkToUsers } from "utils";

import * as S from "./ErrorBoundary.styles";

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);
  const linkToUsers = getLinkToUsers();
  const isSmallDisplay = useMediaQuery("(max-width:600px)");

  return (
    <Box display={S.wrapper(isSmallDisplay)}>
      <Stack direction="column" sx={S.stack}>
        <Typography variant={isSmallDisplay ? "h4" : "h3"}>
          Oops, something went wrong
        </Typography>
        <Typography
          color="error"
          variant={isSmallDisplay ? "h5" : "h4"}
          sx={S.message}
        >
          {error.message}
        </Typography>
        <Link to={linkToUsers}>Return to users page</Link>
      </Stack>
    </Box>
  );
};
