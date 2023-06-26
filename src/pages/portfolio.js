import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import noddle from '../images/noddle-full.png';
import iannelli from '../images/iannelli-full.png';
import stakeholder from '../images/stakeholder-full.png';
import marketingAutomationTour from '../images/marketing-automation-tour-full.png';
import CustomNavbar from "../components/customNavbar/customNavbar.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/App.scss"

class Portfolio extends Component {
	
	render(){
		return(
            <>
            <CustomNavbar />
                <Container className="category-tabs">
                    <Row>
                        <Col sm={12} md={6} className="portfolio-card">
                            <Card style={{ width: '100%', height: '100%', border: 'none' }}>
                                <Card.Img variant="top" src={noddle} />
                                <Card.Body>
                                    <Card.Title>Noddle Companies</Card.Title>
                                    <Card.Text>The Noddle Companies is a full service strategic development partner which can provide their clients with assistance in site selection, acquisition master planning, architect and contractor selections and contract negotiation, zoning, infrastructure installation, tax incentives, construction management and more.</Card.Text>
                                </Card.Body>
                                <Button variant="primary" className="card-btn"><a href="http://www.noddlecompanies.com/" target="_blank" className="button-link" >Website <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a></Button>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} className="portfolio-card">
                            <Card style={{ width: '100%', height: '100%', border: 'none' }}>
                                <Card.Img variant="top" src={stakeholder} />
                                <Card.Body>
                                    <Card.Title>Salesforce Stakeholder Impact Report</Card.Title>
                                    <Card.Text>A yearly report for Stakeholders.</Card.Text>                                    
                                </Card.Body>
                                <Button variant="primary" className="card-btn"><a href="https://stakeholderimpactreport.salesforce.com/" target="_blank" className="button-link" >Website <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a></Button>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={6} className="portfolio-card">
                            <Card style={{ width: '100%', height: '100%', border: 'none' }}>
                                <Card.Img variant="top" src={marketingAutomationTour} />
                                <Card.Body>
                                    <Card.Title>Salesforce Marketing Automation Tour</Card.Title>
                                    <Card.Text>A tour we created to guide the user through marketing techniques.</Card.Text>                          
                                </Card.Body>
                                <Button variant="primary" className="card-btn"><a href="https://marketing-automation-tour.herokuapp.com/" target="_blank" className="button-link" >Website <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a></Button>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} className="portfolio-card">
                            <Card style={{ width: '100%', height: '100%', border: 'none' }}>
                                <Card.Img variant="top" src={iannelli} />
                                <Card.Body>
                                    <Card.Title>Iannelli Construction</Card.Title>
                                    <Card.Text>An informational website for a construction company.</Card.Text>                                    
                                </Card.Body>
                                <Button variant="primary" className="card-btn"><a href="http://www.iannelliconstruction.com/" target="_blank" className="button-link" >Website <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a></Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
		)
	}
}

export default Portfolio;

export const Head = () => (
    <>
        <title>Louis Alemar | Front-End Developer</title>
        <script src="https://kit.fontawesome.com/458fac5c51.js" crossorigin="anonymous"></script>
    </>
)