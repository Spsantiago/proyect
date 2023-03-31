import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Welcome } from '../../components/Welcome';
import { Reserva } from '../../components/Reserva';
import { Producto } from '../../components/Producto';

export const Rout = () => {
    return (
            <Routes>
                <Route path='/anillos' element={<Welcome/>}/>
                <Route path='/reserva' element={<Reserva/>}/>
                <Route path='/producto' element={<Producto/>}/>
            </Routes>
    );
};
