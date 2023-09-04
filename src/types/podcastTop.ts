interface Attributes {
    "im:id": string;
    // Add other fields as necessary
  }

  interface APIError {
    message: string;
    // ... other fields
  }
  
  export interface PodcastEntry {
    id: {
      attributes: Attributes;
    };
    "im:image": Array<{ label: string }>;
    "im:name": { label: string };
    "im:artist": { label: string };
    // Add other fields as necessary
  }
  
  export interface PodcastTop {
      entry: PodcastEntry[];
  }
  
  export interface PodcastData {
    podcastTop: PodcastTop;
    error: APIError | null;
    isLoading: boolean;
  }
  