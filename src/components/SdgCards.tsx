
import React from 'react'

interface SdgCardsProps {
    title: string;
    subTitle: string;
    icon: React.ReactNode;
    description: string;
    bgColor: string;
}

export default function SdgCards({ title, subTitle, icon, description, bgColor }: SdgCardsProps) {
  return (
    <div className='card card-body shadow-2xl'>
        <div className={`p-4 flex flex-col mb-3 min-h-80  justify-around items-start gap-3 ${bgColor} rounded-3xl`}>
            <span className='text-white text-9xl' >{icon} </span>
            <h4 className='text-white text-5xl' >{title}</h4>
        </div>

        <div className='mb-3'>
            <h4 className='text-2xl font-bold mb-4'>{subTitle}</h4>
            <p className='text-gray-600'>{description}</p>
        </div>
    </div>
  )
}
