import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './TopBar.css'
function TopBar(props) {
  let [title, setTitle] = useState("My");
  let [secondTitle, setSecondTitle] = useState('TodoList');
  return (
    <Navbar collapseOnSelect expand="lg"  >
      <Container style={{backgroundColor:'white'}}>
        <Navbar.Brand href="#home"
          style={{fontSize:"33px", color:'black'}}>
          {title}<span style={{ color: '#63bd51', fontSize: '35px' }}>{secondTitle}</span>
        </Navbar.Brand>
      </Container>
   </Navbar>
  );
}

export default TopBar;
