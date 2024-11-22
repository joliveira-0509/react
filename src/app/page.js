/* import Image from "next/image"; */
import styles from "./page.module.css";
import Image from "next/image";
import header from "@/components/Header";

export default function Home() {
  const nome = 'João Vitor Silva de Oliveira'
  return (
    <div>
      <header />
      <h1>
        Página Principal
      </h1>
      <p>Paragráfo da página principal</p>
      <p>Autor {nome}</p>
      <Image 
      className={styles.imagem}
      src={"/imagens/OIP.jpg"} 
      alt={"imagem"} 
      width={850} 
      height={500} 
      />
    </div>
  );
}
