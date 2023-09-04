import { useState, useEffect } from "react";
import { PodcastTop, PodcastEntry } from "../types/podcastTop";
const useFilteredPodcasts = (
  podcastTop: PodcastTop | null,
  searchTerm: string
): PodcastEntry[] => {
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastEntry[]>([]);

  useEffect(() => {
    if (podcastTop) {
      setFilteredPodcasts(
        podcastTop.entry.filter(
          (podcast) =>
            podcast["im:name"].label
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            podcast["im:artist"].label
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [podcastTop, searchTerm]);

  return filteredPodcasts;
};

export default useFilteredPodcasts;
