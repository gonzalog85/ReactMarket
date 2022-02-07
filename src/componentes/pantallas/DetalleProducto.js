import {
  Button,
  CardMedia,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { addItem } from '../../actions/CarritoCompraAction';
import { getProducto } from '../../actions/ProductoAction';
import { useStateValue } from '../../contexto/store';
import useStyles from '../../theme/useStyles';

const DetalleProducto = (props) => {
  const [{ sesionCarritoCompra }, dispatch] = useStateValue()

  const [cantidad, setCantidad] = useState(1)

  const [productoSeleccionado, setProductoSeleccionado] = useState({
    id: 0,
    nombre: "",
    descripcion: "",
    stock: 0,
    marcaId: 0,
    marcaNombre: "",
    categoriaId: 0,
    categoriaNombre: "",
    precio: 0.0,
    imagen: ""
  });

  useEffect(() => {
    const id = props.match.params.id;
    const getProductoAsync = async () => {
      const response = await getProducto(id)
      setProductoSeleccionado(response.data)
    }
    getProductoAsync();
  }, [productoSeleccionado])

  //Revisar este if en caso de problemas al agregar a carrito
  if (cantidad <= 0) { console.log("cantidad no permitida"); setCantidad(1) }
  if (cantidad > productoSeleccionado.stock && productoSeleccionado.stock > 0) (setCantidad(productoSeleccionado.stock))

  const agregarCarrito = async () => {

    const item = {
      id: productoSeleccionado.id,
      producto: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      cantidad: cantidad,
      imagen: productoSeleccionado.imagen,
      marca: productoSeleccionado.marcaNombre,
      categoria: productoSeleccionado.categoriaNombre
    }

    await addItem(sesionCarritoCompra, item, dispatch)

    props.history.push('/carrito');
  };
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Typography variant="h4" className={classes.text_title}>
        {productoSeleccionado.nombre}
      </Typography>
      <Grid container spacing={4}>
        <Grid item lg={8} md={8} xs={12}>
          <Paper variant="outlined" square className={classes.paper_img}>
            <CardMedia
              image="https://www.montagne.com.ar/tecnologias/soft-down/img/campera.png"
              title={productoSeleccionado.descripcion}
              className={classes.media_detalle}
            />
          </Paper>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <TableContainer container={Paper} variant="outlined">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2">Precio</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{productoSeleccionado.precio}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2">Cantidad</Typography>
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="cantidad-producto"
                      label=""
                      type="number"
                      value={cantidad}
                      onChange={event => setCantidad(event.target.value)}
                      defaultValue={1}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={agregarCarrito}
                    >
                      Agregar al Carrito
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={8} md={8} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography className={classes.text_detalle}>
                Precio: {productoSeleccionado.precio}
              </Typography>
              <Typography className={classes.text_detalle}>
                Unidades Disponibles: {productoSeleccionado.stock}
              </Typography>
              <Typography className={classes.text_detalle}>
                Marca: {productoSeleccionado.marcaNombre}
              </Typography>
              <Typography className={classes.text_detalle}>
                Temporada: {productoSeleccionado.categoriaNombre}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography className={classes.text_detalle}>
                Descripcion
              </Typography>
              <Typography className={classes.text_detalle}>
                {productoSeleccionado.descripcion}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetalleProducto;
