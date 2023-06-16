import './sideBarEsquerda.css'
import LinkNav from '../linkNav/linkNav.js'

export default function SideBarEsquerda(){

    const linksNav = [{
        titulo: "Inicio",
        link: "\\assets\\Rectangle 36.svg",
        colorIcone: "#7B78E5",
        colorFonte: "#7B78E5",
    },
    {
        titulo: "Mais vistas",
        link: "\\assets\\Rectangle 37.svg",
        colorIcone: "#04244F",
        colorFonte: "#D9D9D9",
    },
    {
        titulo: "Mais curtidas",
        link: "\\assets\\Rectangle 38.svg",
        colorIcone: "#04244F",
        colorFonte: "#D9D9D9",
    },
    {
        titulo: "Novas",
        link: "\\assets\\Rectangle 39.svg",
        colorIcone: "#04244F",
        colorFonte: "#D9D9D9",
    },
    {
        titulo: "Surpreenda-me",
        link: "\\assets\\Rectangle 40.svg",
        colorIcone: "#04244F",
        colorFonte: "#D9D9D9",
    }]


    return(
        <nav className='sideBar-esquerda'>
            {linksNav.map(e=>
            <LinkNav 
                key={e.link} 
                titulo={e.titulo} 
                src={e.link} 
                colorIcone={e.colorIcone}
                colorFonte={e.colorFonte}
            />
            )}
        </nav>
    )
}