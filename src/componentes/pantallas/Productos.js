import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { getProductos } from '../../actions/ProductoAction';
import useStyles from '../../theme/useStyles';
import { ProductoArray } from '../data/dataPrueba';

const Productos = (props) => {

  const [requestProductos, setRequestProductos] = useState({
    pageIndex: 1,
    pageSize: 2,
    search: ''
  })

  const [paginadorProductos, setPaginadorProductos] = useState({
    count: 0,
    pageIndex: 0,
    pageSize: 0,
    pageCount: 0,
    data: []
  })

  const handleChange = (event, value) => {
    setRequestProductos((anterior) => ({
      ...anterior,
      pageIndex: value
    }))
  }

  useEffect(() => {
    const getListaProductos = async () => {
      const response = await getProductos(requestProductos);
      setPaginadorProductos(response.data);
    }
    getListaProductos();
  }, [requestProductos])

  const miArray = ProductoArray;
  const verProducto = (id) => {
    props.history.push('/detalleProducto/' + id);
  };

  const classes = useStyles();

  if (!paginadorProductos.data) {
    return null;
  }
  return (
    <Container className={classes.containermt}>
      <Typography variant="h4" className={classes.text_title}>
        Productos
      </Typography>
      <Grid container spacing={4}>
        {paginadorProductos.data.map((data) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
            <Card>
              <CardMedia
                className={classes.media}
                image="https://www.montagne.com.ar/tecnologias/soft-down/img/campera.png"
                title="producto"
              >
                <Avatar variant="square" className={classes.price}>
                  ${data.precio}
                </Avatar>
              </CardMedia>
              <CardContent>
                <Typography variant="h6" className={classes.text_card}>
                  {data.nombre}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => verProducto(data.id)}
                >
                  MAS DETALLES
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={handleChange} />
    </Container>
  );
};

export default Productos;
