import React from "react";
import PropTypes from "prop-types";
import { Stack } from "components/ui";
import { useSearchParams } from "react-router-dom";
import { UserItem } from "./UserItem/UserItem";
import { useNavigate } from "react-router-dom";
import { sortBy } from "utils";

const UsersList = ({ users, sortingOrder }) => {
  const [searchParams] = useSearchParams();
  const filterUsername = searchParams.get("username");
  const navigate = useNavigate();

  const filterUsersByUsername = (user) => {
    if (filterUsername) {
      return user.username === filterUsername;
    } else {
      return user;
    }
  };

  return (
    <Stack component="ul" padding="8px 0" margin={0} gap={4}>
      {users
        .filter(filterUsersByUsername)
        .sort(sortBy("username", sortingOrder))
        .map((user) => (
          <UserItem key={user.id} user={user} navigate={navigate} />
        ))}
    </Stack>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortingOrder: PropTypes.oneOf(["asc", "desc"]),
};

export { UsersList };
