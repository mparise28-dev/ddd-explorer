import useDDD from "../hooks/useDDD";

export default function Output() {
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

  // VAZIO (mostra histórico se tiver)
  if (!objeto) {
    return (
      <div id="saida">
        <div className="empty-state">
          <span className="empty-icon">📞</span>
          <h3>Digite um DDD para começar</h3>
          <p>Exemplos: 11, 21, 31, 41, 51</p>

          {/* 🆕 MOSTRA HISTÓRICO SE TIVER */}
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

  // COM DADOS
  return (
    <div id="saida">
      <div className="output-header">
        <h2 id="titulo">📍 {objeto.state}</h2>
        <span className="badge-contagem">
          {objeto.cities.length} cidades
        </span>
      </div>
      <ol id="lista">
        {objeto.cities.map((cidade) => (
          <li key={cidade}>{cidade}</li>
        ))}
      </ol>
    </div>
  );
}