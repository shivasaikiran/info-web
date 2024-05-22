import React from 'react'
import Intro from '../Intro/Intro'
import Services from '../Services/Services'
import Works from '../Works/Works'
import Experience from '../Experience/Experience'
import Testimonial from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import ImageSlider from '../ImageSlider/ImageSlider'
import Slider1 from './Screenshot 2024-05-21 115929.png'
import Slider2 from './Screenshot 2024-05-21 115946.png'
import Slider3 from './Screenshot 2024-05-21 120003.png'
import Navbar from '../Navbar/Navbar'

const Landingapsge = () => {
    const slides = [
        {
          image:Slider1,
          title: 'WE CONSTRUCT YOUR BUSINESS TO EXTENT TO PROMINENCE',
          description: 'In the heart of one of the world’s leading management consulting firms, resides the passion and enthusiasm of the smart working and skilled staff that is ambitious towards their profession.',
        },
        {
          image:Slider2,
          title: 'A THOROUGHLY INTEGRATED, INTUITIVE SOFTWARE SOLUTION FOR HOME HEALTH CARE AGENCIES WITH EHR/EMR/EVV',
          description: 'In the heart of one of the world’s leading management consulting firms, resides the passion and enthusiasm of the smart working and skilled staff that is ambitious towards their profession.',
        },
        {
          image:Slider3,
          title: 'REAL-TIME TRACKING AND MONITORING PLATFORM WITH IOT ENABLED SOLUTION',
          description: 'In the heart of one of the world’s leading management consulting firms, resides the passion and enthusiasm of the smart working and skilled staff that is ambitious towards their profession.',
        },
      ];
  return (
    <div>
         <Navbar/>
        <ImageSlider slides={slides}/>
        <Intro/>
        <Services/>
        <Works/>
        <Experience/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Landingapsge