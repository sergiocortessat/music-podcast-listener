import React, { useRef } from "react";
import useGetPodcastDetails from "../hooks/useGetPodcastDetails";
import { useParams } from "react-router-dom";
import Loading from "../Loader";

interface EpisodeDetails {
  trackId: number;
  artworkUrl600: string;
  trackName: string;
  collectionName: string;
  kind: string;
  description: string;
  episodeUrl: string;
}

const EpisodeDetails: React.FC = () => {
  const { podcastInfo, error, isLoading } = useGetPodcastDetails();
  const episodeId = useParams().episodeId;
  const audioRef = useRef<HTMLAudioElement>(null);

  if (isLoading) return <Loading />;
  if (error) return <div>Error...</div>;

  const {
    artworkUrl600,
    trackName,
    collectionName,
    kind,
    description,
    episodeUrl,
  }: EpisodeDetails = podcastInfo.trackInfo.filter(
    (track) => String(track.trackId) === episodeId
  )[0];

  const handleResetPlay = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  };
  return (
    <div className="flex flex-col songs-list w-4/6 my-5 mx-20 card-custom">
      <div className="relative  p-8 w-player flex flex-col rounded-xl shadow-player-light bg-player-light-background border border-player-light-border dark:shadow-player-dark dark:bg-player-dark-background dark:border-player-dark-border dark:backdrop-blur-xl">
        <div className="px-10 pt-10 pb-4 flex items-center z-50 mb-5">
          <img
            data-amplitude-song-info="cover_art_url"
            className="w-24 h-24 rounded-md mr-6 border border-bg-player-light-background dark:border-cover-dark-border"
            src={artworkUrl600}
          />
          <div className="flex flex-col">
            <span
              data-amplitude-song-info="name"
              className="font-sans text-lg font-medium leading-7 text-slate-900 dark:text-white"
            >
              {trackName}
            </span>
            <span
              data-amplitude-song-info="artist"
              className="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
            >
              {collectionName}
            </span>
            <span
              data-amplitude-song-info="album"
              className="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
            >
              {kind}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col px-16 pb-6 z-50 h-24 overflow-y-auto scroll-smooth mb-5">
          {description}
        </div>
        <div className="h-control-panel p-5 rounded-b-xl bg-control-panel-light-background border-t border-gray-200 flex items-center justify-center gap-5 z-50 dark:bg-control-panel-dark-background dark:border-gray-900">
          <audio
            ref={audioRef}
            id="podcastID"
            preload="metadata"
            controls
            className="w-full"
          >
            <source src={episodeUrl} type="audio/mp3" />
          </audio>
          <div className="cursor-pointer amplitude-repeat-song">
            <button onClick={handleResetPlay}>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7071 15.7071C18.0976 15.3166 18.0976 14.6834 17.7071 14.2929C17.3166 13.9024 16.6834 13.9024 16.2929 14.2929L17.7071 15.7071ZM13 19L12.2929 18.2929C11.9024 18.6834 11.9024 19.3166 12.2929 19.7071L13 19ZM16.2929 23.7071C16.6834 24.0976 17.3166 24.0976 17.7071 23.7071C18.0976 23.3166 18.0976 22.6834 17.7071 22.2929L16.2929 23.7071ZM19.9359 18.7035L19.8503 17.7072L19.9359 18.7035ZM8.95082 19.9005C9.50243 19.9277 9.97163 19.5025 9.99879 18.9509C10.026 18.3993 9.6008 17.9301 9.04918 17.9029L8.95082 19.9005ZM6.06408 18.7035L5.97851 19.6998L6.06408 18.7035ZM1.07501 13.4958L0.075929 13.5387L1.07501 13.4958ZM1.07501 6.50423L0.0759292 6.46127L1.07501 6.50423ZM6.06409 1.29649L6.14965 2.29282L6.06409 1.29649ZM19.9359 1.29649L19.8503 2.29283L19.9359 1.29649ZM24.925 6.50423L23.9259 6.54718L24.925 6.50423ZM24.925 13.4958L25.9241 13.5387V13.5387L24.925 13.4958ZM16.2929 14.2929L12.2929 18.2929L13.7071 19.7071L17.7071 15.7071L16.2929 14.2929ZM12.2929 19.7071L16.2929 23.7071L17.7071 22.2929L13.7071 18.2929L12.2929 19.7071ZM19.8503 17.7072C17.5929 17.901 15.3081 18 13 18V20C15.3653 20 17.7072 19.8986 20.0215 19.6998L19.8503 17.7072ZM9.04918 17.9029C8.07792 17.8551 7.1113 17.7898 6.14964 17.7072L5.97851 19.6998C6.96438 19.7845 7.95525 19.8515 8.95082 19.9005L9.04918 17.9029ZM2.07408 13.4528C2.02486 12.3081 2 11.157 2 10H0C0 11.1856 0.0254804 12.3654 0.075929 13.5387L2.07408 13.4528ZM2 10C2 8.84302 2.02486 7.69192 2.07408 6.54718L0.0759292 6.46127C0.0254806 7.63461 0 8.81436 0 10H2ZM6.14965 2.29282C8.4071 2.09896 10.6919 2 13 2V0C10.6347 0 8.29281 0.101411 5.97853 0.30016L6.14965 2.29282ZM13 2C15.3081 2 17.5929 2.09896 19.8503 2.29283L20.0215 0.30016C17.7072 0.101411 15.3653 0 13 0V2ZM23.9259 6.54718C23.9751 7.69192 24 8.84302 24 10H26C26 8.81436 25.9745 7.63461 25.9241 6.46127L23.9259 6.54718ZM24 10C24 11.157 23.9751 12.3081 23.9259 13.4528L25.9241 13.5387C25.9745 12.3654 26 11.1856 26 10H24ZM19.8503 2.29283C22.092 2.48534 23.8293 4.29889 23.9259 6.54718L25.9241 6.46127C25.7842 3.20897 23.2653 0.578736 20.0215 0.30016L19.8503 2.29283ZM6.14964 17.7072C3.90797 17.5147 2.17075 15.7011 2.07408 13.4528L0.075929 13.5387C0.215764 16.791 2.7347 19.4213 5.97851 19.6998L6.14964 17.7072ZM2.07408 6.54718C2.17075 4.29889 3.90798 2.48534 6.14965 2.29282L5.97853 0.30016C2.73471 0.578735 0.215764 3.20897 0.0759292 6.46127L2.07408 6.54718ZM20.0215 19.6998C23.2653 19.4213 25.7842 16.791 25.9241 13.5387L23.9259 13.4528C23.8292 15.7011 22.092 17.5147 19.8503 17.7072L20.0215 19.6998Z"
                  fill="#94A3B8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
