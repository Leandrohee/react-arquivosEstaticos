import './cardFotoMaior.css'
import Foto from '../foto/foto.js'

export default function CardFotoMaior({link}){
    return(
        <div className='card-foto-maior'>
            {/* <img src={link}></img> */}
            <Foto link={link}/>
            <h4>Nome da foto</h4>
            <div className='div-legenda-card'>
                <div>
                    <p>Fonte/fotógrafo/satélite</p>
                </div>
                <div>
                    <img src="\assets\favorite_outline.svg"></img>
                    <img src="\assets\open_in_full.svg"></img>
                </div>
            </div>   
        </div>

    )
}