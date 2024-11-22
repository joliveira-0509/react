import styles from "./sobre.module.css"

export default function sobre() {
    return(
        <main>
            <h1>Sobre</h1>
            <p className={styles.paragrafo}>Minha segunda página</p>
            <p id={styles.unico}>Paragráfo com id carai</p>
        </main>
    )
}

