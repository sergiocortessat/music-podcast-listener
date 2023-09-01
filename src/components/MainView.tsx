/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
// import { Podcast } from './../store/types';
// import { getTopPodcasts  } from '../services/api';
import { useGetPodcastData } from "../hooks/useGetPodcastData";

const MainView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { podcastTop, error, isLoading } = useGetPodcastData();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // Aquí necesitas cargar tus podcasts (posiblemente desde Redux)
  // const podcasts: any[] = []; // Por ahora, solo un array vacío.
  // const [podcast, setPodcast] = useState<any>([]);

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
    podcastTop.feed.entry.map((podcast: any) => {
      const podcastId = podcast.id.attributes["im:id"];
      const podcastUrl = `/podcast/${podcastId}`;
      return (
        <div key={podcast.id.attributes["im:id"]} className="w-96 h-96">
          <a href={podcastUrl}>
            {/* <img src={podcast['im:image'][2].label} alt={podcast['im:name'].label} />
                        <h1>{podcast['im:name'].label}</h1>
                        <h2>Author: {podcast['im:artist'].label}</h2> */}
            {/* <h3>{podcast.category.attributes.label}</h3> */}
            {/* <h4>{podcast['im:releaseDate'].attributes.label}</h4> */}
            {/* add author */}
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
