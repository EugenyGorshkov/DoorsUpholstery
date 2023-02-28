import React from 'react';
import {Link} from 'react-router-dom';

import {CallBackForm} from '@/components/CallBackForm';
import {CardComponent} from '@/components/HomePage/CardComponent';
import priceImg from '/src/assets/assetAbout/about_6.jpg'

import bgImg from '@/assets/image/home-1.jpg' // над пикчей нужно посидеть она убогая

export const HomePage: React.FC = () => {
    return (
        <>
            {/*====== background =====*/}
            {/*<section className='w-full'>*/}
            {/*    /!*<img src={bgImg} alt="" className='w-full' />*!/*/}
            {/*    <div className='flex flex-col justify-center items-end bg-home-picture1 bg-cover h-[620px]'>*/}
            {/*        <div className='backdrop-blur-lg rounded-xl'>*/}
            {/*            <p className='text-center pr-10 text-8xl text-amber-50'>Обивка Дверей</p>*/}
            {/*            <p className='text-end pr-10 pt-5 text-xl text-amber-50'>Новая жизнь старым вещам</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className="relative bg-home-picture1 bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/50 sm:to-white/105"></div>
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">Обивка Дверей
                            <strong className="block font-extrabold text-blue-900">Домашний уют</strong>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">Новая жизнь старым вещам</p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="#"
                                className="block w-full rounded bg-blue-900 px-12 py-3 text-sm font-medium text-white
                                shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                Свяжись с нами
                            </a>
                            <Link to='/about'
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-900
                                shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">Узнать больше
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/*====== background =====*/}
            <div className='container mx-auto mt-12'>
                <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
                    <img
                        alt="Trainer"
                        src={priceImg}
                        className="h-32 w-full object-cover md:h-full"
                    />
                    <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                        <p className="text-sm font-semibold uppercase tracking-widest">
                            Успей получить
                        </p>

                        <h2 className="mt-6 font-black uppercase">
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
        Скидка 20%
      </span>

                            <span className="mt-2 block text-sm">При заказе обивки от 2-х дверей</span>
                        </h2>

                        <a
                            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                            href=""
                        >
                            Позвонить
                        </a>

                        <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                            Offer valid until 24th March, 2021 *
                        </p>
                    </div>
                </section>
                <section className=''>
                    <h2 className='text-center text-lg font-bold'>Обивка входных дверей</h2>
                    <p className='pt-5 pb-5'>
                        Наша компания предлагает профессиональные услуги по обивке дверей. Вам требуется поменять
                        устаревший изношенный материал или обить свежеустановленную дверь? Позвоните нам по телефону
                        8(495)973-03-61 и мастера с многолетним опытом дадут подробные консультации и безупречно
                        выполнят все необходимые работы. <br/>
                    </p>
                    <p className='pt-5 pb-5'>
                        В <Link to='/catalog'
                                className='text-red-400 cursor-pointer hover:text-zinc-900'>каталоге</Link> Вы без
                        особых проблем подберёте цвет отделки таким образом, чтобы он сочетался с другими предметами
                        интерьера Вашей квартиры или иного помещения. Это вполне возможно благодаря самому большому
                        ассортименту обивочных материалов в Москве, представленному на нашем сайте. Но обивка входной
                        двери не ограничивается лишь декоративной составляющей. По Вашему желанию, мы сможем дополнить
                        её такими полезными функциями, как шумоизоляция и утепление с помощью современных наполнителей и
                        технологических моментов.
                    </p>
                    <p className='border-solid border-2 border-black rounded-md pt-5 pb-5 pl-2 pr-2'>
                        Обслуживаем и выполняем заказы во всех районах города Москвы. Также, выезжаем по разным
                        направлениям Подмосковья. Помимо этого, возможен выезд специалиста на более дальние расстояния
                        за пределы Московской области. В этом случае цена на обивку обсуждается и оговаривается в
                        персональном порядке.
                    </p>
                </section>
                <section className='pt-7'>
                    <h2 className='text-center text-lg font-bold'>Варианты обшивки</h2>
                    <p className='pt-5 pb-5'>Мы можем предложить несколько вариантов и способов отделки входных и
                        межкомнатных дверей. От ровной и гладкой поверхности недорогого дермантина с минимальным слоем
                        поролона до самой красивой, элитной, престижной и изысканной каретной стяжки с использованием
                        натуральной кожи или алькантары, а также другие эксклюзивные дизайнерские приёмы обшивки дверей:
                        <ul className='list-disc pl-5'>
                            <li>классические рельефные рисунки с большими декоративными гвоздями либо стразами</li>
                            <li>нанесение узора с помощью молдингов</li>
                            <li>оформление в виде отдельных обтянутых мягких кожаных панелей, сложенных мозаикой и так
                                далее.
                            </li>
                        </ul>
                        Квалификация, навыки и умения наших мастеров позволят обить дверь по индивидуальному заказу
                        любой степени сложности, удовлетворив вкус и потребности даже самых изощрённых клиентов.
                    </p>
                </section>
                <section>
                    <h2 className='text-center text-lg font-bold'>Услуги</h2>
                    <p className='pt-5 pb-5'>Производим полнейший комплекс услуг по доработке, ремонту, модернизации и
                        улучшению показателей деревянных и металлических дверей разнообразных типов и конструкций.
                        Помимо перетяжки дверей винилискожей, работники нашей компании смогут:
                        <ul className='list-disc pl-5'>
                            <li>установить замки различной степени взломостойкости и конфигураций,</li>
                            <li>отрегулировать петли,</li>
                            <li>заменить или врезать глазок,</li>
                            <li>выполнить утепление двери,</li>
                            <li>обшить ламинатом,</li>
                            <li>облагородить и звукоизолировать проём,</li>
                            <li>перетянуть наличники с доборами,</li>
                            <li>покрасить металлическую коробку и многое другое.</li>
                        </ul>
                        Грамотно и мастерски проведённая обивка входных дверей надолго принесёт уют в дом и будет
                        радовать глаз.
                    </p>
                </section>
                <section>
                    <h2 className='text-center text-lg font-bold'>Обивка двери дермантином</h2>
                    <p className='pt-5 pb-5'>Обивка дверей дермантином недорого обходится в отличие от других покрытий.
                        Это наиболее быстрый, экономически выгодный и проверенный способ отделки. Его предпочитают люди,
                        рационально и разумно оперирующие не только своим бюджетом, но и свободным временем. Фактически,
                        замена обивки обойдётся намного более дёшево, нежели монтаж новой железной двери. Ведь не стоит
                        забывать о том, что для этого потребуется вынимать старую коробку, что чревато частичным
                        разрушением прилегающего пространства и последующими ремонтными мероприятиями и отделочными
                        работами с сопутствующими расходами, которые изначально совершенно не планировались.</p>
                    <p className='pt-5 pb-5'>Можно попробовать поменять обшивку двери дермантином своими руками,
                        располагая сноровкой и прямотой верхних конечностей, но гораздо целесообразней доверить эту
                        процедуру профессионалу своего дела, и невзрачная обшарпанная дверь обретёт новую жизнь и
                        засияет свежими красками.</p>
                    <p className='pt-5 pb-5'>Кроме дермантина, у нас в наличии Вы всегда найдёте:
                        <ul className='list-disc pl-5'>
                            <li>натуральную и искусственную кожу (кожзам),</li>
                            <li>нежную замшу,</li>
                            <li>долговечную экокожу всевозможных оттенков и цветовых решений,</li>
                            <li>прочную винилискожу различного тиснения и фактуры,</li>
                            <li>множество мебельных тканей, которые отлично подойдут для обивки металлической и
                                деревянной двери.
                            </li>
                        </ul>
                    </p>
                    <p className='pt-5 pb-5'>Важно! При проведении реставрационных и ремонтных работ опытному
                        мастеру-обивщику вовсе не нужно снимать дверь с петель. Перетяжка делается на дому, по месту и
                        на весу.</p>
                </section>
                <section>
                    <CallBackForm/>
                </section>
                <section className='flex justify-around'>
                    <CardComponent heading='Услуги' text='Обивка дверей дермантином, обивка стен, замена замков'/>
                    <CardComponent heading='Качество' text='Качественная работа от мастеров своего дела гарантируем'/>
                    <CardComponent heading='Оплата' text='Оплата наличными или по карте принимаем любые варианты'/>
                </section>

            </div>
        </>
    )
}
