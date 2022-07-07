import { Request, Response, NextFunction } from 'express'

import { MyError } from '../middlewares/errorHandler';
import { BlogInput, FindBlogParams, UpdateBlog } from './blogSchema';
import { createBlogService, deleteBlogService, findAllBlogsService, findOneBlogService, updateBlogService } from './blogService';

export const createBlogHandler = async (req: Request<{}, {}, BlogInput>, res: Response, next: NextFunction) => {
  try {
    const body = req.body
    const blog = await createBlogService(body)

    res.send({
      blogInfo: blog,
      successMessage: 'Successfully create a blog'
    })
  } catch (error: any) {
    next(new MyError(error.message, error.errorCode))
  }
}

export const findAllBlogsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blogs = await findAllBlogsService()

    res.send({
      blogs: blogs
    })
  } catch (error: any) {
    next(new MyError(error.message, error.errorCode))
  }
}

export const findBlogHandler = async (req: Request<FindBlogParams>, res: Response, next: NextFunction) => {
  try {
    const { blogId } = req.params
    const blog = await findOneBlogService(blogId)

    res.send({
      blogInfo: blog
    })
  } catch (error: any) {
    next(new MyError(error.message, error.errorCode))
  }
}

export const updateBlogHandler = async (req: Request<UpdateBlog['params'], {}, UpdateBlog['body']>, res: Response, next: NextFunction) => {
  try {
    const { blogId } = req.params
    const body = req.body
    const blog = await updateBlogService(blogId, body)

    res.send({
      blogInfo: blog,
      successInfo: 'Successfully update the blog'
    })
  } catch (error: any) {
    next(new MyError(error.message, error.errorCode))
  }
}

export const deleteBlogHandler = async (req: Request<FindBlogParams>, res: Response, next: NextFunction) => {
  try {
    const { blogId } = req.params

    await deleteBlogService(blogId)

    res.send({
      successInfo: 'Successfully delete the blog'
    })
  } catch (error: any) {
    next(new MyError(error.message, error.errorCode))
  }
}
