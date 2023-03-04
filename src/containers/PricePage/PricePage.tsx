import React from 'react';

export const PricePage: React.FC = () => {
    return (
        <div className='bg-gray-800'>
            <div className='container mx-auto lg:pt-32 pt-16 text-white'>
                <p className='text-right p-3 border-b-2'>Цены действительны по 31.12.2021г.</p>
                <div className='flex flex-col'>
                    {/* Обивка дверей */}
                    <div className='flex w-full justify-between border-b-2'>
                        <h2 className='basis-5/7 p-3 text-lg font-bold text-center'>Обивка дверей</h2>
                        <p className='basis-2/7 p-3 pr-10 text-right'>Цена, руб.</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Обивка деревянных дверей, цена за 1 сторону (без материалов)</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>1500</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Оклейка или обивка металлических дверей, цена за 1 сторону (без материалов)</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>1500</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Обивка дверей нестандартного размера</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>цену уточняйте по телефону</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Комплекты для обивки двери</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 1200</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Отделка двери ламинированной панелью</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>4500</p>
                    </div>
                    {/* Цены на дополнительные услуги по обивке дверей */}
                    <div className='flex w-full justify-between border-b-2'>
                        <h2 className='basis-5/7 p-3 text-lg font-bold text-center'>Цены на дополнительные услуги по обивке дверей</h2>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Утепляющий валик (герметизирующий) по периметру коробки деревянной двери<span className='text-red-700'>**</span></p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>600</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Декоративный валик по периметру двери<span className='text-red-700'>**</span></p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>500</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Утепляющий валик по периметру коробки металлической двери<span className='text-red-700'>**</span></p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>1500</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Дополнительный слой поролона, 10мм</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>200</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Дополнительный утеплитель ватин</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>200</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Дополнительный тепло-шумоизолирующий материал изолон сшитый, 8мм</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>700</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Наполнение внутренней полости двери тепло-шумоизоляцией</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 1000</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Утеплитель Лайттек, 20мм</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>700</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Обивочный наполнитель Холлкон, 20мм.</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>750</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Виброизоляция (для металлических дверей)</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 2000</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Обивка проёма между двумя дверями</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 1500</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Рисунок на плоскости деревянной двери (цена за 1крепежный элемент)</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>30</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Рисунок на плоскости деревянной двери с перетяжкой (цена за 1крепежный элемент)</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>40</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Рисунок на плоскости металлической двери, повтор (цена за 1 крепежный элемент)</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>50</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Рисунок на плоскости металлической двери, повтор с перетяжкой (цена за 1 крепежный элемент)</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>60</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Рисунок на плоскости металлической двери (цена за 1 крепежный элемент)</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>80</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Рисунок на плоскости металлической двери с перетяжкой(цена за 1 крепежный элемент)</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>100</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Уплотнитель по периметру металлической двери</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>400</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Демонтаж (снятие) старой обивки двери (1 сторона)</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 100</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Дополнительный выезд мастера для предварительного замера и выбора обивочного материала по каталогам<span className='text-red-700'>***</span></p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>500</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Выезд мастера по Москве для выполнения заказа по обивке дверей<span className='text-red-700'>****</span></p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right text-red-700'>бесплатно</p>
                    </div>
                    {/* Установка и замена замков */}
                    <div className='flex w-full justify-between border-b-2'>
                        <h2 className='basis-5/7 p-3 text-lg font-bold text-center'>Установка и замена замков</h2>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Установка накладного замка на деревянную дверь</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 500</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Замена врезного замка в деревянной или металлической двери без доработки посадочных отверстий</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>100</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Замена врезного замка в деревянной или металлической двери с доработкой посадочных отверстий</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 500</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Установка (врезка) замка в деревянную дверь</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 1000</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Установка (врезка) замка в металлическую дверь</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 1300</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Установка ночной задвижки</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>1000</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Установка электронного замка</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 2500</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Установка (врезка) / замена дверного глазка</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>300</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Изготовление дубликатов ключей для замков и домофонов</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 100</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Сварочные работы</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 1000</p>
                    </div>
                    {/* Обивка стен */}
                    <div className='flex w-full justify-between border-b-2'>
                        <h2 className='basis-5/7 p-3 text-lg font-bold text-center'>Обивка стен</h2>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Мягкие стеновые панели, м2</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 2000</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Обивка стен тканью, м2</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 3000</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Каретная стяжка, м2</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 3500</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Изготовление (обтяжка кожей или тканью) декоративных гвоздей, 1шт</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 10</p>
                    </div>
                    <div className='flex w-full justify-between border-b-2'>
                        <p className='basis-5/7 p-3'>Обтяжка пуговиц, 1шт</p>
                        <p className='basis-2/7 p-3 pr-10 text-lg font-bold text-right'>от 10</p>
                    </div>
                    <p className='pt-5 pb-5'>Стандартный комплект для обивки дверей:
                        <ul className='list-decimal pl-5'>
                            <li>Обивочный материал для одной стороны стандартной двери (винилискожа)</li>
                            <li>Поролон, толщина 10мм</li>
                            <li>Комплект крепежа (декоративные гвозди или клей)</li>
                        </ul>
                    </p>

                    <p className='pt-5 pb-5'><span className='text-red-700'>*Акция</span> — самое выгодное предложение по Москве: самая низкая цена на обивку входной двери! Подробности проведения акции узнавайте по указанным на сайте телефонам. Количество обивочного материала ограничено!</p>
                    <p className='pt-5 pb-5'><span className='text-red-700'>**</span> Утепляющий валик и декоративный валик изготавливаются из такого же материала, как и сама обивка двери. Цена за валик указана на весь периметр двери под ключ: материал плюс монтаж.</p>
                    <p className='pt-5 pb-5'><span className='text-red-700'>***</span> Вы можете сэкономить, сделав замер своей двери самостоятельно, и выбрав цвет обивочного материала по каталогу, представленному на нашем сайте.</p>
                    <p className='pt-5 pb-5'><span className='text-red-700'>****</span> Выезд мастера за пределы МКАД: 25 руб/км.</p>
                    <p className='pt-5 pb-5'>Цены на обивку дверей дермантином указаны в рублях без учёта обивочных материалов. Выбирайте любой подходящий комплект для обивки входных дверей, посмотрите указанную на него цену, при этом учитывая размеры дверного полотна, сложите со стоимостью работы, и Вы получите итоговую сумму. Для уточнения деталей и нюансов рекомендуем проконсультироваться с нашими специалистами.</p>
                    <p className='pt-5 pb-5'>Если у Вас дверь нестандартных размеров (высота двери больше 200см или ширина двери больше 90см) или состоит из нескольких частей, позвоните нам по телефону 8(495)973-03-61 и уточните цену на обшивку Вашей двери.</p>
                    <p className='pt-5 pb-5'>Стоимость дополнительных работ, не указанных в Прайс-листе, определяется мастером и согласовывается с заказчиком перед выполнением работ.</p>
                    <p className='pt-5 pb-5'>Обивка дверей: цена зависит от размеров дверного полотна и выбранного Вами обивочного материала. Обить дверь можно по довольно низкой цене, воспользовавшись нашей акцией.
                        Цены на обивку стен обусловлены прежде всего метражом: чем больше площадь обиваемой поверхности, тем ниже стоимость работы по обивке одного квадратного метра. Естественно, дизайн и используемые материалы играют не последнюю роль в формировании конечной цены.</p>
                    <p className='text-red-700 pt-5 pb-5'>Работаем по наличному
                        и безналичному расчёту.</p>
                </div>
            </div>
        </div>
    )
}
