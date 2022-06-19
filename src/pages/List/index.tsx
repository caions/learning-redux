import React from 'react';
import { Car } from '../../components/Car';
import { useSelector } from 'react-redux'
import { DashBoardContainer } from '../../containers/DashBoardContainer';

export const List = () => {
	
	const cars = useSelector(state => state)

	return (
		<DashBoardContainer>
			<div className="container-fluid">
				<div className="row">{cars.cars.map((car, index) => <Car key={index} car={car} />)}</div>
			</div>
		</DashBoardContainer>
	);
}