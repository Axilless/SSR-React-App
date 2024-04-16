import React from "react";
import { useLoaderData } from "react-router-dom";
import { MainLayout, MetaTags } from "components/layouts";
import { PhotosList, Breadcrumbs } from "components/pageParts";
import { getLinkToPosts, getLinkToAlbums } from "utils";
import { Link, Typography } from "components/ui";

export const PhotosPage = () => {
  const { photos, user } = useLoaderData();
  const { username, id: userID } = user;

  const linkToPosts = getLinkToPosts(userID);
  const linkToAlbums = getLinkToAlbums(userID);

  return (
    <>
      <MetaTags
        title="Photos Page"
        description="Page with photos"
        keywords={[
          "Photos",
          "Photos Page",
          "Page with photos",
          "Page with breadcrumbs",
          "Photo grid",
        ]}
      />
      <MainLayout
        title="Photos"
        controls={
          <Breadcrumbs username={username}>
            <Link to={linkToPosts}>posts</Link>
            <Link to={linkToAlbums}>albums</Link>
            <Typography color="inherit" component="span">
              photos
            </Typography>
          </Breadcrumbs>
        }
      >
        {photos && <PhotosList photos={photos} />}
      </MainLayout>
    </>
  );
};
