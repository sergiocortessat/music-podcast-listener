import { useParams } from 'react-router-dom';
import {getPodcastDetails} from '../services/api';
import useSWR from 'swr';
import { getFromLocalStorage, saveToLocalStorage } from '../helpers/storage';

const useGetPodcastDetails = () => {
    // I need to get the id from the url
    const podcastId = useParams().podcastId;
    const initialData = getFromLocalStorage(`podcastDetails-${podcastId}`);
    const shouldFetch = !initialData;
    const fetcher = shouldFetch ? getPodcastDetails : null;
    const { data: podcastInfo, error, isLoading } = useSWR(podcastId, fetcher, { fallbackData: initialData })
    if (podcastInfo && shouldFetch) {
        saveToLocalStorage(`podcastDetails-${podcastId}`, podcastInfo);
    }
    // const { data: podcastDetails, error, isLoading } = useSWR('https://itunes.apple.com/us/podcast/id1474561710/episodes', getPodcastTrackFeed)
    // console.log('podcastDetails', podcastDetails);
    // console.log('error', error);
    // console.log('isLoading', isLoading);
    // console.log('episodeId', podcastId);
    console.log('episodeDetails', initialData);
    return ({podcastInfo, error, isLoading, podcastId})
}

export default useGetPodcastDetails;