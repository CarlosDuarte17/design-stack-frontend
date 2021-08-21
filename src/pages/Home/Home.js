import React from 'react';
import { Home as HomeContent } from '../../components/Home';
import { useQuery } from 'react-query';

import { getPosts } from '../../providers/post';
import { AppContext } from '../../AppContext';


export function Home() {
    const { isLoading, isSuccess, data } = useQuery('posts2', getPosts);
    return (
        <>
            <AppContext.Provider value={{ isLoading, isSuccess, data }} >
                <HomeContent />
            </AppContext.Provider>
        </>
    )
}