import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardDeck
} from 'react-bootstrap';

class MainLayout extends React.Component {
    render() {
        return (
            <Container>
            <Row>
                <Col>
                <Card className="bg-dark text-white">
                <Card.Img className="jumbotron-img" src="./images/jumbotron_bg1.jpg" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>5 Tips to Improve Your Productivity Now</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/jumbotron_bg.jpg" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Read more...</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./images/Card_Title.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            </Row>
            </Container>
        )
    }
}

export default MainLayout;