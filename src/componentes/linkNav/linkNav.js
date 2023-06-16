import './linkNav.css'

export default function LinkNav(props){
    console.log(props.colorFonte)
    return(
        <div className='div-nav'>
            <img 
                style={{backgroundColor: props.colorIcone, borderRadius: "7px",}} 
                className="icones-links" 
                src={props.src}
            />
            <a 
                style={{color: props.colorFonte}}>
                {props.titulo}
            </a>    
        </div>
    )
}