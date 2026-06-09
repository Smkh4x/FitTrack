import { create } from 'zustand'

type FitnesState = {
  steps: number;
  km: number;
  kcal: number;

  updateStats:(steps: number) => void
  
};


export const fitnesStore = create<FitnesState>((set) => ({
  steps: 0,
  km: 0,
  kcal: 0,

  updateStats: (steps) => set({
    steps,
    km: steps * 0.0008,
    kcal: steps * 0.04
  }),

}));



