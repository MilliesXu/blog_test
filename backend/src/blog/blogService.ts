import { MyError } from "../middlewares/errorHandler";
import BlogModel from "./blogModel";
import { BlogInput, UpdateBlog } from "./blogSchema";

export const createBlogService = async (body: BlogInput) => {
  return await BlogModel.create(body)
}

export const findAllBlogsService = async () => {
  return await BlogModel.find()
}

export const findOneBlogService = async (id: string) => {
  const blog = await BlogModel.findById(id)

  if (!blog) throw new MyError('Blog not found', 404)

  return blog
}

export const updateBlogService = async (id: string, body: UpdateBlog['body']) => {
  const blog = await findOneBlogService(id)

  blog.title = body.title
  blog.description = body.description
  blog.save()

  return blog
}

export const deleteBlogService = async (id: string) => {
  const blog = await findOneBlogService(id)

  return await blog.delete()
}
