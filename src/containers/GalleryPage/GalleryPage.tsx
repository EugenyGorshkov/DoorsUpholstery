import React from 'react';
import {useQuery} from "@apollo/client";
import {FETCH_SAMPLES_GROUP} from "@/apollo/Samples";

export const GalleryPage:React.FC = () => {

    const {loading, error, data} = useQuery(FETCH_SAMPLES_GROUP)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error : {error.message}</p>

    return data.Samples.map(({name, group, picture}) => (
        <>
            <h3>{name}</h3>
            <h3>{group}</h3>
            <h3>{picture}</h3>
            {/*<div className='container mx-auto'>*/}
            {/*    <p className='pt-5 pb-5'>Здесь представлены фотографии дверей, обитых работниками нашей кампании. К каждой двери мастера-профессионалы находят свой индивидуальный подход, стараясь полностью удовлетворить потребности каждого заказчика. Обивка двери может нести в себе не только декоративную функцию, украшая интерьер, но и служить звукоизоляцией, существенно снижая уровень шума извне, а также создать тепловой барьер, не позволяющий сквознякам и холодному воздуху проникать в помещение, а теплу — не покидать его. Мы работаем, чтобы Вам было тепло и уютно!</p>*/}
            {/*    <p className='pt-5 pb-5'>Обратите внимание, что обивка дверей одним и тем же материалом может смотреться совершенно по-разному. Прежде всего это зависит от освещения и цветовой гаммы окружающей обстановки.</p>*/}
            {/*    <p className='pt-5 pb-5'>Фотографии обивки дверей помогут Вам сделать правильный выбор обивочного материала. Для удобства подбора обивки на дверь все фотографии подписаны, то есть, нажав на фото понравившейся двери, Вы сможете увидеть, каким материалом она обита.</p>*/}
            {/*</div>*/}
        </>
    ))
}

