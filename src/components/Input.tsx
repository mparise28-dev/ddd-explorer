import { useState, type KeyboardEvent } from "react";
import useDDD from "../hooks/useDDD";

export default function Input() {
  const [ddd, setDdd] = useState(12);
  const {proccessRequest} = useDDD();

  async function handleKeyDown(e:KeyboardEvent<HTMLInputElement>){
    if( e.key === "Enter" ){
      proccessRequest(ddd);
    }
  }

  return (
    <input
      id="entrada"
      type="number"
      value={ddd}
      min={11}
      max={99}
      onKeyDown={handleKeyDown}
      onChange={(e) => setDdd(Number(e.target.value))}
      placeholder="Digite o DDD"
    />
  );
}
