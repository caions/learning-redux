import { NavLink } from 'react-router-dom';

import './styles.css';

export const Header = () => {
	return (
		<nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
			<NavLink to="/list" className="navbar-brand">
				Shopping-Car
			</NavLink>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/list" className="nav-link">
							Listar
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/add" className="nav-link">
							Adicionar
						</NavLink>
					</li>
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<NavLink to="/cart" className="nav-item">
					<i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
						<span className="fa-counter">0</span>
					</i>
				</NavLink>
			</ul>
		</nav>
	);
}