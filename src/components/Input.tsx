import { useState, type KeyboardEvent } from "react";
import useDDD from "../hooks/useDDD";

export default function Input() {
  const [ddd, setDdd] = useState<string>("");
  const { proccessRequest, loading, clearData } = useDDD();

  function handleSearch() {
    const dddNumber = Number(ddd);
    
    // Se estiver vazio, não faz nada
    if (!ddd) return;
    
    // Validação: 11 a 99
    if (dddNumber < 11 || dddNumber > 99) {
      alert("DDD inválido! Digite um número entre 11 e 99.");
      setDdd("");        // ← LIMPA O INPUT
      clearData();       // ← LIMPA O OUTPUT (mostra histórico)
      return;
    }
    
    // Só chega aqui se o DDD for válido
    proccessRequest(dddNumber);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
    
    if (e.key === "Escape") {
      setDdd("");
      clearData();
      (e.target as HTMLInputElement).blur();
    }
  }

  return (
    <div id="input-container">
      <input
        id="entrada"
        type="number"
        value={ddd}
        min={11}
        max={99}
        onKeyDown={handleKeyDown}
        onChange={(e) => setDdd(e.target.value)}
        placeholder="Digite o DDD (ESC limpa)"
        disabled={loading}
      />
      <button
        className="btn-buscar"
        onClick={handleSearch}
        disabled={loading || !ddd}
      >
        {loading ? (
          <>
            <span className="spinner"></span>
            Buscando...
          </>
        ) : (
          "🔍 Buscar"
        )}
      </button>
    </div>
  );
}