import express from 'express'

import validateRequest from '../middlewares/validateRequest'
import { blogSchema, findBlogSchema, updateBlogSchema } from '../blog/blogSchema'
import { createBlogHandler, findAllBlogsHandler, findBlogHandler, updateBlogHandler, deleteBlogHandler } from '../blog/blogController'

const blogRoute = express.Router()

blogRoute.post('/', validateRequest(blogSchema), createBlogHandler)
blogRoute.get('/', findAllBlogsHandler)
blogRoute.get('/:blogId', validateRequest(findBlogSchema) ,findBlogHandler)
blogRoute.put('/:blogId', validateRequest(updateBlogSchema) ,updateBlogHandler)
blogRoute.delete('/:blogId', validateRequest(findBlogSchema) , deleteBlogHandler)

export default blogRoute
