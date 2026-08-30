import useDDD from "../hooks/useDDD";

export default function Favoritos() {
  const { objeto, favoritos, toggleFavorito } = useDDD();

  // Se não tiver dados do DDD, não mostra nada
  if (!objeto || !objeto.ddd) return null;

  const dddAtual = objeto.ddd;
  const isFavorito = favoritos.includes(dddAtual);

  return (
    <div className="favoritos-container">
      <button
        className={`favorito-btn ${isFavorito ? "favorito-ativo" : ""}`}
        onClick={() => toggleFavorito(dddAtual)}
        title={isFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        {isFavorito ? "⭐" : "☆"}
      </button>
      <span className="favorito-label">
        {isFavorito ? "Favorito" : "Favoritar"}
      </span>
    </div>
  );
}