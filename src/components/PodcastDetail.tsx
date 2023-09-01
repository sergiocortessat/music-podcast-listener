import React from "react";
import useGetPodcastDetails from "../hooks/useGetPodcastDetails";
import TrackList from "./TrackList";
import { Outlet } from "react-router-dom";

const PodCastDetails: React.FC = () => {
  const { podcastInfo, error, isLoading, podcastId } = useGetPodcastDetails();
    if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  console.log("podcastDetails", podcastInfo);
  const podcastUrl = `/podcast/${podcastId}`;
  return (
    <div className="flex w-full justify-center items-start">
      <div className="podcast-details w-2/6 pt-2 pb-5 rounded-lg shadow-lg bg-green-950 m-20">
        <a href={podcastUrl}><img
          src={podcastInfo.podcastDetails["artworkUrl600"]}
          alt="yes"
          className="rounded-lg shadow-lg m-auto p-8"
        />
        </a>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold mb-4">
            {podcastInfo.podcastDetails.collectionName}
          </h1>
          <p className="text-white">
            by: {podcastInfo.podcastDetails.artistName}
          </p>
        </div>
      </div>
      {/* <TrackList podcastInfo={podcastInfo} /> */}
      <div className="songs-list w-4/6 overflow-y-scroll h-96 p-16 m-20 rounded-lg shadow-lg bg-green-950">
        <Outlet/>
        {/* <ul className="list-reset">
              <h2 className="text-xl font-semibold">Episodes: {podcastInfo.podcastDetails.trackCount}</h2>
            {podcastInfo.trackInfo.map((track: any) => (
              <li className="flex justify-between px-6 py-4 flex-col">
                <p className="text-white">{track.trackName}</p>
              </li>
            ))}
          </ul> */}
      </div>
    </div>
  );
};

export default PodCastDetails;
