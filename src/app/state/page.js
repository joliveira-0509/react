'use client'
import { useState } from "react"

export default function State() {
    const [conteudo, setConteudo] = useState('Bom dia');
    const [name, setName] = useState('');
    const [showdiv, setShowdiv] = useState(true)
    const contpara = () => {
        setConteudo('Boa Tarde!');
        console.log('conteudo: ' + conteudo);
    };

    function continput(evento) {
        console.log(evento.target.value)
        setName(evento.target.value)
    };

    return (
        <div>
            <p>
                {conteudo}
            </p>
            <button onClick={contpara}>Mudar</button>
            <button onClick={() => { setShowdiv(!showdiv) }}>{showdiv ? "Esconder" : "Mostrar"}</button>
            {showdiv && (
                <div>
                    <p>Nome:{name}</p>
                    <input type="text" onChange={continput} />
                </div>
            )
            }

        </div>
    )
};