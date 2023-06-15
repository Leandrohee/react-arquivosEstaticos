import InputPesquisa from '../inputPesquisa/inputPesquisa.js'
import Logo from '../logo/logo.js'
import './cabecalho.css'


export default function Cabecalho(){
    return(
       <header>
            <Logo/>
            <InputPesquisa/>
       </header>
    )
}