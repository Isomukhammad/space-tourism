import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './categories.module.scss';

const navigation = [
    {id: 1, titleNum: '00', title: 'HOME', path: '/'},
    {id: 2, titleNum: '01', title: 'DESTINATION', path: '/destination'},
    {id: 3, titleNum: '02', title: 'CREW', path: '/crew'},
    {id: 4, titleNum: '03', title: 'TECHNOLOGY', path: '/technology'}
]

const Categories = () => {
    const {pathname} = useRouter();

    return(
        <div className = {styles.categories}>
            {
                navigation.map(({id, title, titleNum, path}) => (
                    <Link key = {id} href = {path}>
                        <a className = {`${styles.link} ${pathname === path ? styles.active : null}`}>
                            <span className= {styles.span}>{titleNum}</span> {title}
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default Categories;