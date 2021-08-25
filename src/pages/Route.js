import React, { lazy, Suspense } from 'react'
import {Route, Routes} from 'react-router-dom'


// import { UploadImage } from './UploadImage';
// import Home from './Home';
const Home = lazy(() => import(`./Home`))
const UploadImage = lazy(() => import(`./UploadImage`))
const PostByTag = lazy(() => import('./PostByTag'));

export function AppRoutes() {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="uploads/new" element={<UploadImage />} />
                <Route path="tags/:tag" element={<PostByTag />} />
            </Routes>
        </Suspense>
    )
}
