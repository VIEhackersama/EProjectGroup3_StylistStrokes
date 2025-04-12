import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
function Header_js() {
    return (
        <Navbar className='bg justify-content-between border border-dark-subtle' style={{ backgroundColor: '' }} expand='lg'>
            <Container>
                <Navbar.Brand as={NavLink} to='/homepage'>
                    <img src='./image/images.png' width='30' height='30' className='fw-semibold d-inline-block align-top' alt='Logo' />{' '}FPT Aptech
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto fw-semibold' >
                        <Nav.Link as={NavLink} to='/aboutus' className='m-2'>About us</Nav.Link>
                        <Nav.Link as={NavLink} to='/products' className='m-2'>Products</Nav.Link>
                        <Nav.Link as={NavLink} to='/bookings' className='m-2'>Booking</Nav.Link>
                        <Nav.Link as={NavLink} to='/location' className='m-2'>Location</Nav.Link>
                    </Nav>
                    <Nav className='mr-auto'>
                        <Button style={{backgroundColor:'orange',borderColor:'orange'}} className='p-2 m-2' >Sign in</Button>
                        <Button style={{backgroundColor:'white', color:'blue'}} className='border border-primary m-2 p-2' >Sign up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header_js;