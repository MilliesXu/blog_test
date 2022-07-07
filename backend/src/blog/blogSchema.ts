import { object, string, TypeOf, number} from 'zod'

export const blogSchema = object({
  body: object({
    title: string({
      required_error: 'title is required'
    }),
    description: string(),
  })
})

export const findBlogSchema = object({
  params: object({
    blogId: string()
  })
})

export const updateBlogSchema = object({
  params: object({
    blogId: string()
  }),
  body: object({
    title: string({
      required_error: 'Name is required'
    }),
    description: string(),
  })
})

export type BlogInput = TypeOf<typeof blogSchema>['body']
export type FindBlogParams = TypeOf<typeof findBlogSchema>['params']
export type UpdateBlog = TypeOf<typeof updateBlogSchema>
