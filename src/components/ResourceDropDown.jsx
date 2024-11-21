import React from 'react'

const ResourceDropDown = () => {
  return (
    <div className='fixed inset-0 flex mt-[110px]  h-[500px] z-50'>
    <div className='bg-black w-full max-w-full mx-auto py-6 px-4'>
        <p className='font-semibold text-white text-4xl underline px-[125px]'>Resources</p>
      <div className='flex justify-evenly text-white mt-9'>
        {/* Your existing content */}
        <div>
          <p className='font-bold text-lg underline'>Industry</p>
          <p className='text-md mt-3 underline'>Charities</p>
          <p className='text-md mt-3 underline'>Accountants</p>
          <p className='text-md mt-3 underline'>Financial Services</p>
          <p className='text-md mt-3 underline'>Healthcare</p>
          <p className='text-md mt-3 underline'>Hospitality</p>
          <p className='text-md mt-3 underline'>Logistics</p>
          <p className='text-md mt-3 underline'>Pharma</p>
          <p className='text-md mt-3 underline'>Solicitors</p>
          <p className='text-md mt-3 underline'>Manufacturin</p>
        </div>

        <div>
          <p className='font-bold text-lg underline'>Case Study</p>
          <p className='text-md mt-3 underline'>Industry Solutions</p>
          <p className='text-md mt-3 underline'>Client Projects</p>
          <p className='text-md mt-3 underline'>Transformation Journeys</p>
          <p className='text-md mt-9 underline'>ROI Analysis</p>
          <p className='text-md mt-3 underline'>Case Study Videos</p>
          <p className='text-md mt-3 underline'>Customer Challenges</p>
          <p className='text-md mt-3 underline'>Innovation Highlights</p>
          <p className='text-md mt-3 underline'>Success</p>
          <p className='text-md mt-3 underline'>Before and After</p>
        </div>

        <div>
          <p className='font-bold text-lg underline'>White Papers</p>
          <p className='text-md mt-3 underline'>Industry Insights</p>
          <p className='text-md mt-3 underline'>Technology Trends</p>
          <p className='text-md mt-3 underline'>Best Practices</p>
          <p className='text-md mt-3 underline'>Research Reports</p>
          <p className='text-md mt-3 underline'>Technical Guides</p>
          <p className='text-md mt-3 underline'>Regulatory Compliance</p>
          <p className='font-bold text-lg mt-9 underline'>Webinars</p>
          <p className='text-md mt-3 underline'>Upcoming</p>
        </div>

        <div>
          <p className='font-bold text-lg underline'>E-books</p>
          <p className='text-md mt-3 underline'>Comprehensive Guides</p>
          <p className='text-md mt-3 underline'>Step-by-Step Tutorials</p>
          <p className='text-md mt-3 underline'>Industry Analysis</p>
          <p className='text-md mt-3 underline'>Success Blueprints</p>
          <p className='text-md mt-3 underline'>Strategy Playbooks</p>
          <p className='text-md mt-3 underline'>How-To Manuals</p>
          <p className='text-md mt-3 underline'>Process Automation</p>
        </div>

        <div>
          <p className='font-bold text-lg underline'>Blog</p>
          <p className='text-md mt-3 underline'>Latest News</p>
          <p className='text-md mt-3 underline'>Event Recaps</p>
          <p className='text-md mt-3 underline'>Announcements</p>
          <p className='font-bold text-lg mt-9 underline'>Infographics</p>
          <p className='text-md mt-3 underline'>Statistics</p>
          <p className='text-md mt-3 underline'>Process Workflows</p>
          <p className='text-md mt-3 underline'>Data Visualizations</p>
        </div>

        <div>
          <p className='font-bold text-md underline'>FAQS</p>
          <p className='text-md mt-3 underline'>General Questions</p>
          <p className='text-md mt-3 underline'>Billing and Payments</p>
          <p className='text-md mt-3 underline'>Onboarding</p>
          <p className='font-bold text-lg mt-9 underline'>Press Releases</p>
          <p className='text-md mt-3 underline'>Awards and Recognitions</p>
          <p className='text-md mt-3 underline'>Partnership Announcements</p>
          <p className='text-md mt-3 underline'>Media Coverage</p>
        </div>

      </div>
    </div>
  </div>
  )
}

export default ResourceDropDown