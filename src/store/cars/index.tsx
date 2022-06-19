import * as cars from '../actionsType/cars'

const INITIAL_STATE = [
  {
		name: 'Ferrari',
		url:
			'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	},
	{
		name: 'Mercedes',
		url:
			'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	},
	{
		name: 'Audi',
		url:
			'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	}
]

export function carsReducer(state = INITIAL_STATE,action: any){
	if(action.type === cars.ADD_CAR){
		return [...state, action.car]
	}

	if(action.type === cars.REMOVE_CAR){
		return state.filter((st) => st.name !== action.car.name)
	}

  return state
}

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

export const delCar = (car:any) => {
	return {
		type: cars.REMOVE_CAR,
		car
	}
}