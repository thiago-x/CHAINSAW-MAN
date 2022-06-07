import './Anime.css'
import BannerAnime from "../00 - img/banner-anime.png"
import AnimeImg from "../00 - img/anime-img.png"

function Anime(){
    return(
        <section className='Anime'>
            <img src={BannerAnime} alt="" />

            <div className='Grid-anime'>
                <h1 className='One'>Chainsaw Man | Anime Ganha Previsão Para Data De Estreia</h1>

                <p className='One'>Diante De Alguns Rumores, O Anime Está Previsto Para A Temporada De Outono, Que Seria Para Nós No Brasil, Nos Meados De Outubro A Dezembro.</p>

                <p className='One'>Chainsaw Man, Como Um Dos Animes Mais Aguardados Para 2022, Será A Adaptação Do Mangá De Fujimoto Tatsuki, Contendo Um Conteúdo Mais Violento E Adulto Que Promete Trazer Fãs E Um Público Mais Maduro Pelo Mundo.</p>

                <div className='One-img'></div>

                <p className='Two'>De Acordo Com A Página Sugoi LITE, No Twitter, Afirmam Que Chainsaw Man Chegará Eventualmente Na Temporada De Outono De 2022, Sem Uma Data Prevista. Ano Passado, Em Dezembro, Durante O Jump Festa, O Anime Também Foi Confirmado Por Meio De Um Teaser:</p>

                <iframe className='Two' width="100%" height="800px" src="https://www.youtube.com/embed/Cb9F59uvA_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
        </section>
    )
}

export default Anime