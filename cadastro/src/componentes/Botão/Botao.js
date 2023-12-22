import './Botao.css'

function Botao(props) {
    return (
        <button className='button'>{props.texto}</button>
    )

}

export default Botao