import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const MiniMenuDesplegable = ({ setFiltroEsto, filtro }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [filtroLocal, setFiltroLocal] = useState('');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFiltro = (tipo) => {
        setFiltroEsto(tipo)
        setFiltroLocal(tipo);
        handleClose();
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClick}>
                Filtrar por: {filtro || 'Todo'}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleFiltro('Todo')}>Todo</MenuItem>
                <MenuItem onClick={() => handleFiltro('Pantalones')}>Pantalones</MenuItem>
                <MenuItem onClick={() => handleFiltro('Remeras')}>Remeras</MenuItem>
                <MenuItem onClick={() => handleFiltro('Buzos')}>Buzos</MenuItem>
                <MenuItem onClick={() => handleFiltro('Medias')}>Medias</MenuItem>
            </Menu>
        </div>
    );
};

export default MiniMenuDesplegable;
