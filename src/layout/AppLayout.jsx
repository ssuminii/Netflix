import React from 'react'
import './AppLayout.style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet} from 'react-router-dom'


const AppLayout = () => {
  return (
    <div>
        <Navbar expand='lg' className='navbar'>
            <Container fluid>
                <Navbar.Brand href='#'>
                    <img width={100} src="https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav
                    className='me-auto my-2 my-lg-0'
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href='#action1'>홈</Nav.Link>
                    <Nav.Link href='#action2'>시리즈</Nav.Link>
                    <Nav.Link href='#action3'>영화</Nav.Link>
                    <Nav.Link href='#action4'>New! 요즘 대세 컨텐츠</Nav.Link>
                    <Nav.Link href='#action5'>내가 찜한 리스트</Nav.Link>
                    </Nav>
                    <Form className='d-flex'>
                    <Form.Control
                        type='search'
                        placeholder='Search'
                        className='me-2'
                        aria-label='Search'
                    />
                    <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
  );
}

export default AppLayout