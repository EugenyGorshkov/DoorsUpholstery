import React from 'react';

export const ContactsPage: React.FC = () => {
    return (
        <>
            <div className='container mx-auto'>
                <p className='pt-5 pb-5'>Если Вы хотите сделать заказ или у Вас возникли какие-либо вопросы по обивке дверей, стен или установке замков и Вам нужно проконсультироваться, звоните нам по телефонам: <br />
                    8(495)973-03-61 <br />
                    8(906)058-74-91 <br />
                    8(499)178-20-74 <br />
                </p>
                <p className='border-solid border-2 border-black rounded-md p-5'>Также Вы можете оформить заказ, написав нам на электронную почту по адресу:
                    <span className='text-lg font-bold'> profobivka@yandex.ru </span>
                    и указав в письме свой контактный телефон.</p>
                <p className='pt-5 pb-5'>Работаем по наличному
                    и безналичному расчёту.</p>
                <p className='pt-5 pb-5'>Наш адрес: г. Москва, 4-й квартал Капотни, д.1</p>
                <p className='pt-5 pb-5'>Ближайшие станции метро: Братиславская.</p>
            </div>
        </>
    )
}
