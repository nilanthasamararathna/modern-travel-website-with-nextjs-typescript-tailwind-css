import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyUsCard from './WhyUsCard'

const WhyUs = () => {
  return (
    <div className='pt-16 pb-24'>
        {/* Section Heading */}
        <SectionHeading heading="Why Choose Us" subHeading="Select the best for you"/>
        <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        {/* Why Us Card */}
        <div>
            <WhyUsCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div>
            <WhyUsCard image="/images/c2.svg" title="Easy and Quick Booking" />
        </div>
        <div>
            <WhyUsCard image="/images/c3.svg" title="Customer Care 24/7" />
        </div>           
       </div>
    </div>
  )
}

export default WhyUs