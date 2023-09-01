import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PodcastState, Podcast } from './types';

const initialState: PodcastState = {
    podcasts: [],
    loading: false,
    error: null
};

const podcastsSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {
        fetchPodcastsRequest: (state) => {
            state.loading = true;
        },
        fetchPodcastsSuccess: (state, action: PayloadAction<Podcast[]>) => {
            state.loading = false;
            state.podcasts = action.payload;
        },
        fetchPodcastsError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

// Export the actions generated from the slice
export const {
    fetchPodcastsRequest,
    fetchPodcastsSuccess,
    fetchPodcastsError,
} = podcastsSlice.actions;

// Export the reducer
export default podcastsSlice.reducer;
