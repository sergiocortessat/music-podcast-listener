import { PodcastInfo } from "../types/podcastDetail";

interface SideCardProps {
  podcastInfo: PodcastInfo;
  podcastUrl: string;
}

const SideCard = ({ podcastUrl, podcastInfo }: SideCardProps) => {
  const {
    podcastDetails: { artworkUrl600, collectionName, artistName },
  } = podcastInfo;
  return (
    <div className="podcast-details sm:w-2/6 pt-2 pb-5 rounded-lg shadow-lg my-5 mx-20 glass card-custom">
      <a href={podcastUrl}>
        <img
          src={artworkUrl600}
          alt="yes"
          className="rounded-lg shadow-lg m-auto p-8"
        />
      </a>
      <div className="px-6 py-4">
        <h1 className="text-2xl font-semibold mb-4">{collectionName}</h1>
        <p className="text-white">By: {artistName}</p>
      </div>
    </div>
  );
};

export default SideCard;
