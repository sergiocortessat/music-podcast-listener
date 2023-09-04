import { PodcastEntry } from "../types/podcastTop";

interface PodcastCardProps {
  podcast: PodcastEntry;
}

const PodcastCard = ({ podcast }: PodcastCardProps) => {
  const podcastId = podcast.id.attributes["im:id"];
  const podcastUrl = `/podcast/${podcastId}`;
  return (
    <div className="sm:h-96 sm:w-1/4 w-4/5">
      <a href={podcastUrl}>
        <div className="card w-full glass h-96 hover:bg-black transition duration-500 hover:shadow-gray-600 card-custom">
          <figure className="p-4">
            <img
              src={podcast["im:image"][2].label}
              alt={podcast["im:name"].label}
              className="image-custom"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-col justify-center items-start">
              <h3 className="card-title text-sm text-ellipsis">
                {podcast["im:name"].label}
              </h3>
              <p>Author: {podcast["im:artist"].label}</p>
            </div>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary">Check it</button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PodcastCard;
