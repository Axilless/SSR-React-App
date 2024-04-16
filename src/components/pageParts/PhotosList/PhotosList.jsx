import React from "react";
import PropTypes from "prop-types";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "components/ui";

import * as S from "./PhotosList.styles";

const PhotosList = ({ photos }) => {
  const isSmallDisplay = useMediaQuery("(max-width:600px)");
  const isMediumDisplay = useMediaQuery("(max-width:780px)");

  return (
    <ImageList
      cols={isSmallDisplay ? 1 : isMediumDisplay ? 2 : 3}
      gap={8}
      sx={S.imageList}
    >
      {photos.map((photo) => (
        <ImageListItem key={photo.id} sx={S.photoWrapper}>
          <img
            srcSet={photo.url}
            src={photo.thumbnailUrl}
            alt={photo.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={photo.title}
            position="below"
            sx={S.imageItem}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

PhotosList.propTypes = {
  photos: PropTypes.array.isRequired,
};

export { PhotosList };
