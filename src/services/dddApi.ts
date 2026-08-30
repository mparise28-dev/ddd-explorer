import type { DDDCities } from "../types/DDD";

export async function getCities(ddd: number): Promise<DDDCities> {
  const url = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;
  
  try {
    const resposta = await fetch(url);
    
    // SE A RESPOSTA NÃO FOR OK (404, 500, etc)
    if (!resposta.ok) {
      if (resposta.status === 404) {
        throw new Error(`404: DDD ${ddd} não encontrado`);
      }
      throw new Error(`Erro ${resposta.status}: Falha ao buscar dados`);
    }
    
    const data = await resposta.json();
    
    // VERIFICA SE OS DADOS ESTÃO NO FORMATO ESPERADO
    if (!data.state || !data.cities) {
      throw new Error("Dados inválidos recebidos da API");
    }
    
    return data;
  } catch (error) {
    // REPASSA O ERRO PARA SER TRATADO NO PROVIDER
    throw error;
  }
}