import { create } from 'zustand'


export const fitnesStore = create((set) => ({

second: 0,
isRunning: false,

startTime: () => {
  console.log('ana bditt wii')
  set({isRunning: true})

  const interval = setInterval(() => {
    set((state: any) => ({
      second:  state.second + 1,
      
    }))
    console.log(interval)
  }, 1000)

},

}));



