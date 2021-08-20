import React from 'react';
import { Image, Icon } from '@chakra-ui/react';
import searchIcon from './search.svg';

export function SearchIcon() {
    return <Image src={searchIcon} />;
};

export function WorkIcon(props) {
    return (
        <Icon {...props} viewBox="0 0 20 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabIndex="-1" className="display-block fill-current icon-20">
            <path fillRule="evenodd" clipRule="evenodd" d="M15 6.001h3.334c.92 0 1.667.821 1.667 1.833v5.5H0v-5.5c0-1.012.747-1.833 1.667-1.833H5v-2.75C5 1.736 6.123.502 7.5.502h5c1.378 0 2.5 1.234 2.5 2.75v2.75zM5 15.167h15.001v6c0 1.104-.747 2-1.667 2H1.668c-.92 0-1.667-.896-1.667-2v-6h5zm1.333-9.166h7.334V3.25a.919.919 0 00-.918-.917H7.251a.919.919 0 00-.918.918V6z" fill="currentColor"></path>
        </Icon>
    )
    // return <Image color="gray.400" src={workIcon} h="20px" w="20px" />;
};

export function HeartIcon(props) {
    return (
        <Icon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
        </Icon>
    )
}
