import { routes } from "config/routes";

export const getLinkToUsers = () => {
  const path = routes.find((route) => route.id === "users").path;
  return path;
};

export const getLinkToPosts = (userID) => {
  let path = routes.find((route) => route.id === "posts").path;
  path = path + `?userID=${userID}`;
  return path;
};

export const getLinkToAlbums = (userID) => {
  let path = routes.find((route) => route.id === "albums").path;
  path = path + `?userID=${userID}`;
  return path;
};

export const getLinkToCurrentUser = (username) => {
  let path = routes.find((route) => route.id === "users").path;
  path = path + `?username=${username}`;
  return path;
};

export const getLinkToPhotos = (userID, albumID) => {
  let path = routes.find((route) => route.id === "photos").path;
  path = path + `?userID=${userID}&albumID=${albumID}`;
  return path;
};
