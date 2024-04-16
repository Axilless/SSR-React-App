import React from "react";
import PropTypes from "prop-types";
import { UiBreadcrumbs, Link } from "components/ui";
import { getLinkToUsers, getLinkToCurrentUser } from "utils";
import * as S from "./Breadcrumbs.styles";

const Breadcrumbs = ({ username, children }) => {
  const linkToUsers = getLinkToUsers();
  const linkToCurrentUser = getLinkToCurrentUser(username);

  return (
    <UiBreadcrumbs aria-label="breadcrumb" separator=">" sx={S.wrapper}>
      <Link to={linkToUsers}>Users</Link>
      <Link to={linkToCurrentUser}>{username}</Link>

      {children}
    </UiBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  username: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export { Breadcrumbs };
