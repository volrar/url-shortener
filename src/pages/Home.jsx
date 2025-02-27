import React, { useState } from 'react'
import './Home.css';
import { Container, Stack, Button, Image } from 'react-bootstrap'
import hero from '../assets/illustration-working.svg';
import brand from '../assets/icon-brand-recognition.svg';
import record from '../assets/icon-detailed-records.svg';
import customize from '../assets/icon-fully-customizable.svg';
import URLShorten from "../components/URLShorten";

function Home() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleShorten = () => {
    if (!url.trim()) {
      console.log("No URL entered!"); // Debugging: Check if the function is running
      return;
    }
    console.log("Submitting URL:", url); // Debugging: See what URL is submitted
    setShortenedUrl(""); // Clear previous shortened URL
  };


  return (
    <main>
      <Container>

        <Container className='hero-container' fluid>

        <Container className='hero-image-container'>

          <Image src={hero} alt='illustration-working.svg' className='hero-image'/>

        </Container>      

          <Stack className='hero-text-container'>
            <h2 className='hero-title'>More than just shorter links</h2>
            <p className='hero-text'>Build your brand's recognition and get detailed insights on how your links are performing</p>
            <Button type="button" variant='' className='hero-button'>Get Started</Button>
          </Stack>

        </Container>

        <Container className='shorten-container'>
        <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL here"
      />
      <button onClick={handleShorten} disabled={!url.trim()}>
        Shorten
      </button>

      {/* Display shortening component */}
      <URLShorten url={url} onShorten={setShortenedUrl} />

      {shortenedUrl && (
        <p>
          Shortened URL:{" "}
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </p>
      )}
        </Container>

        <Container className='statistics-container'>

          <Stack className='statistics-intro-container'>
            <h2 className='m-4'>Advanced Statistics</h2>
            <p className=''>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </Stack>

        </Container>

        <Container className='statistics-articles'>

            <Stack className='article align-self-start'>

              <Container className='article-image-container'>
                <Image src={brand} alt='Brand Recognition' className='article-image'/>
              </Container>
               
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your conent.</p>
            </Stack>

            <Stack className='article align-self-center'>

            <Container className='article-image-container'>
              <Image src={record} alt='Detailed Records' className='article-image'/>
            </Container>

              <h3>Detailed Records</h3>
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </Stack>

            <Stack className='article align-self-end'>

              <Container className='article-image-container'>
                <Image src={customize} alt='Fully Customizable' className='article-image'/>
              </Container>
           
              <h3>Fully Customizable</h3>
              <p>Improve branch awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </Stack>

        </Container>

        <Container className='boost-container'>

          <Stack className='boost-content'>
            <h2>Boost your links today!</h2>
            <Button type='link' href='/' className='boost-button' >Get Started</Button>
          </Stack>

        </Container>

      </Container>
    </main>
  )
}

export default Home