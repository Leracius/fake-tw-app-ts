import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, CommentsState } from '../interfaces/Comment';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    currentUser: "",
    data: [],
    isLoading: false,
    error: null,
  } as CommentsState, 
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCommentsSuccess: (state, action: PayloadAction<Comment[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchCommentsError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  startLoading,
  fetchCommentsSuccess,
  fetchCommentsError,
} = commentsSlice.actions;
export default commentsSlice.reducer;
