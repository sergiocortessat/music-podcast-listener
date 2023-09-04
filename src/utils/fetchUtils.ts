import {PodcastEntry} from '../types/podcastTop';

export function shouldFetchNewData(initialData: PodcastEntry, lastFetchedDetails: string): boolean {
    const oneDayInMilliseconds = 86400000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const currentTime = new Date().getTime();
    const lastFetchedTime = new Date(lastFetchedDetails).getTime();
  
    return !initialData || (currentTime - lastFetchedTime > oneDayInMilliseconds);
  }