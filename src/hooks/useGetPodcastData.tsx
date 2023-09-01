// import React from 'react';
import { getTopPodcasts  } from '../services/api';
import useSWR from 'swr'
import { getFromLocalStorage, saveToLocalStorage } from '../helpers/storage';
// import axios from 'axios'

// const fetcher = (url: string) => axios.get(url).then(res => res.data)

export const useGetPodcastData = () => {
    const initialData = getFromLocalStorage('podcastTop');
    const shouldFetch = !initialData;
    const fetcher = shouldFetch ? getTopPodcasts : null;

    const { data: podcastTop, error, isLoading } = useSWR('/us/rss/toppodcasts/limit=100/genre=1310/json', fetcher, { fallbackData: initialData });
    // const { data, error, isLoading } = useSWR("http://localhost:3001", fetcher);
    if (podcastTop && shouldFetch) {
        saveToLocalStorage('podcastTop', podcastTop);
    }
    // const { data: podcastTop, error, isLoading } = useSWR('/us/rss/toppodcasts/limit=100/genre=1310/json', getTopPodcasts)
    // console.log('data', initialData);
    return ({podcastTop, error, isLoading})
}
