import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getBlogsService } from "./blogService"

const initialState = {
  blogs: [],
  isSuccess: false,
  isError: false,
  errorMessage: '',
  successMessage: '',
  isLoading: true
}

// get goals
export const getBlogs = createAsyncThunk('goals/get', async (thunkAPI, { dispatch }) => {
  try {
    return await getBlogsService()
  } catch (error) {
    const message = error.response.data.errorMessage

    return thunkAPI.rejectWithValue(message);
  }
})

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    resetBlogs: () => initialState,
    resetMessage: (state) => {
      state.errorMessage = ''
      state.successMessage = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.blogs = action.payload.blogs
      })
  }
})

export const { resetGoals, resetMessage } = blogSlice.actions
export default blogSlice.reducer
