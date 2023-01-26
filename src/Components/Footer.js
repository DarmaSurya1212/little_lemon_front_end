import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='bg-dark text-center text-white' >
        <div style={{backgroundColor : 'rgb(57, 62, 70)'}}>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                <MDBBtn  floating className='m-1' href='https://www.linkedin.com/in/darmasuryawijaya/' role='button'>
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <MDBBtn floating className='m-1' href='https://github.com/DarmaSurya1212' role='button'>
                    <MDBIcon fab icon='github' />
                </MDBBtn>
                </section>
            </MDBContainer>
        <div className='text-center p-3' style={{backgroundColor : "#222831"}}>
            © 2023 Copyright:
            <a className='text-white' href='https://www.linkedin.com/in/darmasuryawijaya/'>
            Darma Surya Wijaya
            </a>
        </div>
      </div>
    </MDBFooter>
  )
}

export default Footer