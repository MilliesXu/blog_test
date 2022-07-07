import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";


import Spinner from '../components/Spinner'
import { getBlogs } from '../features/blog/blogSlice'
import BlogItem from '../components/BlogItem'

const Dashboard = () => {
  const { blogs, isError, errorMessage, isSuccess, successMessage, isLoading } = useSelector((state) => state.blogs)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      const messages = errorMessage?.split(',')

      messages?.map(message => toast.error(message))
    }

    dispatch(getBlogs())

  }, [isError, errorMessage, dispatch])


  return (
    <>
      {isLoading ? <Spinner /> : (
        <div className="mt-2">
          {blogs.length === 0 ? (
            <div className="text-center">
              <h1>No Blogs</h1>
            </div>
          ) : (
            <div>
              {blogs.map(blog => <BlogItem key={blog._id} blog={blog} />)}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Dashboard