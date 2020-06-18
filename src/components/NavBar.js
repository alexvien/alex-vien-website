import React from 'react';
import {
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Alex Vien</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto container">
                        <Nav.Link className="col" href="/">Home</Nav.Link>
                        <Nav.Link className="col" href="/finance">Finance</Nav.Link>
                        <Nav.Link className="col" href="/productivity">Productivity</Nav.Link>
                        <Nav.Link className="col" href="/studying">Education</Nav.Link>
                        <Nav.Link className="col" href="/lifestyle">Lifestyle</Nav.Link> 
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;