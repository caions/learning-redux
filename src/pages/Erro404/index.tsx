import React from 'react';
import { Authentication } from '../../containers/AuthContainer';

export const Erro404: React.FC = () => {
  return (
    <>
      <Authentication>
        <h1 className="text-warning">Erro 404</h1>
        <h3 className="text-warning">Pagina não econtrada</h3>
      </Authentication>

    </>
  );
}

