import {
  CardMedia,
  Container,
  Paper,
  Divider,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
  Typography,
  Button,
} from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';

const OrdenCompra = (props) => {
  const { id } = props.match.params;
  const mensajeEnvio = 'No entregado';
  const mensajePago = 'No pagado';
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Typography variant="h5" className={classes.text_title}>
        ORDEN DE COMPRA: {id.toUpperCase()}
      </Typography>
      <Grid container spacing={2} className={classes.papperPadding}>
        <Grid item md={8} xs={12}>
          <Typography variant="h6" className={classes.text_title}>
            ENVIO
          </Typography>
          <Typography variant="body2" className={classes.text_envio}>
            Nombres: Gonzalo Gomez
          </Typography>
          <Typography variant="body2" className={classes.text_envio}>
            Email: gonzalogomez22@gmail.com
          </Typography>
          <Typography variant="body2" className={classes.text_envio}>
            Direccion: Calle Saavedra Lamas 380, Yerba Buena, Tucuman
          </Typography>
          <div className={classes.alertNotDelivered}>
            <Typography variant="body2" className={classes.text_title}>
              {mensajeEnvio}
            </Typography>
          </div>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.text_title}>
            METODO DE PAGO
          </Typography>
          <Typography>Metodo: Paypal</Typography>
          <div className={classes.alertNotDelivered}>
            <Typography variant="body2" className={classes.text_title}>
              {mensajePago}
            </Typography>
          </div>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.text_title}>
            PRODUCTOS
          </Typography>
          <TableContainer className={classes.gridmb}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <CardMedia
                      className={classes.imgProductoPC}
                      image="https://www.montagne.com.ar/tecnologias/soft-down/img/campera.png"
                      title="imagen en proceso compra"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_detalle}>
                      Abrigo moda invierno 2021
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_detalle}>
                      2 x $25.00 = $50.00
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={4} xs={12}>
          <TableContainer component={Paper} square>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant="h6" className={classes.text_title}>
                      RESUMEN DEL PEDIDO
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Productos
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      $50.00
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Envio
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      $2.00
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Impuestos
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      $8.00
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Total
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      $60.00
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      className={classes.gridmb}
                    >
                      Paypal
                    </Button>
                    <Button variant="contained" size="large" fullWidth>
                      Tarjeta de Credito o Debito
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

export default OrdenCompra;
