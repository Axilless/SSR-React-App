import React from "react";
import PropTypes from "prop-types";
import { ImageList, ImageListItem } from "components/ui";

import * as S from "./PhotosPreview.styles";

const PhotosPreview = ({ photos }) => {
  return (
    <ImageList cols={6} sx={S.wrapper}>
      {photos.slice(0, 6).map((photo) => (
        <ImageListItem key={photo.id} sx={S.imageListItem}>
          <img
            srcSet={photo.url}
            src={photo.thumbnailUrl}
            alt={photo.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

PhotosPreview.propTypes = {
  photos: PropTypes.array.isRequired,
};

export { PhotosPreview };
