import * as cars from './actionsType/cars'

interface ICar{
	name: string,
	url: string
}

export const addCar = (car:ICar) => {
	return {
		type: cars.ADD_CAR,
		car
	}
}

export const delCar = (car:ICar) => {
	return {
		type: cars.REMOVE_CAR,
		car
	}
}