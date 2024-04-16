import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/ui";
import * as S from "./SortByUsername.styles";
import { useSearchParams } from "react-router-dom";

const SortByUsername = ({ sortingOrder, onClick }) => {
  const [searchParams] = useSearchParams();
  const filterUsername = searchParams.get("username");

  return (
    <Button
      variant="contained"
      color="primary"
      size="medium"
      onClick={onClick}
      sx={S.button}
      disabled={Boolean(filterUsername)}
    >
      {sortingOrder === "asc" ? "Sort ▼" : "Sort ▲"}
    </Button>
  );
};

SortByUsername.propTypes = {
  sortingOrder: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { SortByUsername };
