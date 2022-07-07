import axios from 'axios'

export const getBlogsService = async () => {
  const response = await axios.get('/api/blog/', { withCredentials: true })

  return response.data
}
