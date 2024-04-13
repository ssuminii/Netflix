import React from 'react'
import './AppLayout.style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const AppLayout = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    const goToMovie = () => {
        navigate('/movies')
    }

    const [keyword, setKeyword] = useState("");
    const searchByKeyword = (event) => {
        event.preventDefault();
        // url로 넘겨주는게 좋음
        navigate(`/movies?q=${keyword}`);
        setKeyword('');
    }

  return (
    <div>
        <Navbar expand='lg' className='navbar'>
            <Container fluid>
                <Navbar.Brand>
                    <img onClick={goToHome} width={100} src="https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav
                    className='me-auto my-2 my-lg-0'
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link onClick={goToHome}>홈</Nav.Link>
                    <Nav.Link onClick={goToMovie}>영화</Nav.Link>
                    <Nav.Link onClick={goToMovie}>시리즈</Nav.Link>
                    <Nav.Link href='#'>New! 요즘 대세 컨텐츠</Nav.Link>
                    <Nav.Link href='#'>내가 찜한 리스트</Nav.Link>
                    </Nav>
                    <Form className='d-flex' onSubmit={searchByKeyword}>
                    <Form.Control
                        type='search'
                        placeholder='Search'
                        className='me-2'
                        aria-label='Search'
                        value={keyword}
                        onChange={(evnet) => setKeyword(evnet.target.value)}
                    />
                    <Button variant="outline-danger" type='submit'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
  );
}

export default AppLayout