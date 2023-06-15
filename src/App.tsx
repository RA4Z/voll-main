import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulo';
import Rodape from './components/Rodape';
import Container from './components/Container';
import Tabela from './components/Tabela';
import useDadosConsulta from './useDadosConsulta';
import Grafico from './components/Grafico';

function App() {
  const { dados, erro } = useDadosConsulta();
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela consultas={dados} />
        <Grafico />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
