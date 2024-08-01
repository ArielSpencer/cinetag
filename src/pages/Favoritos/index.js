import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card id="1" titulo="Gato Bonifácio" capa="https://i.pinimg.com/564x/f2/66/3d/f2663dbf252d2a5cfa8995cec762f3cf.jpg" />
      </section>
    </>
  )
}

export default Favoritos;