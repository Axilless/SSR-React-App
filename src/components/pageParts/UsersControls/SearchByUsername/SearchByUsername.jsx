import React from "react";
import PropTypes from "prop-types";
import { Autocomplete, TextField } from "components/ui";
import { useSearchParams } from "react-router-dom";

import * as S from "./SearchByUsername.styles";

const SearchByUsername = ({ searchOptions }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterUsername = searchParams.get("username");

  const getAutocompleteValue = () => {
    if (!filterUsername) return null;
    return searchOptions.find((option) => option.value === filterUsername);
  };

  const onSelectUser = (e, option) => {
    if (!option || !option?.value) {
      setSearchParams(undefined);
    } else {
      setSearchParams({ username: option.value });
    }
  };

  return (
    <Autocomplete
      options={searchOptions}
      value={getAutocompleteValue()}
      onChange={onSelectUser}
      getOptionLabel={(option) => option?.name ?? ""}
      size="small"
      renderInput={(params) => (
        <TextField placeholder="Search by username..." {...params} />
      )}
      isOptionEqualToValue={(option, value) => option?.value === value?.value}
      sx={S.base}
    />
  );
};

SearchByUsername.propTypes = {
  searchOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { SearchByUsername };
