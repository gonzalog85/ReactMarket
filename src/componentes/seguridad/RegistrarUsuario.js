import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Icon,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const clearUsuario = {
  nombre: '',
  apellidos: '',
  email: '',
  password: '',
};

const RegistrarUsuario = () => {
  const [usuario, setUsuaio] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuaio((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const guardarUsuario = () => {
    console.log('Mi usuario es: ', usuario);
    setUsuaio(clearUsuario);
  };

  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Grid container justifyContent="center">
        <Grid item lg={6} md={8}>
          <Card className={classes.card} align="center">
            <Avatar className={classes.avatar}>
              <Icon className={classes.icon}>person_add</Icon>
            </Avatar>
            <Typography variant="h5" color="primary">
              Registro de Usuario
            </Typography>
            <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item lg={6} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Apellidos"
                    variant="outlined"
                    fullWidth
                    name="apellidos"
                    value={usuario.apellidos}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item lg={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={usuario.email}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item lg={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="password"
                    value={usuario.password}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item lg={12} xs={12} className={classes.gridmb}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={guardarUsuario}
                    type="submit"
                  >
                    Registrar
                  </Button>
                </Grid>
              </Grid>

              <Link to="/login" variant="body1" className={classes.link}>
                ¿Ya tienes cuenta?. Logeate
              </Link>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegistrarUsuario;
