import React from 'react';
import {MapCard} from "@/components/ContactsPage/MapCard/MapCard";

export const ContactsPage: React.FC = () => {
    return (
        <>
            <div className='bg-[#EFE9DB]'>
                <div className='container mx-auto '>
                    <div className='flex flex-col lg:flex-row gap-8 justify-center py-3'>
                        <MapCard/>
                    </div>
                    <div className='flex flex-row justify-center gap-8 p-8'>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#C3C6B1]">
                            <div className="px-6 py-4">
                                <div className="text-xl mb-2">
                                    Если Вы хотите сделать заказ или у Вас возникли какие-либо вопросы по
                                    обивке дверей, стен или установке замков и Вам нужно проконсультироваться, звоните!
                                </div>
                                <p className="text-gray-700 text-base">
                                    Телефоны: <br/>
                                    8(495)973-03-61 <br/>
                                    8(906)058-74-91 <br/>
                                    8(499)178-20-74 <br/>
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#C3C6B1]">
                            <div className="px-6 py-4">
                                <div className="text-xl mb-2">
                                    Также Вы можете оформить заказ,
                                    написав нам на электронную почту по адресу:
                                </div>
                                <p className="text-gray-700 text-base">
                                    profobivka@yandex.ru
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#C3C6B1]">
                            <div className="px-6 py-4">
                                <div className="text-xl mb-2">
                                    Работаем по наличному
                                    и безналичному расчёту.
                                </div>
                                <p className="text-gray-700 text-base">
                                    Наш адрес: г. Москва, 4-й квартал Капотни, д.1 <br/>
                                    Ближайшие станции метро: Братиславская.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*<div>*/}
                    {/*    <p className='pt-5 pb-5'>*/}
                    {/*        Если Вы хотите сделать заказ или у Вас возникли какие-либо вопросы по*/}
                    {/*        обивке дверей, стен или установке замков и Вам нужно проконсультироваться, звоните нам по телефонам: <br/>*/}
                    {/*        8(495)973-03-61 <br/>*/}
                    {/*        8(906)058-74-91 <br/>*/}
                    {/*        8(499)178-20-74 <br/>*/}
                    {/*    </p>*/}
                    {/*    <p className='border-solid border-2 border-black rounded-md p-5'>*/}
                    {/*        Также Вы можете оформить заказ,*/}
                    {/*        написав нам на электронную почту по адресу:*/}
                    {/*        <span className='text-lg font-bold'> profobivka@yandex.ru </span>*/}
                    {/*        и указав в письме свой контактный телефон.</p>*/}
                    {/*    <p className='pt-5 pb-5'>Работаем по наличному*/}
                    {/*        и безналичному расчёту.</p>*/}
                    {/*    <p className='pt-5 pb-5'>Наш адрес: г. Москва, 4-й квартал Капотни, д.1</p>*/}
                    {/*    <p className='pt-5 pb-5'>Ближайшие станции метро: Братиславская.</p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}
