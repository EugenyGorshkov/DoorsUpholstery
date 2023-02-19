import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames'

import arrow from '../../assets/image/triangle.png'// такая стрелка под вопросом

import styles from './Navigation.module.scss'

export const Navigation: React.FC = () => {
    const [subMenuActive, setSubMenuActive] = useState(false)

    const subMenuActiveHandler = () => {
        subMenuActive ? setSubMenuActive(false) : setSubMenuActive(true)
    }

    return (
        <>
            <nav className='flex container mx-auto text-center justify-center h-10 items-center'>
                <ul className='flex gap-5 items-center'>
                    <li><Link to='/'>Домашняя</Link></li>
                    <li
                        className='flex items-center cursor-pointer'
                        onClick={subMenuActiveHandler}
                    >Услуги<img src={arrow} alt="arrow" className='h-3 m-2' />
                    </li>
                    {/*????*/}
                    <li><Link to='/catalog'>Каталог</Link></li>
                    <li><Link to='/gallery'>Галлерея</Link></li>
                    <li><Link to='/elitegallery'>Галлерея VIP</Link></li> {/* тут все в доменю галлереи*/}
                    <li><Link to='/locks'>Замки</Link></li> {/* в услуги*/}
                     {/* в услуги*/}
                    <li><Link to='/about'>О нас</Link></li> {/*????*/}
                    <li><Link to='/contacts'>Контакты</Link></li>
                </ul>
            </nav>
            {/*  ============= subMenu =========== */}
            <nav className={cn('container mx-auto ' + styles.subMenuBody, subMenuActive ? styles.active : '')}>
                <ul className={cn(styles.subMenuList, subMenuActive ? styles.active : '')}>
                    <li><Link to='/price'>Цены</Link></li>
                    <li><Link to='/price'>Шумоизоляция дверей</Link></li>
                    <li><Link to='/price'>Ламинированные панели</Link></li>
                    <li><Link to='/price'>Оформление проема</Link></li>
                    <li><Link to='/price'>Перетяжка дверей</Link></li>
                    <li><Link to='/price'>Обивка негорючей винилиокожей</Link></li>
                    <li><Link to='/price'>Подогрев коробки</Link></li>
                    <li><Link to='/price'>Виброизоляция дверей</Link></li>
                    <li><Link to='/price'>Ремонт дверей</Link></li>
                    <li><Link to='/wall'>Обивка стен</Link></li>
                    <li><Link to='/price'>Замена замков</Link></li>
                    <li><Link to='/price'>Варианты рисунков</Link></li>
                    <li><Link to='/price'>Видеонаблюдение</Link></li>
                    <li><Link to='/price'>Обтяжка гвоздей и пуговиц</Link></li>
                    <li><Link to='/price'>Видео-инструкция</Link></li> {/* ??? не уверен в надобности данной страницы*/}
                </ul>
            </nav>
            {/*  ============= subMenu =========== */}
        </>
    )
}

