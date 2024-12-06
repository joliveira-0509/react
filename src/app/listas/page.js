import Header from "@/components/Header";

export default function listas() {
    const racas = ['vira-lata', 'pit-bul', 'Boder-Collie'];

    const pokemons = [
        { id:1, nome: 'Bulbasaur', tipo: 'Grama/Venenoso' },
        { id:2, nome: 'Charmander', tipo: 'Fogo' },
        { id:3, nome: 'Squirtle', tipo: 'Água' },
        { id:4, nome: 'Pikachu', tipo: 'Elétrico' },
        { id:5, nome: 'Jigglypuff', tipo: 'Normal/Fada' }
    ];

    return (

        <div style={{ display: 'flex', flexDirection: 'colum', alignItems: 'center', margin: '50px' }}>

            <h2>
                Lista Comum
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {racas.map((nome, i) => (
                    <li color="white" key={i}>{nome}</li>
                ))}
            </ul>
            <h2>Lista de objetos</h2>
            <ul>
                {pokemons.map(listas => (
                        <div>
                            {listas.id} : {listas.nome}
                        </div>
                    ))
                }
            </ul>


        </div>

    );
};




