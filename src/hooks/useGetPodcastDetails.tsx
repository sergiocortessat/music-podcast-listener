import { useParams } from 'react-router-dom';
import {getPodcastDetails} from '../services/api';
import useSWR from 'swr';
import { getFromLocalStorage, saveToLocalStorage } from '../helpers/storage';
import {UsePodcastDetailsHook} from '../types/podcastDetail'

const useGetPodcastDetails = (): UsePodcastDetailsHook => {
    const podcastId = useParams().podcastId;
    const lastFetched = getFromLocalStorage('lastFetched');
    const initialData = getFromLocalStorage(`podcastDetails-${podcastId}`);
    const shouldFetch = !initialData || (new Date().getTime() - new Date(lastFetched).getTime()) > 86400000;
    const fetcher = shouldFetch ? getPodcastDetails : null;
    const { data: podcastInfo, error, isLoading } = useSWR(podcastId, fetcher, { fallbackData: initialData })
    if (podcastInfo && shouldFetch) {
        saveToLocalStorage(`podcastDetails-${podcastId}`, podcastInfo);
    }
    console.log('episodeDetails', initialData);
    return ({podcastInfo, error, isLoading, podcastId})
}

export default useGetPodcastDetails;