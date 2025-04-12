import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
// import '../style/header.css';

function Footer_js() {
    return (
        <Navbar style={{backgroundColor:""}} className='bg justify-content-between border border-dark-subtle' expand='lg'>
            <div className='container justify-content-end'>
                <h5 className='text-end'>No 8- Ton That Thuyet- My Dinh - Nam Tu Liem - HN</h5>
            </div>
        </Navbar>
    );
}

export default Footer_js;