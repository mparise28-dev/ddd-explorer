import { useState } from "react"; // 🆕 Importar useState
import useDDD from "../hooks/useDDD";
import Favoritos from "./Favoritos";

export default function Output() {
  const [filtro, setFiltro] = useState<string>(""); // 🆕 Estado do filtro
  const { objeto, loading, error, dddSelecionado, historico, proccessRequest } =
    useDDD();

  // LOADING
  if (loading) {
    return (
      <div id="saida">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Buscando cidades do DDD {dddSelecionado}...</p>
        </div>
      </div>
    );
  }

  // ERRO
  if (error) {
    return (
      <div id="saida">
        <div className="error-state">
          <span className="error-icon">❌</span>
          <p>{error}</p>
          <p className="error-hint">Dicas: 11, 21, 31, 41, 51, 61, 71, 81</p>
        </div>
      </div>
    );
  }

  // VAZIO
  if (!objeto) {
    return (
      <div id="saida">
        <div className="empty-state">
          <span className="empty-icon">📞</span>
          <h3>Digite um DDD para começar</h3>
          <p>Exemplos: 11, 21, 31, 41, 51</p>

          {historico.length > 0 && (
            <div className="historico-container">
              <p className="historico-titulo">⏱️ Últimas buscas:</p>
              <div className="historico-lista">
                {historico.map((ddd) => (
                  <button
                    key={ddd}
                    className="historico-item"
                    onClick={() => proccessRequest(ddd)}
                  >
                    📞 {ddd}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 🆕 FILTRAR CIDADES
  const cidadesFiltradas = objeto.cities.filter((cidade) =>
    cidade.toLowerCase().includes(filtro.toLowerCase()),
  );

  // COM DADOS
  return (
    <div id="saida">
      <div className="output-header">
        <div className="output-header-left">
          <h2 id="titulo">📍 {objeto.state}</h2>
          <Favoritos />
        </div>
        <span className="badge-contagem">{objeto.cities.length} cidades</span>
      </div>

      {/* 🆕 CAMPO DE FILTRO */}
      <div className="filtro-container">
        <input
          type="text"
          className="filtro-input"
          placeholder="🔍 Filtrar cidades..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        {filtro && (
          <button
            className="filtro-limpar"
            onClick={() => setFiltro("")}
            title="Limpar filtro"
          >
            ✕
          </button>
        )}
      </div>

      {/* 🆕 CONTAGEM DO FILTRO */}
      {filtro && (
        <p className="filtro-contagem">
          Mostrando {cidadesFiltradas.length} de {objeto.cities.length} cidades
        </p>
      )}

      <ol id="lista">
        {cidadesFiltradas.length > 0 ? (
          cidadesFiltradas.map((cidade) => <li key={cidade}>{cidade}</li>)
        ) : (
          <li className="filtro-vazio">
            Nenhuma cidade encontrada para "{filtro}"
          </li>
        )}
      </ol>
    </div>
  );
}
