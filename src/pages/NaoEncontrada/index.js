import { Link } from "react-router-dom";
import styles from "./NaoEncontrada.module.css";
import Banner from "components/Banner";

function NaoEncontrada() {
  return (
    <>
      <Banner imagem="nao-encontrada" />
      <section className={styles.container}>
        <div>
          <h2>Ops!</h2>
          <p>O conteúdo que você procura não foi encontrado.</p>
        </div>
        <Link
          to="/"
          className={styles.link}
        >
          Retornar a página inicial
        </Link>
      </section>
    </>
  )
}

export default NaoEncontrada;