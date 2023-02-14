import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../assets/image/triangle.png'  // такая стрелка под вопросом

export const Navigation:React.FC = () => {
    const [subMenuActive, setSubMenuActive] = useState(false)



    return (
        <nav className='flex container mx-auto text-center justify-center h-10 items-center'>
            <ul className='flex gap-5 items-center'>
                <li><Link to='/'>Домашняя</Link></li>
                <li className='flex items-center cursor-pointer' onClick={() => {}}>Услуги <img src={arrow} alt="arrow" className='h-3 m-2'/></li>
                {/*  ================ subMenu =========== */}
                <ul className='hidden'><li><Link to='/price'>Цены</Link></li></ul>
                {/*  ================ subMenu =========== */}
                 {/*????*/}
                <li><Link to='/catalog'>Каталог</Link></li>
                <li><Link to='/gallery'>Галлерея</Link></li>
                <li><Link to='/elitegallery'>Галлерея VIP</Link></li> {/* тут все в доменю галлереи*/}
                <li><Link to='/locks'>Замки</Link></li> {/* в услуги*/}
                <li><Link to='/wall'>Обивка стен</Link></li> {/* в услуги*/}
                <li><Link to='/about'>О нас</Link></li> {/*????*/}
                <li><Link to='/contacts'>Контакты</Link></li>
            </ul>
        </nav>
    )
}

