import './sideBar.css'
import LinkNav from '../linkNav/linkNav.js'

export default function SideBar(){

    const linksNav = [{
        titulo: "Inicio",
        link: "\\assets\\Rectangle 36.svg",
        color: "#7B78E5",
    },
    {
        titulo: "Mais vistas",
        link: "\\assets\\Rectangle 37.svg",
    },
    {
        titulo: "Mais curtidas",
        link: "\\assets\\Rectangle 38.svg",
    },
    {
        titulo: "Novas",
        link: "\\assets\\Rectangle 39.svg",
    },
    {
        titulo: "Surpreenda-me",
        link: "\\assets\\Rectangle 40.svg",
    }]


    return(
        <nav>
            {linksNav.map(e=>
            <LinkNav key={e.link} titulo={e.titulo} src={e.link} color={e.color}/>
            )}
        </nav>
    )
}