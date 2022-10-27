import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AccentureLogo from '../../icons/accenture';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<Navbar bg="light" variant="light" expand="md" className='px-3 shadow'>
			<Navbar.Brand href="#">
				<AccentureLogo height={'30px'} />
			</Navbar.Brand>
			<Navbar.Toggle className='ml-3' aria-controls="navbarScroll" />
			<Navbar.Collapse id="navbarScroll">
				<Nav
					style={{ maxHeight: '100px' }}
					navbarScroll
				>
					<Nav.Link>
						<Link to="/" className='nav-link'>Home</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/friends" className='nav-link'>Friends</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/scoreboard" className='nav-link'>Scoreboard</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/profile" className='nav-link'>Profile</Link>
					</Nav.Link>
					{/* <NavDropdown title="Collapse Example" className='nav-link' id="navbarScrollingDropdown">
						<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action4">
							Another action
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action5">
							Something else here
						</NavDropdown.Item>
					</NavDropdown> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;