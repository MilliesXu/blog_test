import React from 'react'
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <div className="card border-primary mb-3">
      <Link style={{ textDecoration: 'none' }} to={`/${blog._id}`}>
        <div className="card-header">{blog.createdAt}</div>
        <div className="card-body">
          <h4 className="card-title">{blog.title}</h4>
          <p className="card-text">{blog.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default BlogItem