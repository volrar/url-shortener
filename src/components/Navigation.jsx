import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.svg';

function Navigation() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='fixed-top bg-body-tertiary'>
        <Navbar.Brand href="/">
            <Image src={logo} alt="Shortly" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='m-2 mt-2' />
        <Navbar.Collapse id="basic-navbar-nav" className="bg-body-tertiary" >
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navigation;
