import React from 'react';

import img150 from '@/assets/image/150x150.png'

import styles from './CardComponent.module.scss'

interface InjectedProps  {
    heading: string,
    text: string
}

export const CardComponent: React.FC<InjectedProps> = ({
    heading,
    text
}) => {
    return (
        <div className=' bg-orange-300 h-[320px] w-[280px] rounded-md'>
            <div className='flex flex-col items-center p-5 gap-2 text-center'>
                <img src={img150} alt="#" className='max-w-[80%]'/>
                <h3 className='font-bold text-xl'>{heading}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
