import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './Footer.css';
import Nav from 'react-bootstrap/Nav';
import kimsLogo from '../assets/kimslogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import bibimbap from '../assets/bibimbap.jpg';
import mandu from '../assets/mandu.jpg';
import tokPlate from '../assets/tokPlate.jpg';
import ramen from '../assets/ramen.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="text.light">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Kim's Table
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div
      className="background-footer"
      style={{
        backgroundColor: 'rgb(40,40,40)',
        backgroundSize: 'cover',
      }}>
      <p className="our-customer">our dear customer</p>
      <p className="our-customer-two">we welcome you at anytime.</p>
      <div>
        <div className="my-p">
          <p>Pages </p>
        </div>
        <div className="list-pages">
          <ul>
            <Nav.Item as="li" className="home-page">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>

            <br></br>

            <Nav.Item as="li" className="food-page">
              <Nav.Link href="/menu">Menu</Nav.Link>
            </Nav.Item>

            <br></br>

            <Nav.Item as="li" className="profile-page">
              <Nav.Link href="/Profile">Profile</Nav.Link>
            </Nav.Item>
          </ul>
        </div>
        <div className="my-secondP">
          <p>Learn more</p>
        </div>
        <div className="list-pages2">
          <ul>
            <Nav.Item as="li" className="about-page">
              <Nav.Link href="/About-us">About us</Nav.Link>
            </Nav.Item>

            <br></br>

            <Nav.Item as="li" className="contact-page">
              <Nav.Link href="/Contact-us">Contact us</Nav.Link>
            </Nav.Item>
          </ul>
        </div>
        <img
          src={kimsLogo}
          alt="img"
          width={150}
          height={150}
          className="logo-footer"
        />
        <div className="my-icons">
          <a href="/" className="moveFa">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/kims_table/" className="moveIn">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" className="moveTw">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      <Container maxWidth="sm" className="my-footer">
        <Typography variant="body1">All Rights Reserved .</Typography>
        <Copyright />
      </Container>

      <div className="all-list-images">
        <div className="list-images-one">
          <img
            src={bibimbap}
            alt="img"
            width={220}
            height={200}
            className="bimbap"
          />
          <img
            src={ramen}
            alt="img"
            width={220}
            height={200}
            className="ramen"
          />
        </div>
        <div className="list-images-two">
          <img
            src={mandu}
            alt="img"
            width={220}
            height={200}
            className="mandu"
          />
          <img
            src={tokPlate}
            alt="img"
            width={220}
            height={200}
            className="tok"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
