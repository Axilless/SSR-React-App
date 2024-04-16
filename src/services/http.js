import axios from "axios";

const api = "https://jsonplaceholder.typicode.com";

export const http = {
  get: (endpoint, params) => axios.get(`${api}/${endpoint}`, { params }),
};
