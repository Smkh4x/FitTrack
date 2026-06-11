import { useRef } from "react";
import { Pedometer } from "expo-sensors";
import { fitnesStore } from "../store/fitnesStore";


export const usePedometer = () => {
    const setSteps = fitnesStore((state: any) => state.setSteps);
    const subscription = useRef<any>(null);
    

}
