import React from "react";
import { useLoaderData } from "react-router-dom";
import { MainLayout, MetaTags } from "components/layouts";
import { AlbumsList, Breadcrumbs } from "components/pageParts";
import { getLinkToPosts } from "utils";
import { Link, Typography } from "components/ui";

export const AlbumsPage = () => {
  const { albums, user } = useLoaderData();
  const { username, id: userID } = user;

  const linkToPosts = getLinkToPosts(userID);

  return (
    <>
      <MetaTags
        title="Albums Page"
        description="Page with albums"
        keywords={[
          "Albums",
          "Albums Page",
          "Page with albums",
          "Page with breadcrumbs",
          "Albums list",
        ]}
      />
      <MainLayout
        title="Albums"
        controls={
          <Breadcrumbs username={username}>
            <Typography color="inherit" component="span">
              albums
            </Typography>
            <Link to={linkToPosts}>posts</Link>
          </Breadcrumbs>
        }
      >
        {albums && <AlbumsList albums={albums} />}
      </MainLayout>
    </>
  );
};
