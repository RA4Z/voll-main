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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component='th' scope='row'>22/07/2023</TableCell>
                            <TableCell>08:30</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default Tabela