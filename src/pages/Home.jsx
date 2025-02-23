import React from 'react'
import './Home.css';
import { Container, Stack, Button, Image } from 'react-bootstrap'
import hero from '../assets/illustration-working.svg';
import brand from '../assets/icon-brand-recognition.svg';
import record from '../assets/icon-detailed-records.svg';
import customize from '../assets/icon-fully-customizable.svg';
import Footer from '../components/Footer';

function Home() {
  return (
    <main>
      <Container>
        <Container className='d-flex' fluid>
          <Stack className='w-50 p-5'>
            <h2 className='hero-title'>More than just shorter links</h2>
            <p className='hero-text'>Build your brand's recognition and get detailed insights on how your links are performing</p>
            <Button type="button" variant='' className='hero-button'>Get Started</Button>
          </Stack>
          <Image src={hero} alt='illustration-working.svg' className='hero-image'/>
        </Container>
        <Container className='shorten-container'>
            <input type='text' placeholder='Shorten a link here ...' />
            <Button type='button' className='shorten-button'>Shorten It!</Button>
        </Container>
        <Container>
          <Stack className='statistics-container'>
            <h2 className='m-auto'>Advanced Statistics</h2>
            <p className='m-auto'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </Stack>
        </Container>
        <Container className='statistics-articles'>
            <Stack className='w-50 p-4 m-3 align-self-start'>
                <Image src={brand} alt='Brand Recognition' className='w-25'/>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your conent.</p>
            </Stack>
            <Stack className='w-50 p-4 m-3 align-self-center'>
            <Image src={record} alt='Detailed Records' className='w-25'/>
              <h3>Detailed Records</h3>
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </Stack>
            <Stack className='w-50 p-4 m-3 align-self-end'>
            <Image src={customize} alt='Fully Customizable' className='w-25'/>
              <h3>Fully Customizable</h3>
              <p>Improve branc awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </Stack>
        </Container>
        <Container className='boost-container'>
          <Stack className='boost-content'>
            <h2 className='p-4 w-100'>Boost your links today!</h2>
            <Button type='link' href='/' className='w-25 m-auto' >Get Started</Button>
          </Stack>
        </Container>
      </Container>
    </main>
  )
}

export default Home