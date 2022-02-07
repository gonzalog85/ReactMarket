import {
  CardMedia,
  Container,
  Grid,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  MenuItem,
  IconButton,
  Paper,
  Icon,
  Divider,
  Button,
  Select,
} from '@material-ui/core';
import React from 'react';
import { useStateValue } from '../../contexto/store';
import useStyles from '../../theme/useStyles';
import { ProductoArray } from '../data/dataPrueba';

const CarritoCompras = (props) => {

  const [{ sesionCarritoCompra }, dispatch] = useStateValue();
  console.log('sesionCarritoCompra', sesionCarritoCompra);

  const miArray = sesionCarritoCompra ? sesionCarritoCompra.items : [] /*ProductoArray*/
  let suma = 0;
  miArray.forEach(prod => {
    suma += prod.precio
  })


  const realizarCompra = () => {
    props.history.push('/procesoCompra');
  };
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Typography variant="h4" className={classes.text_title}>
        CARRITO DE COMPRAS
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={9} md={8} sm={12} xs={12}>
          <TableContainer>
            <Table>
              <TableBody>
                {miArray.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <CardMedia
                        className={classes.imgProductoCC}
                        image="https://www.montagne.com.ar/tecnologias/soft-down/img/campera.png"
                        title={item.producto}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.text_detalle}>
                        {item.producto}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.text_detalle}>
                        {'$' + item.precio}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.text_detalle}>
                        {item.cantidad}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <Icon>delete</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper variant="outlined" square className={classes.papperPadding}>
            <Typography variant="h6" className={classes.text_title}>
              SUBTOTAL ({miArray.length}) PRODUCTOS
            </Typography>
            <Typography className={classes.text_title}>$146.43</Typography>
            <Divider className={classes.gridmb} />
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={realizarCompra}
            >
              REALIZAR COMPRA
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarritoCompras;
