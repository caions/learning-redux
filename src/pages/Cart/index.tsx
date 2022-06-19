import React from 'react';
import { DashBoard } from '../../layout/DashBoard';

export const Cart = () => {
	return (
		<DashBoard>
			<p className="mt-5 text-warning text-center">Sem produtos no Carrinho...</p>;
		</DashBoard>
	)
}