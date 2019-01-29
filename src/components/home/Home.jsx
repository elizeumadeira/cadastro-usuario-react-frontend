import React from 'react';
import Main from '../template/Main';

export default props =>
    <Main icon="home" title="início" subtitle="Segundo projeto do React">
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">
            Sistema criado para testar CRUD de usuários usando React16
        </p>
    </Main>