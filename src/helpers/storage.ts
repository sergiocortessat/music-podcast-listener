import { PodcastInfo } from "../types/podcastDetail";
import { PodcastTop } from "../types/podcastTop";

export const saveToLocalStorage = (
  key: string,
  value: PodcastInfo | PodcastTop | string
) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

interface UpdateConfig {
  shouldFetch: boolean;
  shouldDeleteOldEntries?: boolean;
  limit?: number;
  primaryStorageKey: string;
  lastFetchedKey: string;
  data: PodcastInfo | PodcastTop;
  currentTimestamp: string;
}

export const dynamicUpdateLocalStorage = (config: UpdateConfig) => {
  const {
    shouldFetch,
    shouldDeleteOldEntries,
    limit,
    primaryStorageKey,
    lastFetchedKey,
    data,
    currentTimestamp,
  } = config;

  if (!shouldFetch) {
    return;
  }

  // Handle the case where we don't need to delete old entries
  if (!shouldDeleteOldEntries) {
    saveToLocalStorage(primaryStorageKey, data);
    saveToLocalStorage(
      lastFetchedKey,
      currentTimestamp || new Date().toString()
    );
    return;
  }

  // Handle the case where we need to delete old entries
  const allData = getFromLocalStorage(primaryStorageKey) || {};

  if (Object.keys(allData).length > (limit || 30)) {
    const oldestId = Object.keys(allData).sort(
      (a, b) =>
        new Date(allData[a].timestamp).getTime() -
        new Date(allData[b].timestamp).getTime()
    )[0];
    delete allData[oldestId];
  }

  allData[lastFetchedKey] = {
    ...data,
    timestamp: currentTimestamp,
  };

  saveToLocalStorage(primaryStorageKey, allData);
  saveToLocalStorage(`lastFetchedDetails-${lastFetchedKey}`, currentTimestamp);
};
