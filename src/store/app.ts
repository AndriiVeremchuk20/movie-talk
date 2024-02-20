import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface AppState {
  showStartPage: boolean;
}

export const useAppStore = create<AppState>(
  persist(
    set => ({
      showStartPage: true,
    }),
    {
      name: 'app-store',
      storage: () => AsyncStorage,
    },
  ),
);
