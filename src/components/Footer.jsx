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
        <Container className="d-flex p-4">

            <Container className='w-25 mt-4'>
                <Image src={logo} alt="Shortly" />
            </Container>

            <Container className='footer-link-container'>
                <Stack className='footer-links'>
                    <h4>Features</h4>
                    <Nav>
                        <Nav.Link href="Link Shortening">Link Shortening</Nav.Link>
                        <Nav.Link href="Branded Links">Branded Links</Nav.Link>
                        <Nav.Link href="Analytics">Analytics</Nav.Link>
                    </Nav>
                </Stack>
                <Stack className='footer-links'>
                <h4>Resources</h4>
                    <Nav>
                        <Nav.Link href="Blog">Blog</Nav.Link>
                        <Nav.Link href="Developers">Developers</Nav.Link>
                        <Nav.Link href="Support">Support</Nav.Link>
                    </Nav>
                </Stack>
                <Stack className='footer-links'>
                <h4>Company</h4>
                    <Nav>
                        <Nav.Link href="About">About</Nav.Link>
                        <Nav.Link href="Our Team">Our Team</Nav.Link>
                        <Nav.Link href="Careers">Careers</Nav.Link>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                    </Nav>
                </Stack>
            </Container>

            <Container className='footer-social-container'>
                <Nav className='mt-4'>
                    <Nav.Link href='/'>
                        <Image src={facebook} alt='Facebook' />
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