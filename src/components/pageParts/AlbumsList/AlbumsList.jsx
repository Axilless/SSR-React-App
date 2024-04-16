import React from "react";
import PropTypes from "prop-types";
import { Grid } from "components/ui";
import { Album } from "./Album/Album";

const AlbumsList = ({ albums }) => {
  return (
    <Grid
      container
      component="ul"
      spacing={{ xs: 2, md: 3 }}
      padding={0}
      sx={{
        listStyleType: "none",
      }}
    >
      {albums.map((album) => (
        <Grid item component="li" key={album.id} xs={12} sm={6} md={4}>
          <Album key={album.id} album={album} />
        </Grid>
      ))}
    </Grid>
  );
};

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { AlbumsList };
