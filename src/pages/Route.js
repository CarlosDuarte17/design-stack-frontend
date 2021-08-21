import React, { lazy, Suspense } from 'react'
import {Route, Routes} from 'react-router-dom'

// import { UploadImage } from './UploadImage';
// import Home from './Home';
const Home = lazy(() => import(`./Home`))
const UploadImage = lazy(() => import(`./UploadImage`))

export function AppRoutes() {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="uploads/new" element={<UploadImage />} />
            </Routes>
        </Suspense>
    )
}
