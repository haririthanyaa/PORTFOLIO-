import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I Laksan a medium level front end with a medium beginning level.<br />Contact Me!! <br /> If Anyone need any help with a react project. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+919500353124");
          }}
        >Say Hello</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>LaKsAn</span></p>
      </Container>
    </div>
  )
}

export default Contactpage