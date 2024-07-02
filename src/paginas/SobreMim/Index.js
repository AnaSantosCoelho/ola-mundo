import styles from './SobreMim.module.css';

import PostModelo from "componentes/PostModelo/Index";
import fotoCapa from "assets/SobreMim_capa.png";
import fotoSobreMim from "assets/sobreMim_foto.png";


export default function sobreMim(){
    return (
        <PostModelo 
          fotoCapa={fotoCapa}
          titulo= "Sobre mim">

          <h3 className={styles.subtitulo}>
            Olá, eu sou Ana Luiza!
          </h3>

          <img
            src={fotoSobreMim}
            alt='Foto da Ana Luiza'
            className={styles.fotoSobreMim}
          />
         
          <p className={styles.paragrafo}> 
            Minha trajetória na programação teve início na Escola Estadual Técnico Industrial Professor Fontes, 
            onde cursei o ensino médio integrado ao curso de Informática. Durante esse período, aprendi lógica de programação e 
            obtive conhecimento básico em várias linguagens, como PHP, Python e Java. Foi nessa fase que desenvolvi uma paixão por 
            programação, embora ainda não soubesse que isso se tornaria um caminho de longo prazo.
          </p>
          <p className={styles.paragrafo}>
             No ensino superior, optei por Engenharia da Computação no Centro Universitário UNA, buscando uma formação mais robusta na 
             área. Para aprofundar meus conhecimentos em programação, comecei a estudar de forma autodidata na plataforma Alura, 
             o que tem sido uma jornada contínua de aprendizado e descoberta.
          </p>
          <p className={styles.paragrafo}>
            Estou entusiasmada e ansiosa para iniciar um estágio na área de tecnologia, onde poderei aplicar meus conhecimentos e 
            continuar a crescer profissionalmente.
          </p>
        </PostModelo>
    )
}