import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import styles from './categories.module.scss';
import { useEffect, useState } from 'react';

const navigation = [
    {id: 1, titleNum: '00', title: 'HOME', path: '/'},
    {id: 2, titleNum: '01', title: 'DESTINATION', path: '/destination'},
    {id: 3, titleNum: '02', title: 'CREW', path: '/crew'},
    {id: 4, titleNum: '03', title: 'TECHNOLOGY', path: '/technology'}
]

const Categories = () => {
    const {pathname} = useRouter();
    const [IsMobileSized, setIsMobileSized] = useState(false);
    const [menuClosed, setMenuClosed] = useState(true);

    // useEffect(() => {
    //     const mediaWatcher = window.matchMedia("(max-width: 480px)").matches;
        
    //     if(mediaWatcher){
    //         setIsMobileSized(true);
    //     } 
    //     console.log(mediaWatcher)
    // }) 

    useEffect(() => {
        console.log(menuClosed);
    }, [menuClosed]);

    return(
        <div className = {styles.categories}>
            <div className={`${styles.button} ${!menuClosed ? (styles.hidden) : null}`} onClick = {() => setMenuClosed(false)}>
                <Image src = '/shared/icon-hamburger.svg' width = '20px' height = '20px' placeholder='blurDataURL'/>
            </div>

            <div 
                className={`${styles.menu} ${menuClosed ? (styles.hidden) : null}`}
            >
                <div className={styles.close} onClick = {() => {setMenuClosed(true)}}>
                <Image 
                    src = '/shared/icon-close.svg' 
                    width = '20px' 
                    height = '20px' 
                    placeholder='blurDataURL'
                />
                </div>
                <>
                {
                navigation.map(({id, title, titleNum, path}) => (
                    <Link key = {id} href = {path}>
                        <a className = {`${styles.link} ${pathname === path ? styles.active : null}`} onClick = {() => {setMenuClosed(true)}}>
                            <span className= {styles.span}>{titleNum}</span> {title}
                        </a>
                    </Link>
                ))
                }
                </>
            </div>
        </div>
    )
}

export default Categories;