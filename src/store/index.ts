import { configureStore } from '@reduxjs/toolkit'
import podcastsSlice from './podcast'

export const store = configureStore({
  reducer: {
    Podcasts: podcastsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* other middlewares if any */),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch