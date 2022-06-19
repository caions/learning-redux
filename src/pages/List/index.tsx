import React from 'react';
import { Car } from '../../components/Car';
import { useSelector } from 'react-redux'

export const List = () => {
	
	const cars = useSelector(state => state)

	return (
		<div className="container-fluid">
			<div className="row">{cars.cars.map((car, index) => <Car key={index} car={car} />)}</div>
		</div>
	);
}