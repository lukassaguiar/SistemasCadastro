import './CampoTexto.css'

function CampoTexto(props) {   
    
    /* let [valorInicial, setValorInicial] = useState('') não pode declarar aqui*/
    
   const aoDigitar = (event) => {
        props.setValorInicial (event.target.value)
   }    
    return (
        <div className="CampoTexto">
            <label>{props.label}</label>
            <input 
            onChange={aoDigitar}
            placeholder={props.placeHolder}
            value={props.valorInicial}/>            
        </div>
    )
}

export default CampoTexto