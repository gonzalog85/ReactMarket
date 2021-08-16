import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Icon,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  TableCell,
  Typography,
  TableBody,
} from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';
import ImageUploader from 'react-images-upload';

const Perfil = (props) => {
  const classes = useStyles();

  const verDetalles = () => {
    const id = '1e648c55-76ab-4755-9a08-874d68603bc2';
    props.history.push('/ordenCompra/' + id);
  };

  return (
    <Container className={classes.containermt}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" className={classes.text_title}>
            PERFIL DE USUARIO
          </Typography>
          <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
            <ImageUploader
              withIcon={false}
              buttonStyles={{
                borderRadius: '50%',
                padding: 10,
                margin: 0,
                position: 'absolute',
                bottom: 15,
                left: 15,
              }}
              className={classes.imageUploader}
              buttonText={<Icon>add_a_photo</Icon>}
              label={
                <Avatar
                  alt="mi perfil"
                  className={classes.avatarPerfil}
                  src="https://www.montagne.com.ar/tecnologias/soft-down/img/campera.png"
                />
              }
              imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
              maxFileSize={5242880}
            />
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              value="Gonzalo"
            />
            <TextField
              label="Apellidos"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              value="Gomez"
            />
            <TextField
              label="Correo Electronico"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              value="gonzalogomez22@gmail.com"
            />
            <Divider className={classes.divider} />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
            />
            <TextField
              label="Confirmar Password"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
            />
            <Button variant="contained" color="primary">
              ACTUALIZAR
            </Button>
          </form>
        </Grid>
        <Grid item md={9} xs={12}>
          <Typography variant="h5" className={classes.text_title}>
            MIS PEDIDOS
          </Typography>
          <TableContainer className={classes.form}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>FECHA</TableCell>
                  <TableCell>TOTAL</TableCell>
                  <TableCell>PAGADO</TableCell>
                  <TableCell>ENTREGADO</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1e648c55-76ab-4755-9a08-874d68603bc2</TableCell>
                  <TableCell>15/08/2021</TableCell>
                  <TableCell>60.00</TableCell>
                  <TableCell>15/08/2021</TableCell>
                  <TableCell>
                    {/* <Icon className={classes.iconNotDelivered}>clear</Icon> */}
                    <Icon className={classes.iconDelivered}>check</Icon>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={verDetalles}>
                      DETALLES
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Perfil;
