import {
  Avatar,
  Button,
  Icon,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../contexto/store';
import useStyles from '../../../theme/useStyles';

const MenuCliente = () => {

  const [{ sesionUsuario }, dispatch] = useStateValue();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <>
      <Button color="inherit" className={classes.buttonIcon}>
        <Link className={classes.linkAppBarDesktop} to="/carrito">
          <Icon className={classes.mr}>shopping_cart</Icon>
          MIS PEDIDOS
        </Link>
      </Button>
      <div>
        <Button
          color="inherit"
          className={classes.buttonIcon}
          onClick={handleClick}
        >
          <div className={classes.linkAppBarDesktop}>
            <Avatar
              alt="mi imagen"
              className={classes.avatarPerfilAppBar}
              src="https://www.montagne.com.ar/tecnologias/soft-down/img/campera.png"
            />
            {sesionUsuario
              ? (sesionUsuario.autenticado ? sesionUsuario.usuario.nombre + ' ' + sesionUsuario.usuario.apellido : 'No sesion')
              : 'No sesion'}
            <Icon>keyboard_arrow_down</Icon>
          </div>
        </Button>
        <Menu
          elevation={2}
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={classes.listItem} onClick={handleClose}>
            <Link className={classes.linkAppBarMobile} to="/perfil">
              <ListItemIcon className={classes.listItemIcon}>
                <Icon>person</Icon>
              </ListItemIcon>
              <ListItemText>Mi Perfil</ListItemText>
            </Link>
          </MenuItem>
          <MenuItem className={classes.listItem} onClick={handleClose}>
            <Link className={classes.linkAppBarMobile} to="/">
              <ListItemIcon className={classes.listItemIcon}>
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText>Cerrar Sesion</ListItemText>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default MenuCliente;
