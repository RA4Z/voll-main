import Card from './Card'
import IProfissional from "../../types/IProfissional"
import styled from 'styled-components'
import Subtitulo from '../Subtitulo'
import Titulo from '../Titulo'
import Botao from '../Botao'

const SecaoCard = styled.section`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

function Avaliacao({ profissionais }: { profissionais: IProfissional[] | null }) {
    return (
        <>
            <Titulo>Avaliações de especialistas</Titulo>
            <Subtitulo>Dezembro/22</Subtitulo>
            <SecaoCard>
                {profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />
                })}
            </SecaoCard>
            <Botao>Ver mais</Botao>
        </>
    )
}
export default Avaliacao