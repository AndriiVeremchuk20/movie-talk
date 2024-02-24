import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {Genre} from '../types/genre';

interface AppState {
  showStartPage: boolean;
  setShowStartPage: (show: boolean) => void;

  genre: Genre;
  setGenre: (genre: Genre) => void;
}

export const useAppStore = create(
  persist<AppState>(
    set => ({
      showStartPage: true,
      setShowStartPage: (show: boolean) => set({showStartPage: show}),

      genre: 'movie',
      setGenre: (genre: Genre) => set({genre}),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
