import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulo';
import Rodape from './components/Rodape';
import Container from './components/Container';
import Tabela from './components/Tabela';
import useDadosConsulta from './useDadosConsulta';
import Grafico from './components/Grafico';
import useDadosProfissional from './useDadosProfissional';
import Avaliacao from './components/Avaliacao';
import Botao from './components/Botao';
import Subtitulo from './components/Subtitulo';

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if(consultasErro || profissionaisErro) {
    console.log('Ocorreu um erro na requisição')
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo>Consultas do dia</Titulo>
        <Tabela consultas={consultas} />
        <Botao>Ver mais</Botao>
        <Titulo>Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>

        <Grafico consultas={consultas} profissionais={profissionais} />
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
