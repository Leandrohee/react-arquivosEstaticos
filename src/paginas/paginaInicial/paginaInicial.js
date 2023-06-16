import BannerMaior from '../../componentes/bannerMaior/bannerMaior'
import Cabecalho from '../../componentes/cabecalho/cabecalho'
import ConteudoMeio from '../../componentes/conteudoMeio/conteudoMeio'
import SideBarDireita from '../../componentes/sideBarDireita/sideBarDireita'
import SideBarEsquerda from '../../componentes/sideBarEsquerda/sideBarEsquerda.js'
import './PaginaInicial.css'

export default function PaginaInicial(){
    return(
        <div className='main-div'>
            <Cabecalho></Cabecalho>
            <section>
                <SideBarEsquerda></SideBarEsquerda>
                <BannerMaior></BannerMaior>        
            </section>
            <section>
                <ConteudoMeio></ConteudoMeio>
                <SideBarDireita/> 
            </section>  
        </div>

    )
}