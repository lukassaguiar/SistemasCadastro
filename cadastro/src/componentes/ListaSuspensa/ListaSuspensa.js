import './ListaSuspensa.css'

function ListaSuspensa(props) {
   let aoDigitar = (event) => {
    props.setValorInicial (event.target.value)
    }
    return (
        <div className='Lista'>
            <label>{props.label}</label>
            <select value = {props.valorInicial} onChange = {aoDigitar}>
                {props.areas.map(area => <option key={area}>{area}</option>)}

            </select>

        </div>
    )
}

export default ListaSuspensa