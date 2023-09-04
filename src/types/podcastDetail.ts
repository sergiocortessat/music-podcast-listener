interface APIError {
  message: string;
  // ... other fields
}

export interface UsePodcastDetailsHook {
  podcastInfo: PodcastInfo;
  error: APIError | null;
  isLoading: boolean;
  podcastId: string | undefined;
}

export interface PodcastInfo {
  podcastDetails: PodcastDetails;
  trackInfo: TrackInfo[];
}

interface PodcastDetails {
  artworkUrl600: string;
  collectionName: string;
  artistName: string;
  trackCount: number;
}

interface TrackInfo {
  trackId: number;
  trackName: string;
  shortDescription: string;
  description: string;
  episodeUrl: string;
  releaseDate: string;
  trackTimeMillis: number;
  wrapperType: string;
  collectionName: string;
  kind: string;
  artworkUrl600: string;
}
