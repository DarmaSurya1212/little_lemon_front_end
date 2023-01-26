import React from 'react'
import './Css/style.css'
import image from './Images/placeholder-images.jpg'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Container } from 'react-bootstrap';

const Testimonial = () => {
  return (
    <div className='marginTop paddingBottom otherBackground'>
      <Container>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center t">
            <h3 className="fw-bold mb-4">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol md="4" className="mb-4 mb-md-0">
            <MDBCard>
              <MDBCardBody className="py-4 mt-2">
                <div className="d-flex justify-content-center mb-4 blackText">
                  <img
                    src= {image}
                    alt = "People"
                    className="rounded-circle shadow-1-strong"
                    width="100"
                    height="100"
                  />
                </div>
                <h5 className="font-weight-bold blackText">Teresa May</h5>
                <h6 className="font-weight-bold my-3 blackText">Founder at ET Company</h6>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-center blackText"
                >
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star-half-alt" size="sm" color="info" />
                  </li>
                </MDBTypography>
                <p className="mb-2 blackText">
                  <MDBIcon fas icon="quote-left" className="pe-2 blackText" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4 mb-md-0">
            <MDBCard>
              <MDBCardBody className="py-4 mt-2">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src= {image}
                    alt = "People"
                    className="rounded-circle shadow-1-strong"
                    width="100"
                    height="100"
                  />
                </div>
                <h5 className="font-weight-bold blackText">Maggie McLoan</h5>
                <h6 className="font-weight-bold my-3 blackText">
                  Photographer at Studio LA
                </h6>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-center"
                >
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                </MDBTypography>
                <p className="mb-2 blackText">
                  <MDBIcon fas icon="quote-left" className="pe-2 blackText" />
                  Autem, totam debitis suscipit saepe sapiente magnam officiis
                  quaerat necessitatibus odio assumenda perferendis labore
                  laboriosam.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4 mb-md-0">
            <MDBCard>
              <MDBCardBody className="py-4 mt-2">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src= {image}
                    alt = "People"
                    className="rounded-circle shadow-1-strong"
                    width="100"
                    height="100"
                  />
                </div>
                <h5 className="font-weight-bold blackText">Alexa Horwitz</h5>
                <h6 className="font-weight-bold my-3 blackText">
                  Front-end Developer in NY
                </h6>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-center"
                >
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star" size="sm" color="info" />
                  </li>
                  <li>
                    <MDBIcon far icon="star" size="sm" color="info" />
                  </li>
                </MDBTypography>
                <p className="mb-2 blackText">
                  <MDBIcon fas icon="quote-left" className="pe-2 blackText" />
                  Cras sit amet nibh libero, in gravida nulla metus scelerisque
                  ante sollicitudin commodo cras purus odio, vestibulum in tempus
                  viverra turpis.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </Container>
    </div>
  )
}

export default Testimonial