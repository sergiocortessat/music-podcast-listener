// routes.tsx
import MainView from '../pages/MainView';
import PodcastDetail from '../pages/PodcastDetail';
import EpisodeDetail from '../components/EpisodeDetail';
import TrackList from '../components/TrackList';
import { createBrowserRouter } from 'react-router-dom';

export const customRoutes = createBrowserRouter([
    { path: '/', element: <MainView /> },
    {
      path: '/podcast/:podcastId',
      element: <PodcastDetail />,
      children: [
        { path: 'episode/:episodeId', element: <EpisodeDetail /> },
        { path: '', element: <TrackList />}  // <-- Default child route
      ]
    }
  ]);