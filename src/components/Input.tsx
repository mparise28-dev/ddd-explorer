import { useState, type KeyboardEvent } from "react";
import useDDD from "../hooks/useDDD";

export default function Input() {
  const [ddd, setDdd] = useState<string>("");
  const { proccessRequest, loading } = useDDD();

  function handleSearch() {
    const dddNumber = Number(ddd);
    
    // VALIDAÇÃO ANTES DE CHAMAR A API
    if (!ddd) {
      return; // campo vazio
    }
    
    if (dddNumber < 11 || dddNumber > 99) {
      alert("DDD inválido! Digite um número entre 11 e 99.");
      return;
    }
    
    proccessRequest(dddNumber);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
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
        placeholder="Digite o DDD"
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