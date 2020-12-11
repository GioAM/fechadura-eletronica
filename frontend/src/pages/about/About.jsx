import React  from 'react';
import { Container, Row, Col, Table} from 'reactstrap';

import Navbar from '../../components/Navbar/Navbar';
import './About.css';

export default props =>
<>
    <Container fluid>
        <Row>
            <Col sm={2} md={2} lg={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col sm={10} md={10} lg={10} className="p-0 main-context">
                <h1 className="title-page">Sobre</h1>
                <hr className="title-line"/>
                <Col sm={10} md={10} lg={10} className="content-container">
                    <h3 className="title-about">Sistemas Distribuídos</h3>
                    <p className="text-about"><span className="sub-about">Acadêmicos:</span> <a href="https://github.com/GioAM">Giovani Meneguel</a> e <a href="https://github.com/leticiapmay99">Letícia May</a></p>
                    <p className="text-about"><span className="sub-about">Tema do Trabalho:</span> Sistema de Segurança utilizando Tecnologia RFID</p>    
                
                </Col>
            </Col>
        </Row>
    </Container>
</>