import React from "react";
import useGetPodcastDetails from "../hooks/useGetPodcastDetails";
import { Outlet } from "react-router-dom";
import Error from "../Error";
import Loader from "../Loader";
import SideCard from "../components/SideCard";

const PodCastDetails: React.FC = () => {
  const { podcastInfo, error, isLoading, podcastId } = useGetPodcastDetails();
  if (isLoading) return <Loader />;
  if (error) return <Error />;
  const podcastUrl = `/podcast/${podcastId}`;
  return (
    <div className="flex w-full flex-col sm:flex-row  items-center justify-center sm:items-start md:h-8">
      <SideCard podcastInfo={podcastInfo} podcastUrl={podcastUrl} />
      <Outlet />
    </div>
  );
};

export default PodCastDetails;
