import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Css/style.css'
import image from './Images/placeholder-images.jpg'
import {Link} from 'react-router-dom';

const HomeAbout = () => {
  return (
    <div className='paddingTop paddingBottom'>
      <Container>
        <Row>
            <Col Col sm = {6}>
                <h1 className='largeFont'><strong>Little Lemon</strong></h1>
                <h3 className='smallFont'>Singapore</h3>
                <div className='mediumFont alignJustify '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </Col>
            <Col sm ={6} className='alignCenter' >
                <img src={image} alt = 'restaurant_image' width='300px' height= '300px'/>
            </Col>
        </Row>
        <Row>
            <Link to= "/about">
                <button className='buttonColor marginTop' style={{width : "100%"}}>More Info</button>
            </Link>
        </Row>
      </Container>
    </div>
  )
}

export default HomeAbout