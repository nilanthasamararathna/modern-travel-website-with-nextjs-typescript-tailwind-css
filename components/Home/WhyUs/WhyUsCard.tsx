import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
}

const WhyUsCard = ({image, title}:Props) => {
  return (
    <div>
        <Image src={image} alt="image" width={70} height={70} className="mx-auto"/>
        {/* Content */}
        <h1 className='text-lg text-gray-900 font-medium text-center mt-6'>{title}</h1>
        <p className='text-xs text-gray-700 font-medium text-center mt-2'>Lorem Ipsum is a piece of classical Latin literature from 45 BC</p>
    </div>
  )
}

export default WhyUsCard