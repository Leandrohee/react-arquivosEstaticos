import './linkNav.css'

export default function LinkNav(props){
    console.log(props.src)
    return(
        <div className='div-nav'>
            <img 
                style={{backgroundColor: props.color, borderRadius: "7px",}} 
                className="icones-links" 
                src={props.src}
            />
            <a 
                style={{color: props.color}}>
                {props.titulo}
            </a>    
        </div>
    )
}