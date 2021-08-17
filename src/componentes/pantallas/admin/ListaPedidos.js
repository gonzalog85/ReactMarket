import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../../theme/useStyles';

const ListaPedidos = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                PEDIDOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>FECHA</TableCell>
                            <TableCell>TOTAL</TableCell>
                            <TableCell>PAGADO</TableCell>
                            <TableCell>ENTREGADO</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>ad694b44-3735-4593-86fd-4ef41b705c64</TableCell>
                            <TableCell>Gonzalo Gomez</TableCell>
                            <TableCell>17/08/2021</TableCell>
                            <TableCell>$60.00</TableCell>
                            <TableCell>17/08/2021</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>check</Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                >
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>38449df4-ee5a-426a-8236-d3e7445c73ce</TableCell>
                            <TableCell>Juan Perez</TableCell>
                            <TableCell>17/08/2021</TableCell>
                            <TableCell>$50.00</TableCell>
                            <TableCell>17/08/2021</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered}>clear</Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                >
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ListaPedidos;
