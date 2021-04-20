import React, { useContext } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import loginImg from '../../../img/login.jpg'
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Home/NavBar/NavBar';
import { handleGoogleSignIn, initializeLogInFramework } from './LoginManager';


const Login = () => {
    initializeLogInFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
    }

    return (
        <>
            <NavBar></NavBar>
            <Container>
                <Row className="align-items-center" style={{ height: '100vh' }}>
                    <Col md='6' className="shadow p-5 form input">
                        <Button onClick={googleSignIn}>Continue with Google</Button>
                    </Col>
                    <Col md="6">
                        <Image src={loginImg} fluid></Image>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;