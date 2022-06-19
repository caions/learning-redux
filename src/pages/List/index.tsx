import React from 'react';
import { Car } from '../../components/Car';
import { useSelector } from 'react-redux'
import { DashBoardContainer } from '../../containers/DashBoardContainer';
import { ICar } from '../../redux/actions/carActions';

interface ICars{
	cars: ICar[]
}

export const List = () => {
	
	const { cars } = useSelector((state:ICars) => state)

	return (
		<DashBoardContainer>
			<div className="container-fluid">
				<div className="row">{cars.map((car, index) => <Car key={index} car={car} />)}</div>
			</div>
		</DashBoardContainer>
	);
}