import React from 'react';
import useGetPodcastDetails from '../hooks/useGetPodcastDetails';
import { useParams } from 'react-router-dom';

const EpisodeDetails: React.FC = () => {
    const { podcastInfo, error, isLoading } = useGetPodcastDetails();
    if (isLoading) return <div>Loading...</div>;
    const episodeId = useParams().episodeId;

    // function to filter on podcastInfo.trackInfo and get the episode details based on episodeId
    const episodeDetails = podcastInfo.trackInfo.filter((track: any) => String(track.trackId) === episodeId)[0];
    return (
        <div>
            {/* Contenido de la vista principal aquí... */}
            <h2>title</h2>
            <p>{episodeDetails.trackName}</p>
            <h2>description</h2>
            <p>{episodeDetails.shortDescription}</p>
            <h2>audio</h2>
            <audio src={episodeDetails.episodeUrl} controls/>
        </div>
    );
}

export default EpisodeDetails;
