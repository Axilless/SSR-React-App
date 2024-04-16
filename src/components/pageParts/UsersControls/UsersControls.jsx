import React from "react";
import PropTypes from "prop-types";
import { SortByUsername } from "./SortByUsername/SortByUsername";
import { SearchByUsername } from "./SearchByUsername/SearchByUsername";
import { Stack } from "components/ui";

import * as S from "./UsersControls.styles";

const UsersControls = ({ searchOptions, sortingOrder, changeSortingOrder }) => {
  return (
    <Stack sx={S.wrapper}>
      <SortByUsername
        sortingOrder={sortingOrder}
        onClick={changeSortingOrder}
      />
      <SearchByUsername searchOptions={searchOptions} />
    </Stack>
  );
};

UsersControls.propTypes = {
  searchOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortingOrder: PropTypes.oneOf(["asc", "desc"]).isRequired,
  changeSortingOrder: PropTypes.func.isRequired,
};

export { UsersControls };
