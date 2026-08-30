import { useContext } from "react";
import { DDDContext } from "../contexts/DDDContext";


export default function useDDD(){
    const context = useContext(DDDContext);

    if( !context ){
        throw new Error("useDDD deve ser usado dentro de um DDDProvider");
    }

    return context;
}