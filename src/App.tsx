import { Container } from '@mui/material';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulo';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
      </Container>
    </>
  );
}

export default App;
