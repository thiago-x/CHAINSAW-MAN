import './Sinopse.css'
import ImgSinopse from "../00 - img/sinopse.jpg"
import Logo from "../00 - img/logo-grande.png"

function Sinopse(){
    return(
        <section className='Sinopse'>
            <h1>Sinopse</h1>


            <div className='Grid-sinopse'>
                <div className='Img'>
                    <img src={ImgSinopse} alt="" />
                    <p>Denji - protagonista</p>
                </div>

                <div className='Text'>
                    <p>Denji é um jovem deprimido que está tentando pagar a dívida de seu falecido pai com a yakuza vendendo vários de seus órgãos e trabalhando como caçador de demônios. Denji também possui um demônio parecido com um cachorro chamado Pochita, que se assemelha a uma motosserra e auxilia Denji em seu trabalho.</p>
                </div>
            </div>
        </section>
    )
}

export default Sinopse