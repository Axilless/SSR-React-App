import React from "react";
import PropTypes from "prop-types";
import { Link, Stack, Typography, Button, useMediaQuery } from "components/ui";

import { getStyles } from "./UserItem.styles";

const UserItem = ({ user, navigate }) => {
  let linkSearch = `?userID=${user.id}`;
  const isSmallDisplay = useMediaQuery("(max-width:600px)");

  const S = getStyles(isSmallDisplay);
  const buttonSize = isSmallDisplay ? "medium" : "large";

  return (
    <Stack component="li" sx={S.wrapper}>
      <Stack gap={0.5}>
        <Typography component="h5" sx={S.username}>
          {user.username}
        </Typography>
        <Typography component="p" sx={S.name}>
          {user.name}
        </Typography>

        <Link to={`mailto: ${user.email.toLowerCase()}`}>
          <Typography variant="p" component="p" sx={S.email}>
            {user.email}
          </Typography>
        </Link>

        <Typography variant="p" component="p" sx={S.phone}>
          {user.phone}
        </Typography>
      </Stack>

      <Stack direction="row" gap={1}>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            navigate({
              pathname: "/posts",
              search: linkSearch,
            });
          }}
          size={buttonSize}
        >
          Posts
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            navigate({
              pathname: "/albums",
              search: linkSearch,
            });
          }}
          size={buttonSize}
        >
          Albums
        </Button>
      </Stack>
    </Stack>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export { UserItem };
