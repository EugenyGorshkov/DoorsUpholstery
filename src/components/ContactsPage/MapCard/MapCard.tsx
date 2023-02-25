import React from "react";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

export const MapCard = () => (
    <YMaps>
        <Map defaultState={{ center: [55.676984, 37.717754], zoom: 10 }} className='h-78 lg:h-[450px] w-[1280px] lg:w-[1280px]'>
            <Placemark geometry={[55.634400, 37.795277]}/>
        </Map>
    </YMaps>
)

