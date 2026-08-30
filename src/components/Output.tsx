import useDDD from "../hooks/useDDD";

export default function Output() {
    const { objeto } = useDDD();

    return (
        <div id="saida">
            {objeto && (
                <>
                    <h2 id="titulo">{objeto.state}</h2>
                    <ol id="lista">
                        {objeto.cities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </>
            )}
        </div>
    );
}