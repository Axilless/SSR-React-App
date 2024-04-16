export const endpoints = {
  users: "users",
  photos: "photos",
  userPosts: (userID) => `posts?userId=${userID}`,
  userAlbums: (userID) => `albums?userId=${userID}`,
  albumPhotos: (albumID) => `photos?albumId=${albumID}`,
  userByID: (userID) => `users/${userID}`,
};
