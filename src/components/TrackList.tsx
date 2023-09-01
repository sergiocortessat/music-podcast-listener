import React from 'react';
import useGetPodcastDetails from '../hooks/useGetPodcastDetails';

const TrackList = () => {
    const { podcastInfo, error, isLoading, podcastId } = useGetPodcastDetails();
    if (isLoading) return <div>Loading...</div>;
    return (
        <ul className="list-reset">
            <h2 className="text-xl font-semibold">Episodes: {podcastInfo.podcastDetails.trackCount}</h2>
          {podcastInfo.trackInfo.map((track: any) => {
                const {trackId} = track;
                console.log('trackId', trackId);
                const podcastUrl = `/podcast/${podcastId}/episode/${trackId}`;
                return (
            <li className="flex justify-between px-6 py-4 flex-col">
                <a href={podcastUrl}>
              <p className="text-white">{track.trackName}</p>
              </a>
            </li>
                )
                })}
        </ul>
    )
}

export default TrackList;