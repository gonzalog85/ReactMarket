import {
  Button,
  Container,
  Icon,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from '../../../theme/useStyles';

const Usuarios = (props) => {
  const classes = useStyles();

  const editaUsuario = () => {
    const id = '4fbf56e2-e772-4766-b3ca-198c556dfb6a';
    props.history.push('/admin/usuario/' + id);
  };

  return (
    <Container className={classes.containermt}>
      <Typography variant="h4" className={classes.text_title}>
        USUARIOS
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>USUARIO</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>ADMIN</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>eb352ec8-ee3b-4e7f-bb2b-f6e7715ceae6</TableCell>
              <TableCell>Gonzalo Gomez</TableCell>
              <TableCell>gonzalogomez22@gmail.com</TableCell>
              <TableCell>
                <Icon className={classes.iconDelivered}>check</Icon>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={editaUsuario}
                >
                  <Icon>edit</Icon>
                </Button>
                <Button variant="contained" color="secondary">
                  <Icon>delete</Icon>
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>603a175b-c4d8-4a21-abe8-89e1e0a20700</TableCell>
              <TableCell>Juan Perez</TableCell>
              <TableCell>jperez@gmail.com</TableCell>
              <TableCell>
                <Icon className={classes.iconNotDelivered}>clear</Icon>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={editaUsuario}
                >
                  <Icon>edit</Icon>
                </Button>
                <Button variant="contained" color="secondary">
                  <Icon>delete</Icon>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Usuarios;
