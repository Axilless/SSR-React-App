import React from "react";
import PropTypes from "prop-types";
import { Grid } from "components/ui";
import { Post } from "./Post/Post";

const PostsList = ({ posts }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {posts?.map((post) => (
        <Grid item key={post.id} xs={12} sm={6} md={4}>
          <Post key={post.id} post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { PostsList };
