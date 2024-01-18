import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Iconmenu from "../Iconmenu";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    id: 1,
    name: "Elhamd",
    code: "25",
    location: "25street, Helwan, cairo",
    phone: "01141627898",
    memu: <Iconmenu />,
  },
  {
    id: 2,
    name: "Elhamd",
    code: "25",
    location: "25street, Helwan, cairo",
    phone: "01141627898",
    memu: <Iconmenu />,
  },
  {
    id: 3,
    name: "Elhamd",
    code: "25",
    location: "25street, Helwan, cairo",
    phone: "01141627898",
    memu: <Iconmenu />,
  },
  {
    id: 4,
    name: "Elhamd",
    code: "25",
    location: "25street, Helwan, cairo",
    phone: "01141627898",
    memu: <Iconmenu />,
  },
  {
    id: 5,
    name: "Elhamd",
    code: "25",
    location: "25street, Helwan, cairo",
    phone: "01141627898",
    memu: <Iconmenu />,
  },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                pl: "50px",
              }}
            >
              Shop Name
            </TableCell>
            <TableCell align="left">Shop Code</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  pl: "50px",
                }}
                align="left"
              >
                {row.name}
              </TableCell>
              <TableCell align="left">{row.code}</TableCell>
              <TableCell align="left">{row.location}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="right">{row.memu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
