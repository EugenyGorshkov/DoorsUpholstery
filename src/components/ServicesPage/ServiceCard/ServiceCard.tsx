import React from 'react';
import { NavLink } from 'react-router-dom';

interface ServiceCardProps {
    title: string,
    img: string,
    refTo: string,
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    img,
    refTo
}) => {

    const onButtonRedirectHandler = () => {

    }

    return (
        <>
            <div className='flex flex-col lg:max-w-sm gap-2'>
                <img src={img} alt="" className='lg:max-h-[450px] object-cover object-top'/>
                <h2 className='uppercase text-black font-sans font-semibold text-xl'>{title}</h2>
                <NavLink to={refTo} className={'flex justify-center items-center lg:h-16 lg:w-60 bg-black rounded text-lg font-sans'}>
                    Подробнее
                </NavLink>
            </div>
        </>
    )
}
