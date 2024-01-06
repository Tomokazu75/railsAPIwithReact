import client from "./client";

export const getAllPosts = () => {
  return client.get("/posts");
};

export const getDetailPost = (id) => {
  return client.get(`/posts/${id}`);
};

export const createPost = (params) => {
  return client.post("/posts", params);
};

export const updatePost = (id, params) => {
  return client.patch(`/posts/${id}`, params);
};

export const deletePost = (id) => {
  return client.delete(`/posts/${id}`);
};