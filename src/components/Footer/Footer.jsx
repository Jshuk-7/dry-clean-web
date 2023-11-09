import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <Container>
                <Navbar expand="lg" className="bg-body-tertiary main-footer">
                    <Row>
                        <div className="ftr-contact">
                            <h2 className="display-6">Contact us</h2>
                            <p>
                                12345 Address here
                                <br />
                                City, State Zip-Code
                            </p>
                        </div>
                        <Col>
                            <Container className="col-md-7 col-sm-6">
                                <p>Hello there b</p>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="col-md-7 col-sm-6">
                                <p>Hello there</p>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="col-md-7 col-sm-6">
                                <p>Hello there</p>
                            </Container>
                        </Col>
                        <p className="text-center">
                            Copyright ©-All rights are reserved
                        </p>
                    </Row>
                </Navbar>
            </Container>
        </div>
    );
};

export default Footer;
