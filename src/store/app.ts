import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface AppState {
  showStartPage: boolean;
  setShowStartPage: (show: boolean) => void;
}

export const useAppStore = create(
  persist<AppState>(
    set => ({
      showStartPage: true,
      setShowStartPage: (show: boolean) => set({showStartPage: show}),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
