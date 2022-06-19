import React from 'react';
import { DashBoardContainer } from '../../containers/DashBoardContainer';

export const Cart = () => {
	return (
		<DashBoardContainer>
			<p className="mt-5 text-warning text-center">Sem produtos no Carrinho...</p>;
		</DashBoardContainer>
	)
}