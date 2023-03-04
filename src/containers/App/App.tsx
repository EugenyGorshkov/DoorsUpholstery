import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import cn from 'classnames'

import { RoutesConfig } from '@/routes';
import { Navigation } from '@/components/Navigation';
import {Footer} from "@/components/Footer/Footer";

import styles from './App.module.scss'

export const App: React.FC = () => {  

    return (
        <>
            <Navigation/>
            <Routes>
            {RoutesConfig.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                element={route.element}
                />
            ))}
            </Routes>
            <Footer/>
        </>
    )
}

