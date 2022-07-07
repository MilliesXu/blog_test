import mongoose, { Schema } from 'mongoose'

interface iBlog {
  title: string,
  description: string
}

const blogSchema = new Schema<iBlog> ({
  title: { type: String, required: true },
  description: { type: String }
}, {
  timestamps: true
})

const BlogModel = mongoose.model<iBlog>('Blog', blogSchema)

export default BlogModel
