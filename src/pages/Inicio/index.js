import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Guarde seus vídeos e filmes com facilidade aqui!</h1>
      </Titulo>
      <Card id="1" titulo="Gato Bonifácio" capa="https://i.pinimg.com/564x/f2/66/3d/f2663dbf252d2a5cfa8995cec762f3cf.jpg" />
      <Rodape />
    </>
  )
}

export default Inicio;