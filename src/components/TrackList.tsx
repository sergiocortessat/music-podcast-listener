import useGetPodcastDetails from "../hooks/useGetPodcastDetails";
import {
  formatDate,
  millisToHoursMinutesAndSeconds,
} from "../utils/dataFormat";
import { useNavigate } from "react-router-dom";
import TransitionFrame from "../TransitionFrame";
import Loader from "../Loader";
import Error from "../Error";

const TrackList = () => {
  const { podcastInfo, error, isLoading, podcastId } = useGetPodcastDetails();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  const handleClickDetails = (url: string) => {
    navigate(url);
  };

  return (
    <TransitionFrame className="flex flex-col gap-5 songs-list w-4/6 h-96 p-8 mx-20 my-5 rounded-lg shadow-lg bg-transparent justify-center card-custom">
      <div className="shadow-lg bg-transparent rounded-sm card-custom">
        <h2 className="text-xl font-semibold p-2">
          Episodes: {podcastInfo.podcastDetails.trackCount}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Release Date</th>
              <th>Duration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {podcastInfo.trackInfo.map((track) => {
              const {
                trackId,
                trackName,
                trackTimeMillis,
                releaseDate,
                wrapperType,
              } = track;
              const formattedDate = formatDate(releaseDate);
              const formattedTime =
                millisToHoursMinutesAndSeconds(trackTimeMillis);

              const podcastUrl = `/podcast/${podcastId}/episode/${trackId}`;
              return (
                <tr key={trackId}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <a href={podcastUrl}>
                          <div className="font-bold hover:text-darkEmerald active:text-darkEmerald transition duration-300">{trackName}</div>
                          <div className="text-sm opacity-50">
                            {wrapperType}
                          </div>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>{formattedDate}</td>
                  <td>{formattedTime}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs hover:text-darkEmerald active:text-darkEmerald transition duration-300 "
                      onClick={() => handleClickDetails(podcastUrl)}
                    >
                      details
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Release Date</th>
              <th>Duration</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </TransitionFrame>
  );
};

export default TrackList;
