import './Formulario.css'
import CampoTexto from '../CampoTexto/index.js'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.js'
import Botao from '../Botão/Botao.js'
import {useState} from 'react'


function Formulario (props){
    const arrayAreas = [
        'Administração',
        'Gestão',
        'Logística',
        'Mecânica',
        'Odontologia',
        'Tecnologia'
    ]
    
    const aoSubmeterForm = (evento) => {
        evento.preventDefault() //evita comportamento padrão
        props.aoNovoCadastro ({ //ele vai pegar uma função que se refere aos parenteses e um objeto que refere-se ao colchete}
            nomeInicial,
            especialidadeInicial,
            imagemInicial,
            areaInicial
        })
        /* console.log('FORMULÁRIO ENVIADO!', nomeInicial, especialidadeInicial, imagemInicial, areaInicial); */
    }
   
    const [nomeInicial, alteraNome] = useState('')
    const [especialidadeInicial, alteraEspecialidade] = useState ('')
    const [imagemInicial, alteraImagem] = useState('')
    const [areaInicial, alteraArea] = useState('')

    return (
        <form className='Formulario' onSubmit={aoSubmeterForm}>
            <h2>Preencha esse formulário para se cadastrar</h2>
            <CampoTexto label="Nome:" 
            placeHolder="Digite seu nome"
            valorInicial = {nomeInicial}
            setValorInicial = {valorInicial => alteraNome(valorInicial)} />
            
            <CampoTexto label="Especialidade:" 
            placeHolder="Defina uma especialidade"
            valorInicial = {especialidadeInicial}
            setValorInicial = {valorInicial => alteraEspecialidade(valorInicial)} />
            
            <CampoTexto label="Imagem:"
            placeHolder="URL da imagem"
            valorInicial = {imagemInicial}
            setValorInicial = {valorInicial => alteraImagem(valorInicial)} />
           
            <ListaSuspensa label="Áreas" areas={arrayAreas}
            valorInicial = {areaInicial}
            setValorInicial = {valorInicial => alteraArea(valorInicial)}/>
            
            <Botao texto="Cadastrar"/>
        </form>
    )
}

export default Formulario