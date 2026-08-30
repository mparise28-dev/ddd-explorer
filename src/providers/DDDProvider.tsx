import { useState, type ReactNode } from "react";
import { DDDContext } from "../contexts/DDDContext";
import { getCities } from "../services/dddApi";
import type { DDDCities } from "../types/DDD";

type DDDProviderProps = {
  children: ReactNode;
};

export function DDDProvider({ children }: DDDProviderProps) {
  const [objeto, setObjeto] = useState<DDDCities | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dddSelecionado, setDddSelecionado] = useState<number | null>(null);

  const [historico, setHistorico] = useState<number[]>(() => {
    const saved = localStorage.getItem('dddHistorico');
    return saved ? JSON.parse(saved) : [];
  });

  async function proccessRequest(ddd: number) {
    setLoading(true);
    setError(null);
    setDddSelecionado(ddd);

    try {
      const response = await getCities(ddd);

      if (!response || !response.cities || response.cities.length === 0) {
        setError(`DDD ${ddd} não encontrado. Tente outro código.`);
        setObjeto(undefined);
        return;
      }

      setObjeto(response);

      setHistorico((prev) => {
        const filtrado = prev.filter((item) => item !== ddd);
        const novoHistorico = [ddd, ...filtrado];
        const limitado = novoHistorico.slice(0, 10);
        localStorage.setItem('dddHistorico', JSON.stringify(limitado));
        return limitado;
      });
    } catch (err: any) {
      if (err.message?.includes('404')) {
        setError(`DDD ${ddd} não encontrado. Verifique o código e tente novamente.`);
      } else if (err.message?.includes('NetworkError')) {
        setError('Erro de rede. Verifique sua conexão com a internet.');
      } else {
        setError('Erro ao buscar os dados. Tente novamente mais tarde.');
      }
      setObjeto(undefined);
    } finally {
      setLoading(false);
    }
  }

  // 🆕 FUNÇÃO PARA LIMPAR OS DADOS
  function clearData() {
    setObjeto(undefined);
    setError(null);
    setDddSelecionado(null);
  }

  return (
    <DDDContext.Provider
      value={{
        objeto,
        proccessRequest,
        loading,
        error,
        dddSelecionado,
        historico,
        clearData, // 🆕
      }}
    >
      {children}
    </DDDContext.Provider>
  );
}