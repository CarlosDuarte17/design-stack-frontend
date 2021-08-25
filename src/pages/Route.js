import React, { lazy, Suspense } from 'react'
import {Route, Routes} from 'react-router-dom'

// import { UploadImage } from './UploadImage';
// import Home from './Home';
// import UploadImage from './UploadImage';
// import PostByTag from './PostByTag';
// import ModalInfo from '../components/ModalInfo';
const Home = lazy(() => import(`./Home`))
const UploadImage = lazy(() => import(`./UploadImage`))
const PostByTag = lazy(() => import('./PostByTag'))
const ModalInfo = lazy(() => import('../components/ModalInfo'))

export function AppRoutes() {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="uploads/new" element={<UploadImage />} />
                <Route path="tags/:tag" element={<PostByTag />} />
                <Route path="shots/:shot" element={<ModalInfo />} />
            </Routes>
        </Suspense>
    )
}
