import React, { Suspense } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

const ListarClientesApp = React.lazy(() => import('listar/ListarClientesApp'))
const CadastrarClientesApp = React.lazy(() => import('cadastrar/CadastrarClienteApp'))
const ListarIdClienteApp = React.lazy(() => import('listarid/ListarIdClienteApp'))

export function Navegacao() {
    const navegation = useNavigate();
    const location = useLocation();
    return (
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarClientesApp navegar={navegation}/>
                </Suspense>
            } />
            <Route path="/cadastrar" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <CadastrarClientesApp navegar={navegation} />
                </Suspense>
            } />
            <Route path="/listarid" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarIdClienteApp location={location}/>
                </Suspense>
            } />
        </Routes>
    );
}