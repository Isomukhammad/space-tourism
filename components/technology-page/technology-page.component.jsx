import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { fetchData } from '../../utils/fetchData';
import PageButtons from '../page-buttons/page-buttons.component';
import PageDescription from '../page-description/page-description.component';

import PageTitle from '../page-title/page-title.component';

import styles from './technology-page.module.scss';

const TechnlogyPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [info, setInfo] = useState({
        id: null,
        information: {}
    });
    const {pathname} = useRouter();

    useEffect(() => {
        const path = pathname.replace('/', '')
        fetchData(path, setInfo);
        setIsLoading(false);
    }, [])

    return(
        <>
        {
            !isLoading ? (
                <>
                <PageTitle info = {info}/>
                <div className = {styles.div}>
                    <div className = {styles.first}>
                        <div className={styles.button}>
                            <PageButtons
                                setIndex={setIndex}
                                info = {info}
                                index = {index}
                                path = 'technology'
                            />
                            <PageDescription info = {info} index = {index} />
                        </div>
                    </div>
        
                    <div className = {styles.second}>
                        <Image 
                            className = {styles.image} 
                            src = {info.information[index].images.portrait} 
                            width = '400px' 
                            height='400px' 
                            objectFit="contain" placeholder="blurDataUrl"
                            alt = {info.information[index].name}
                        />
                    </div>
                </div>
                </>
            ) : null
        }
        </>
    )
}

export default TechnlogyPage;