import { useParams } from "react-router-dom";
import { getPodcastDetails } from "../services/api";
import useSWR from "swr";
import {
  dynamicUpdateLocalStorage,
  getFromLocalStorage,
} from "../helpers/storage";
import { UsePodcastDetailsHook } from "../types/podcastDetail";

const useGetPodcastDetails = (): UsePodcastDetailsHook => {
  const podcastId = useParams().podcastId as string;
  const currentTimestamp = new Date().toString();
  const allPodcastDetails = getFromLocalStorage("allPodcastDetails") || {};
  const lastFetchedDetails = getFromLocalStorage(
    `lastFetchedDetails-${podcastId}`
  );
  const initialData = allPodcastDetails[podcastId];
  const shouldFetch =
    !initialData ||
    new Date().getTime() - new Date(lastFetchedDetails).getTime() > 86400000;
  const fetcher = shouldFetch ? getPodcastDetails : null;
  const {
    data: podcastInfo,
    error,
    isLoading,
  } = useSWR(podcastId, fetcher, {
    fallbackData: initialData,
    onError: (error) => {
      console.log(`Cant fetch podcast details. Error: ${error}`);
    },
  });
  if (podcastInfo && shouldFetch) {
    dynamicUpdateLocalStorage({
      shouldFetch: shouldFetch,
      shouldDeleteOldEntries: true,
      limit: 30, // Optional, defaults to 30 if not provided
      primaryStorageKey: "allPodcastDetails",
      lastFetchedKey: podcastId,
      data: podcastInfo,
      currentTimestamp: currentTimestamp,
    });
  }
  return { podcastInfo, error, isLoading, podcastId };
};

export default useGetPodcastDetails;
