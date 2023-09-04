import React, { useState } from "react";
import { useGetPodcastData } from "../hooks/useGetPodcastData";

const MainView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { podcastTop, error, isLoading } = useGetPodcastData();
  const [filteredPodcasts, setFilteredPodcasts] = useState(podcastTop?.feed.entry || []);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // // const filteredPodcasts = podcasts.filter(podcast =>
  // //     podcast.title.includes(searchTerm) || podcast.author.includes(searchTerm)
  // // );

  console.log("data", podcastTop);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
<div className="flex flex-wrap items-center justify-center gap-5">
  {podcastTop &&
    podcastTop.feed.entry.map((podcast) => {
      const podcastId = podcast.id.attributes["im:id"];
      const podcastUrl = `/podcast/${podcastId}`;
      return (
        <div key={podcast.id.attributes["im:id"]} className="w-96 h-96">
          <a href={podcastUrl}>
            <div className="card w-full glass h-96">
              <figure>
                <img
                  src={podcast["im:image"][2].label}
                  alt={podcast["im:name"].label}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{podcast["im:name"].label}</h2>
                <p>Author: {podcast["im:artist"].label}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check it</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    })}
</div>
    </div>
  );
};

export default MainView;
