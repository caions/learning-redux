import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { DashBoard } from '../../layout/DashBoard';


import { addCar,delCar } from '../../store/cars'

export const Add = () => {
	const [form, setForm] = useState({name:'',url:''})
	const dispatch = useDispatch()

	function formChange(e){
		setForm({...form,[e.target.name]: e.target.value})
	}

	function onSubmit(e){
		e.preventDefault();
		dispatch(addCar(form))
	}

	return (
		<DashBoard>
			<form className="container mt-5" onSubmit={onSubmit}>
				<div className="form-group">
					<label>Nome</label>
					<input onChange={formChange} value={form.name} type="text" name="name" className="form-control" placeholder="Nome..." />
				</div>
				<div className="form-group">
					<label>URL:</label>
					<input onChange={formChange} value={form.url} type="text" name="url" className="form-control" placeholder="URL:https://cars" />
				</div>
				<button type="submit" className="btn btn-primary">
					Adicionar
				</button>
			</form>
		</DashBoard>
	);
}