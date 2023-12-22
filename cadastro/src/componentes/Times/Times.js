import Card from '../Card/Card'
import './Times.css' 

function Times (props) {
    return (
        
        (props.professores.length>0)? //se o array professores for maior q 0/então faça/se não/.. //operador ternário JS - 
        <section className='time' style={{backgroundColor:props.corClara}}>
        <h3 style={{borderColor:props.corEscura}}>{props.nomeTime}</h3>
        <div className='flex-container'>
        {props.professores.map(professor => /* //props.tanto faz o nome (genérico), vai receber um map, um array, p cada professor ou pra cada item, ele vai criar um elemento card */
        <Card
            nome={professor.nomeInicial}
            especialidade={professor.especialidadeInicial}
            imagem={professor.imagemInicial}
            alt={professor.nomeInicial}
        />)} 
        </div>
        </section>
    :("")//operação do props.professores.length
    )
}

export default Times