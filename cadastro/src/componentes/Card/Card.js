import './Card.css'

function Card(props) {
    return (
        <div className='card'>
            <div className='card-cabecalho'>
             <img src= {props.imagem} alt= {props.alt}/>
            </div>
            
            <div className='card-rodape'>  
                <h3>{props.nome}</h3>
                <h5>{props.especialidade}</h5>
            </div>

        </div>
    )
}

export default Card