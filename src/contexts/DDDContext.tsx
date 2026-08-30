import { createContext } from "react";
import type { DDDCities } from "../types/DDD";

export type DDDContextValue = {
  objeto: DDDCities | undefined;
  proccessRequest: (ddd: number) => void;
  loading: boolean;
  error: string | null;
  dddSelecionado: number | null;
};

export const DDDContext = createContext<DDDContextValue | undefined>(undefined);