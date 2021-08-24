import { useToast } from '@chakra-ui/react';
import { useRef } from 'react';

// Form more information visit https://chakra-ui.com/docs/feedback/toast

export function useCustomToast(){
    const toast = useToast();
    const toastIdRef = useRef();

    function showToast(options = {
        title: "title of toast",
        description: null,
        status: 'info',
        position: 'top-right',
        variant: 'solid',
        isClosable: true
    }) {
        toastIdRef.current = toast(options);
    };

    return {
        showToast
    };

}
