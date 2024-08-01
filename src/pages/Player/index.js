import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const parametros = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const resposta = await fetch(`https://my-json-server.typicode.com/ArielSpencer/api-cinetag/videos?id=${parametros.id}`);
        const dados = await resposta.json();
        if (dados.length === 0) {
          setVideo(null);
        } else {
          setVideo(dados[0]);
        }
      } catch (erro) {
        setVideo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [parametros.id]);

  if (loading) {
    return <h2 className={styles.loading}>Carregando...</h2>;
  }

  if (video === null) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        >
        </iframe>
      </section>
    </>
  )
}

export default Player;