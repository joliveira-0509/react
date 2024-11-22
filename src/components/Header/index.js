"use client"
import Link from "next/link"
import style from "./header.module.css"
import { useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header className={style.header}>
            <button className={style.botao} onClick={()=>setShowMenu(!showMenu)}>Clique</button>
            {
                showMenu &&
                <nav>
                    <ul className={style.li}>
                        <li >
                            <Link href="/sobre" className={style.link}>Sobre</Link>
                        </li>
                        <li>
                            <Link href="/contato" className={style.link}>Contato</Link>
                        </li>
                        <li>
                            <Link href="/state" className={style.link}>Bom dia</Link>
                        </li>
                        <li>
                            <Link href="/" className={style.link}>Inicial</Link>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    )
}

