import { Post } from "@prisma/client";
import prisma from "../database/database";

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">
type UpdatePost = CreatePost

async function getPosts() {
  const result = await prisma.posts.findMany();
  return result;
}

async function getPost(id: number) {
  const result = await prisma.posts.find({
    where: {
      id
    }
  });

  return result;
}

async function createPost(post: CreatePost) {
  const result = await prisma.posts.create({
    data: post
  });

  return result;
}

async function deletePost(id: number) {
  const result = await prisma.posts.update({
    where: {
      id
    }
  });

  return result;
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;