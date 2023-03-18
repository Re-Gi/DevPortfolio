import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {

  return (
    <>
        <Navbar collapseOnSelect expand="sm" className="nav-outer-container mb-3">
          <Container className='nav-inner-container'>
            <Navbar.Brand>Rebecca Girndt</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto justify-content-end flex-grow-1">
                  <Link className='nav-link' to='/DevPortfolio/'>About</Link>
                  <Link className='nav-link' to='/DevPortfolio/projects'>Projects</Link>
                  <Link className='nav-link' to="/DevPortfolio/contact">Contact</Link>
                  <Link className='nav-link' to="/DevPortfolio/resume">Resume</Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default Header;