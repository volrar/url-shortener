import React from 'react'
import { Container, Image, Stack, Nav} from 'react-bootstrap';
import './Footer.css';
import logo from '../assets/logo.svg';
import facebook from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
import pinterest from '../assets/icon-pinterest.svg';
import instagram from '../assets/icon-instagram.svg';

function Footer() {
  return (
    <footer>
        <Container className="footer-content-container">

                <Image src={logo} alt="Shortly" className='footer-logo'/>

            <Container className='footer-link-container'>
                <Stack className='footer-links'>
                    <h4 className='footer-nav-title'>Features</h4>
                    <Nav className='footer-navigation'>
                        <Nav.Link href="Link Shortening">Link Shortening</Nav.Link>
                        <Nav.Link href="Branded Links">Branded Links</Nav.Link>
                        <Nav.Link href="Analytics">Analytics</Nav.Link>
                    </Nav>
                </Stack>
                <Stack className='footer-links'>
                <h4 className='footer-nav-title'>Resources</h4>
                    <Nav className='footer-navigation'>
                        <Nav.Link href="Blog">Blog</Nav.Link>
                        <Nav.Link href="Developers">Developers</Nav.Link>
                        <Nav.Link href="Support">Support</Nav.Link>
                    </Nav>
                </Stack>
                <Stack className='footer-links'>
                <h4 className='footer-nav-title'>Company</h4>
                    <Nav className='footer-navigation'>
                        <Nav.Link href="About">About</Nav.Link>
                        <Nav.Link href="Our Team">Our Team</Nav.Link>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                    </Nav>
                </Stack>
            </Container>

            <Container className='footer-social-container'>
                <Nav className='p-1'>
                    <Nav.Link href='/'>
                        <Image src={facebook} alt='Facebook'/>
                    </Nav.Link>
                    <Nav.Link href='/'>
                        <Image src={twitter} alt='Twitter' />
                    </Nav.Link>
                    <Nav.Link href='/'>
                        <Image src={pinterest} alt='Pinterest' />
                    </Nav.Link>
                    <Nav.Link href='/'>
                        <Image src={instagram} alt='Instagram' />
                    </Nav.Link>
                </Nav>
            </Container>

        </Container>
    </footer>
  )
}

export default Footer