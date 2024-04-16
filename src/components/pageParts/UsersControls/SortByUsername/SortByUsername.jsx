import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/ui";
import * as S from "./SortByUsername.styles";

const SortByUsername = ({ sortingOrder, onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="medium"
      onClick={onClick}
      sx={S.button}
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
