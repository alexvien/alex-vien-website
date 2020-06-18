import React from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

const Results = () => (
    <Container>
        <h2>Results List</h2>
        <ListGroup as="ul">
            <ListGroupItem as="li" active>
                Cras justo odio
            </ListGroupItem>
            <ListGroupItem as="li">Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem as="li" disabled>
                Morbi leo risus
            </ListGroupItem>
            <ListGroupItem as="li">Porta ac consectetur ac</ListGroupItem>
        </ListGroup>
    </Container>
)

export default Results;