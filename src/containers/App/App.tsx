import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RoutesConfig } from '@/routes';
import { Navigation } from '@/components/Navigation';

export const App: React.FC = () => {  
    return (
        <>
            <Navigation />
            <Routes>
            {RoutesConfig.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                element={route.element}
                />
            ))}
            </Routes>
        </>
    )
}

