import React from "react";
import { useLoaderData } from "react-router-dom";
import { MainLayout, MetaTags } from "components/layouts";
import { PostsList, Breadcrumbs } from "components/pageParts";
import { Link, Typography } from "components/ui";
import { getLinkToAlbums } from "utils";

export const PostsPage = () => {
  const { posts, user } = useLoaderData();
  const { username, id: userID } = user;
  const linkToAlbums = getLinkToAlbums(userID);

  return (
    <>
      <MetaTags
        title="Posts Page"
        description="Page with posts"
        keywords={[
          "Posts",
          "Posts Page",
          "Page with posts",
          "Page with breadcrumbs",
        ]}
      />
      <MainLayout
        title="Posts"
        controls={
          <Breadcrumbs username={username}>
            <Typography color="inherit" component="span">
              posts
            </Typography>
            <Link to={linkToAlbums}>albums</Link>
          </Breadcrumbs>
        }
      >
        {posts && <PostsList posts={posts} />}
      </MainLayout>
    </>
  );
};
