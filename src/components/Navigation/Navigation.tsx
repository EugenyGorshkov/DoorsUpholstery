import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation:React.FC = () => {
    return (
        <nav className='flex container mx-auto text-center justify-center h-10 items-center'>
            <ul className='flex gap-5'>
                <li><Link to='/'>Домашняя</Link></li>
                <li><Link to='/price'>Цены</Link></li>
                <li><Link to='/catalog'>Каталог</Link></li>
                <li><Link to='/gallery'>Галлерея</Link></li>
                <li><Link to='/elitegallery'>Галлерея VIP</Link></li>
                <li><Link to='/locks'>Замки</Link></li>
                <li><Link to='/wall'>Обивка стен</Link></li>
                <li><Link to='/about'>О нас</Link></li>
                <li><Link to='/contacts'>Контакты</Link></li>
            </ul>
        </nav>
    )
}

