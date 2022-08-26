import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { fetchData } from "../../utils/fetchData";

import PageTitle from "../page-title/page-title.component";
import PageButtons from "../page-buttons/page-buttons.component";
import PageDescription from "../page-description/page-description.component";

import Image from "next/image";

import styles from './destination-page.module.scss';

const DestinationPage = () => {
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
        { !isLoading ? (
            <div className = {styles.div}>
                <div className = {styles.first}>
                    <PageTitle info = {info}/>
                    <Image 
                        className = {styles.image} 
                        src = {info.information[index].images.png} 
                        width = '400px' 
                        height='400px' 
                        objectFit="contain" placeholder="blurDataUrl"
                    />
                </div>

                <div className={styles.second}>
                    <PageButtons 
                        setIndex={setIndex}
                        info = {info}
                        index = {index}
                        path = 'destination'
                    /> 
                    <PageDescription info = {info} index = {index}/>
                </div>
            </div>
        ) : null
        }
        </>
    )
}

export default DestinationPage;