import { Paper } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

function Tabela() {
    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth:700}} aria-label='tabela-customizada'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Horário</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Modalidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component='th' scope='row'>22/07/2023</TableCell>
                            <TableCell component='th' scope='row'>08:30</TableCell>
                            <TableCell component='th' scope='row'>Dra. Ana Lúcia</TableCell>
                            <TableCell component='th' scope='row'>Angiologista</TableCell>
                            <TableCell component='th' scope='row'>Luana Malheiros</TableCell>
                            <TableCell component='th' scope='row'>Particular</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope='row'>22/07/2023</TableCell>
                            <TableCell component='th' scope='row'>08:30</TableCell>
                            <TableCell component='th' scope='row'>Dra. Ana Lúcia</TableCell>
                            <TableCell component='th' scope='row'>Angiologista</TableCell>
                            <TableCell component='th' scope='row'>Luana Malheiros</TableCell>
                            <TableCell component='th' scope='row'>Particular</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope='row'>22/07/2023</TableCell>
                            <TableCell component='th' scope='row'>08:30</TableCell>
                            <TableCell component='th' scope='row'>Dra. Ana Lúcia</TableCell>
                            <TableCell component='th' scope='row'>Angiologista</TableCell>
                            <TableCell component='th' scope='row'>Luana Malheiros</TableCell>
                            <TableCell component='th' scope='row'>Particular</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope='row'>22/07/2023</TableCell>
                            <TableCell component='th' scope='row'>08:30</TableCell>
                            <TableCell component='th' scope='row'>Dra. Ana Lúcia</TableCell>
                            <TableCell component='th' scope='row'>Angiologista</TableCell>
                            <TableCell component='th' scope='row'>Luana Malheiros</TableCell>
                            <TableCell component='th' scope='row'>Particular</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default Tabela