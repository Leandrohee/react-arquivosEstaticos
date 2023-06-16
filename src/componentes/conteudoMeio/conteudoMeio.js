import CardFotoMaior from '../cardFotoMaior/cardFotoMaior'
import TagBusca from '../tagBusca/tagBusca'
import './conteudoMeio.css'

export default function ConteudoMeio(){

    const tagsBusca=[
        "Estrelas",
        "Galáxias",
        "Lua",
        "Planetas",
    ]

    const cardsMaiores =[
        "\\assets\\Rectangle 6.svg",
        "\\assets\\Rectangle 6 (1).svg",
        "\\assets\\Rectangle 6 (2).svg",
        "\\assets\\Rectangle 6 (3).svg",
        "\\assets\\Rectangle 6 (4).svg",
        "\\assets\\Rectangle 6 (5).svg",
        "\\assets\\Rectangle 6 (6).svg",
        "\\assets\\Rectangle 6 (7).svg",
        "\\assets\\Rectangle 6 (8).svg",
        "\\assets\\Rectangle 6.jpg"
    ]

    return(
        <div className='conteudo-meio'>
            <h3>Navegue pela galeria</h3>
            <div className='div-conteudo-meio'>
                <spam>Busque por tags:</spam>
                <ul>
                    {tagsBusca.map(e =>{
                        return(<TagBusca nome={e}/>)
                    })}
                </ul>
            </div>
            <div className='div-agrupaCards'>
                {cardsMaiores.map((e)=>{
                    return(<CardFotoMaior link={e}/>)
                })}
            </div>
        </div>
    )
}