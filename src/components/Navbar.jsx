import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">AGENDA</span>
				</Link>
				<div className="ml-auto">
					<Link to="/new_contact">
						<button className="btn btn-primary">AÑADIR CONTACTO</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};