import React, { useState } from "react";
import SearchInput from '../components/SearchInput';
import PodcastCard from "../components/PodcastCard";
import { useGetPodcastData } from "../hooks/useGetPodcastData";
import useFilteredPodcasts from '../hooks/useFilteredPodcast'; // Import the hook
import Loader from '../Loader';
import Error from '../Error';

const MainView: React.FC = () => {
  const { podcastTop, error, isLoading } = useGetPodcastData();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPodcasts = useFilteredPodcasts(podcastTop, searchTerm);

  if (error) return <Error />;
  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col items-center gap-10 justify-center">
      <SearchInput onSearchTermChange={setSearchTerm} />
      <div className="container flex flex-wrap items-center justify-center gap-5">
        {filteredPodcasts.map((podcast) => (
          <PodcastCard key={podcast.id.attributes["im:id"]} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};

export default MainView;
