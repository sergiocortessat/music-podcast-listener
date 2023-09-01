export interface Podcast {
    // Definir las propiedades de un Podcast aquí, por ejemplo:
    id: number;
    title: string;
    author: string;
    // ... otros campos
}

export interface PodcastState {
    podcasts: Podcast[];
    loading: boolean;
    error: string | null;
}

export interface EpisodeState {
    podcasts: Podcast[];
    loading: boolean;
    error: string | null;
}

// Hacer lo mismo para los episodios...
