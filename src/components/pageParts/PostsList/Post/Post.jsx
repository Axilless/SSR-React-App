import React from "react";
import PropTypes from "prop-types";
import { Stack, Typography, Paper } from "components/ui";

import * as S from "./Post.styles";

const Post = ({ post }) => {
  return (
    <Paper elevation={4} sx={S.paper}>
      <Stack component="li" direction="column" gap={1}>
        <Typography variant="h4" sx={S.title}>
          {post.title}
        </Typography>

        <Typography variant="p">{post.body}</Typography>
      </Stack>
    </Paper>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export { Post };
