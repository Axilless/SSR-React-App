import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { Stack, Typography, Paper, Link } from "components/ui";
import { PhotosPreview } from "./PhotosPreview/PhotosPreview";
import { getLinkToPhotos } from "utils";

import * as S from "./Album.styles";

const Album = ({ album }) => {
  const [searchParams] = useSearchParams();
  const userID = searchParams.get("userID");

  const linkToPhotos = getLinkToPhotos(userID, album.id);

  return (
    <Stack direction="column" gap={1} sx={S.wrapper}>
      <Link to={linkToPhotos}>
        <Paper elevation={6} sx={S.paper}>
          <Typography variant="h6" sx={S.title}>
            {album.title}
          </Typography>
          <PhotosPreview photos={album.photos} />
        </Paper>
      </Link>
    </Stack>
  );
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

export { Album };
