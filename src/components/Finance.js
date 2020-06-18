import React from 'react';

import {
  Container, 
  Row, 
  Col, 
  Card, 
  Button,
  Form,
  FormControl
} from 'react-bootstrap';

class Finance extends React.Component {
    render() {
    
      return (
              <Container>
                <Row>
                    <Col lg={8}><h1 className="mt-4">5 Ways to Improve Productivity now</h1>
                    
                    <p className="lead">by <a href="/">Alex Vien</a></p>

                    <hr />

                    <p>Posted on June 12, 2020 at 1:28AM</p>

                    <hr />

                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut lectus arcu bibendum. A cras semper auctor neque. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Accumsan tortor posuere ac ut consequat semper viverra nam. Tellus in metus vulputate eu scelerisque felis imperdiet. Cras semper auctor neque vitae tempus quam pellentesque. Tristique nulla aliquet enim tortor at auctor urna nunc id. Eu mi bibendum neque egestas congue quisque egestas. Cursus sit amet dictum sit amet justo donec enim diam. Volutpat lacus laoreet non curabitur gravida arcu. Etiam tempor orci eu lobortis elementum. Platea dictumst vestibulum rhoncus est. Diam volutpat commodo sed egestas egestas fringilla phasellus. Vivamus arcu felis bibendum ut tristique et egestas. Et malesuada fames ac turpis egestas integer eget. Nullam vehicula ipsum a arcu cursus vitae congue mauris. A arcu cursus vitae congue mauris rhoncus aenean vel.
                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Rhoncus dolor purus non enim praesent elementum facilisis leo. Duis tristique sollicitudin nibh sit. Congue quisque egestas diam in arcu cursus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vitae purus faucibus ornare suspendisse. Viverra aliquet eget sit amet tellus cras. Tristique nulla aliquet enim tortor at auctor. Nunc eget lorem dolor sed viverra ipsum nunc. Sed egestas egestas fringilla phasellus faucibus scelerisque. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Dictumst quisque sagittis purus sit amet volutpat. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Senectus et netus et malesuada fames.
                    Egestas pretium aenean pharetra magna ac placerat. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Etiam tempor orci eu lobortis elementum nibh tellus. Turpis egestas maecenas pharetra convallis posuere. Eu augue ut lectus arcu bibendum. Quis vel eros donec ac odio tempor. Nibh tellus molestie nunc non blandit massa enim nec dui. Eu sem integer vitae justo eget magna. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Pellentesque dignissim enim sit amet venenatis. Amet tellus cras adipiscing enim eu. Dui sapien eget mi proin sed libero enim sed faucibus. In hendrerit gravida rutrum quisque non tellus orci. Nunc scelerisque viverra mauris in aliquam. Mattis molestie a iaculis at erat pellentesque adipiscing. Tempor nec feugiat nisl pretium fusce id velit ut. Risus viverra adipiscing at in tellus integer.
                    Cursus eget nunc scelerisque viverra mauris in aliquam sem. Massa sapien faucibus et molestie. Ultrices mi tempus imperdiet nulla. Tincidunt arcu non sodales neque sodales. Purus faucibus ornare suspendisse sed. Aliquam sem et tortor consequat id porta. Nunc sed velit dignissim sodales ut eu sem integer vitae. Massa tincidunt dui ut ornare lectus sit amet. Pellentesque nec nam aliquam sem. Sociis natoque penatibus et magnis dis. Ac ut consequat semper viverra nam libero justo laoreet. Felis bibendum ut tristique et egestas. Eget nunc scelerisque viverra mauris in aliquam.</p>
                    </Col>
                    <Col md={4}>
                    <Card className="my-4">
                    <Card.Header><h5>Search</h5></Card.Header>
                    <Card.Body>
                      <Form inline>
                      <FormControl type="text" placeholder="Search for..." className=" mr-sm-2" />
                      <Button type="submit">Submit</Button>
                      </Form>
                    </Card.Body>
                    </Card>
                    <Card className="my-4">
                      <Card.Header><h5>Categories</h5></Card.Header>
                      <Card.Body>
                        <Row>
                          <Col lg={6}>
                            <ul className="list-unstyled mb-0">
                              <li><a href="/productivity">Productivity</a></li>
                              <li><a href="/finance">Finance</a></li>
                              <li><a href="/education">Education</a></li>
                            </ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card className="my-4">
                    <Card.Header><h5>Side bar</h5></Card.Header>
                    <Card.Body>
                      You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </Card.Body>
                    </Card>
                    </Col>
                  </Row>
              </Container>
      );
    }
  }
  
  export default Finance;