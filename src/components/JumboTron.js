import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

class JumboTron extends React.Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                <h1>Alex Vien</h1>
                <p>
                    I'm a private equity analyst currently pursuing my MBA at UCLA. I also make YouTube videos on finance, studying, productivity, and general skill building.
                </p>
                </Container>
            </Jumbotron>
        )
    }
}

export default JumboTron;