import type { DDDCities } from "../types/DDD";

export async function getCities(ddd:number): Promise<DDDCities> {
  const url = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;
  const resposta = await fetch(url);
  return resposta.json();
}