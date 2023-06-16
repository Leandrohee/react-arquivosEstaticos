import './sideBarDireita.css'
import Foto from "../foto/foto.js"

export default function SideBarDireita(){

    const cardsMenores=[
        "\\assets\\Rectangle 6 (1).svg",
        "\\assets\\Rectangle 6 (2).svg",
        "\\assets\\Rectangle 6 (3).svg",
        "\\assets\\Rectangle 6 (4).svg",
        "\\assets\\Rectangle 6 (5).svg",
    ]

    return(
        <nav className='sideBar-direita'>
            <h5>Populares</h5>
            <div>
                {/* <Foto link="\assets\Rectangle 17.svg"/> */}
                {cardsMenores.map(e=>{
                    return (<Foto style={{height: "10vw"}} link={e}/>)
                })}
            </div>
            <a>Ver mais</a>      
        </nav>
    )
}