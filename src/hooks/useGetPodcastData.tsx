import { getTopPodcasts } from "../services/api";
import useSWR from "swr";
import { dynamicUpdateLocalStorage, getFromLocalStorage } from "../helpers/storage";
import { PodcastData } from "../types/podcastTop";

export const useGetPodcastData = (): PodcastData => {
  const initialData = getFromLocalStorage("podcastTop");
  const lastFetched = getFromLocalStorage("lastFetched");
  const shouldFetch =
    !initialData ||
    new Date().getTime() - new Date(lastFetched).getTime() > 86400000;
  const fetcher = shouldFetch ? getTopPodcasts : null;

  const {
    data: podcastTop,
    error,
    isLoading,
  } = useSWR("/us/rss/toppodcasts/limit=100/genre=1310/json", fetcher, {
    fallbackData: initialData,
  });
  if (podcastTop && shouldFetch) {
    dynamicUpdateLocalStorage({
        shouldFetch: shouldFetch,
        primaryStorageKey: "podcastTop",
        lastFetchedKey: "lastFetched",
        data: podcastTop,
        currentTimestamp: new Date().toString()
      });
      
  }
  return { podcastTop, error, isLoading };
};
