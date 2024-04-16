import { endpoints } from "services/endpoints";
import { http } from "services/http";

// The lack of error handlers in loaders is not a mistake.
// Errors are handled by the component Error Boundary

export const usersLoader = async () => {
  const users = await http.get(endpoints.users);
  return { users: users.data };
};

export const postsLoader = async ({ request }) => {
  const { searchParams } = await new URL(request.url);
  const userID = await searchParams.get("userID");
  const userResponse = await http.get(endpoints.userByID(userID));
  const postsResponse = await http.get(endpoints.userPosts(userID));

  return { posts: postsResponse.data, user: userResponse.data };
};

export const albumsLoader = async ({ request }) => {
  const { searchParams } = await new URL(request.url);
  const userID = await searchParams.get("userID");
  const userResponse = await http.get(endpoints.userByID(userID));
  const albumsResponse = await http.get(endpoints.userAlbums(userID));
  const photosResponse = await http.get(endpoints.photos);

  const albums = await albumsResponse.data.map((album) => ({
    ...album,
    photos: photosResponse.data.filter(
      (photo) => Number(photo.albumId) === Number(album.id)
    ),
  }));

  return { albums: albums, user: userResponse.data };
};

export const photosLoader = async ({ request }) => {
  const { searchParams } = await new URL(request.url);
  const userID = await searchParams.get("userID");
  const albumID = await searchParams.get("albumID");
  const userResponse = await http.get(endpoints.userByID(userID));
  const photosResponse = await http.get(endpoints.albumPhotos(albumID));

  return { photos: photosResponse.data, user: userResponse.data };
};
