import Banner from './componentes/Banner/Banner.js'
import Formulario from './componentes/Formulario/Formulario.js';
import Footer from './componentes/Rodapé/rodape.js'
import {useState} from 'react'
import Times from './componentes/Times/Times.js';


function App() {
  
  const [professores,setProfessores] = useState([])
  
  const aoAdicionarProfessor = (professor) => {
    console.log(professor);
    setProfessores([...professores, professor]) // tres pontinhos ele abre um array - operador de espalhamento javascript.
  }
  
  const arrayTimes = [
    {
      nomeTime: "Administração",
      corClara: "#ff9999",
      corEscura: "#ff0000"
    },
    {
      nomeTime: "Gestão",
      corClara: "#99ff99",
      corEscura: "#00ff00"
    },
    {
      nomeTime: "Logística",
      corClara: "#ffd699",
      corEscura: "#ff9900"
    },
    {
      nomeTime: "Mecânica",
      corClara: "#993333",
      corEscura: "#800000"
    },
    {
      nomeTime: "Odontologia",
      corClara: "#cc99ff",
      corEscura: "#9933ff"
    },
    {
      nomeTime: "Tecnologia",
      corClara: "#99b3ff",
      corEscura: "#1a53ff"
    }
  ]

  return (
    <div className="App">
      <Banner/>
      <Formulario aoNovoCadastro = {professor => aoAdicionarProfessor(professor)}/>
      <Footer span="Desenvolvido por Lucas Aguiar"/>
      {arrayTimes.map(time => 
      <Times 
      key = {time.nomeTime} 
      nomeTime= {time.nomeTime}
      corClara={time.corClara}
      corEscura={time.corEscura}
      professores={professores.filter(professor => professor.areaInicial === time.nomeTime)}
      />)}
    </div>
  );
}

export default App;
