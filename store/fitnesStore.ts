import { create } from 'zustand'


export const fitnesStore = create((set) => ({
  steps: 0,
  goalSteps: 10000,

  setSteps: (steps: any) => {
    set({steps})
  }
}))



