import { createContext } from "react";
import type { DDDCities } from "../types/DDD";

export type DDDContextValue ={
    objeto: DDDCities | undefined;
    proccessRequest: (ddd:number) => void;
}

export const DDDContext = createContext<DDDContextValue|undefined>(undefined);