import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Css/style.css'
import image from './Images/placeholder-images.jpg'

const WeeklySpecial = () => {
  return (
    <div className='paddingTop'>
    <Container>
      <Row>
        <Col sm = {10} >
          <h1 className='largeFont'><strong>Weekly Special</strong></h1>
        </Col>
        <Col  sm ={2} className='alignRight'>
            <Link to ="/Menu">
                <button className='buttonColor' style={{width : '100%'}}>Online Menu</button>
            </Link>
        </Col>
      </Row>
    </Container>

    <Container>
        <CardGroup>
        <Card style={{marginLeft : "5px", marginRight :"5px"}} bg='dark' text='dark' border ='dark'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>
                <Row>
                    <Col sm={9}>
                    Food Name
                    </Col>
                    <Col sm={3}>
                    $ -
                    </Col>
                </Row>
            </Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <Link to ="/order-online">
                <button className='buttonColor' style={{width : '100%'}}>Order Now</button>
            </Link>
            </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{marginLeft : "5px", marginRight :"5px"}} bg='dark' text='dark' border ='dark'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>
                <Row>
                    <Col sm={9}>
                    Food Name
                    </Col>
                    <Col sm={3}>
                    $ -
                    </Col>
                </Row>
            </Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <Link to ="/order-online">
                <button className='buttonColor' style={{width : '100%'}}>Order Now</button>
            </Link>
            </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{marginLeft : "5px", marginRight :"5px"}} bg='dark' text='dark' border ='dark'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>
                <Row>
                    <Col sm={9}>
                    Food Name
                    </Col>
                    <Col sm={3}>
                    $ -
                    </Col>
                </Row>
            </Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <Link to ="/order-online">
                <button className='buttonColor' style={{width : '100%'}}>Order Now</button>
            </Link>
            </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
    </Container>

  </div>
  )
}

export default WeeklySpecial