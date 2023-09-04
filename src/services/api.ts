import axios from "axios";
import { PodcastInfo } from "../types/podcastDetail";
import { PodcastTop } from "../types/podcastTop";

export const baseUrl = axios.create({
  baseURL: "https://itunes.apple.com",
});

export const getTopPodcasts = async (url: string): Promise<PodcastTop> => {
  const response = await baseUrl.get(url);
  console.log("response", response.data.feed, "response");
  return response.data.feed;
};

export const getPodcastDetails = async (
  podcastId: string
): Promise<PodcastInfo> => {
  console.log("podcastId", podcastId, "podcastId");
  const responseTrackInfo = await axios.get(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
    )}`
  );
  return {
    podcastDetails: JSON.parse(responseTrackInfo.data.contents).results[0],
    trackInfo: JSON.parse(responseTrackInfo.data.contents).results.slice(1),
  };
};
