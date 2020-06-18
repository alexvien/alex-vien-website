import React from 'react';
import {Container} from 'react-bootstrap';



class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
                <Container>
                    <section className="section-copyright">
                        <a className="footer-home-link" href="/">Alex Vien</a> &copy; 2020
                    </section>
                </Container>
            </footer>
        )
    }
}   

export default Footer;