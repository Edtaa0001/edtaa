import React from 'react'
import footerlogo from '../assets/footerlogo.png'
import headset from '../assets/headset.png'
import email from '../assets/email.png'
import chat from '../assets/chat.png'
import envelope from '../assets/envelope.png'
import youtube from '../assets/youtube.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'

const Footer = () => {
  return (
    <div className='py-6 px-4 md:px-0'>



        <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-24'>

        <div>
<img src={footerlogo} className='object-contain'/>

<div className='flex gap-x-4 mt-5'><img src={headset} className='object-contain mb-[40px]' />
<div>
<p>Finland</p>
<p>+358-40-123-4567</p>
<p>or see our complete list of <span className='underline'>local country numbers</span></p>
</div>

</div>

<div className='flex gap-x-4 mt-5'><img src={email} className='object-contain' /><p>Contact Us</p></div>
<div className='flex gap-x-4 mt-5'><img src={chat} className='object-contain' /><p>Chat Unavailable</p></div>

<div className='flex gap-x-9 mt-16'>
<img src={facebook} className='object-contain w-2' />
<img src={youtube} className='object-contain w-4' />
<img src={linkedin} className='object-contain w-4' />
<img src={envelope} className='object-contain w-4' />
</div>

</div>

        <div>
          <p className='text-xl font-semibold'>Quick Links</p>
          <p className='mt-5'>Trust Center</p>
          <p className='mt-3'>Find a Solution</p>
          <p className='mt-3'>Industries</p>
          <p className='mt-3'>Find a Partner</p>
          <p className='mt-3'>Trials and Demos</p>
          <p className='mt-3'>Find Services</p>
        </div>

        <div>
          <p className='text-xl font-semibold'>Trending</p>
          <p className='mt-5'>IUTO</p>
          <p className='mt-3'>What is GROW with EDTAA?</p>
          <p className='mt-3'>Microsoft Co-Pilot</p>
          <p className='mt-3'>Artificial Intelligence</p>
          <p className='mt-3'>Sustainability</p>
          <p className='mt-3'>Partner Ecosystem</p>
        </div>

        <div>
          <p className='text-xl font-semibold'>About EDTAA</p>
          <p className='mt-5'>Company Information</p>
          <p className='mt-3'>Worldwide Directory</p>
          <p className='mt-3'>Investor Relations</p>
          <p className='mt-3'>Careers</p>
          <p className='mt-3'>News and Press</p>
          <p className='mt-3'>Events</p>
          <p className='mt-3'>Customer Stories</p>
          <p className='mt-3'>Newsletters</p>
        </div>

        <div>
          <p className='text-xl font-semibold'>Site Information</p>
          <p className='mt-5'>Privacy</p>
          <p className='mt-3'>Terms of Use</p>
          <p className='mt-3'>Legal Disclosure</p>
          <p className='mt-3'>Copyright</p>
          <p className='mt-3'>Trademark</p>
          <p className='mt-3'>Sitemap</p>
          <p className='mt-3 underline'>Text View</p>
          <p className='mt-3 underline'>Cookie Preference</p>
        </div>
        

</div>

         </div>
  )
}

export default Footer