import React from "react";
import useGetPodcastDetails from "../hooks/useGetPodcastDetails";
import { Outlet } from "react-router-dom";
import Loader from "../Loader";
import SideCard from "./SideCard";

const PodCastDetails: React.FC = () => {
  const { podcastInfo, error, isLoading, podcastId } = useGetPodcastDetails();
  if (isLoading) return <Loader />;
  if (error) return <div>Error...</div>;
  const podcastUrl = `/podcast/${podcastId}`;
  return (
    <div className="flex w-full h-8 justify-center items-start">
      <SideCard podcastInfo={podcastInfo} podcastUrl={podcastUrl} />
      <Outlet />
    </div>
  );
};

export default PodCastDetails;
