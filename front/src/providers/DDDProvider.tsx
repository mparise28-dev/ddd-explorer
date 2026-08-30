import { useState, type ReactNode } from "react";
import { DDDContext } from "../contexts/DDDContext";
import { getCities } from "../services/dddApi";
import type { DDDCities } from "../types/DDD";

type DDDProviderProps = {
  children: ReactNode;
};

export function DDDProvider({ children }: DDDProviderProps) {
  const [objeto, setObjeto] = useState<DDDCities | undefined>();

  async function proccessRequest(ddd: number) {
    const response = await getCities(ddd);
    setObjeto(response);
  }

  return (
    <DDDContext.Provider value={{ objeto, proccessRequest }}>
      {children}
    </DDDContext.Provider>
  );
}
