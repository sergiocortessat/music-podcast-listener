import axios from 'axios';

export const baseUrl = axios.create({
baseURL: "https://itunes.apple.com",
});

export const getTopPodcasts = async (url: string) => {
const response = await baseUrl.get(url);
  return response.data;
}

export const getPodcastDetails = async (podcastId: string): any => {
  console.log('podcastId', podcastId, 'podcastId');
  // const responsePodcastDetails = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}`)}`);
  // const response = await axios.get(`https://itunes.apple.com/lookup?id=1251196416&country=US&media=podcast&entity=podcastEpisode')}`);
  // const data = JSON.parse(response.data.contents).results[0].feedUrl;
  // const response2 = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://jbpod.libsyn.com/applepodcast')}`);
  // const response2 = await axios.get('https://jbpod.libsyn.com/applepodcast');
  const responseTrackInfo = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`)}`);
  // const data2 = JSON.parse(response2.data.contents).results[0].feedUrl;
  // const temp = await getPodcastTrackFeed(data);
  // console.log('response2', response2, 'response2');
  // console.log('data2', data2, 'data2');
  // console.log('temp', temp, 'temp');
  // console.log('response', JSON.parse(responsePodcastDetails.data.contents).results[0], 'response');
  return {
    podcastDetails: JSON.parse(responseTrackInfo.data.contents).results[0],
    trackInfo: JSON.parse(responseTrackInfo.data.contents).results.slice(1)
  };
}