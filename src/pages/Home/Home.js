import React from 'react';
import { Home as HomeContent } from '../../components/Home';
import { useQuery } from 'react-query';

import { getPosts } from '../../providers/post';
import { AppContext } from '../../AppContext';
import { useState } from 'react';


export function Home() {
    const [page, setPage] = useState(1);

    const { 
        isLoading,
        // isError,
        // error,
        data,
        isFetching,
        isPreviousData, 
    } = useQuery(['posts', page], () => getPosts(page), {
        keepPreviousData: true
    });

    return (
        <>
            <AppContext.Provider value={{ isLoading, isPreviousData, isFetching, page, data, setPage}} >
                <HomeContent />
            </AppContext.Provider>
        </>
    )
}