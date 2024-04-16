import React from "react";
import { UsersPage, PostsPage, AlbumsPage, PhotosPage } from "pages";
import {
  usersLoader,
  postsLoader,
  albumsLoader,
  photosLoader,
} from "./loaders";
import { ErrorBoundary } from "components/layouts";

export const routes = [
  {
    path: "/",
    id: "users",
    loader: usersLoader,
    element: <UsersPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    id: "posts",
    path: "/posts",
    loader: postsLoader,
    element: <PostsPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    id: "albums",
    path: "/albums",
    loader: albumsLoader,
    element: <AlbumsPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    id: "photos",
    path: "/photos",
    loader: photosLoader,
    element: <PhotosPage />,
    errorElement: <ErrorBoundary />,
  },
];
