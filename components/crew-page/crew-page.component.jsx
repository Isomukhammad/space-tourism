import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { fetchData } from "../../utils/fetchData";

import PageDescription from "../page-description/page-description.component";
import PageTitle from "../page-title/page-title.component";

import styles from './crew-page.module.scss';
import Image from "next/image";
import PageButtons from "../page-buttons/page-buttons.component";

const CrewPage = () => {
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
        {!isLoading ? (
            <>
            <PageTitle info = {info}/>
            <div className={styles.div}>
                <div className={styles.first}>
                    <PageDescription info = {info} index = {index}/>
                    <PageButtons 
                        setIndex={setIndex}
                        info = {info}
                        index = {index}
                        path = 'crew'
                    />
                </div>

                <div className={styles.second}>
                    <Image
                        className = {styles.image} 
                        src = {info.information[index].images.png} 
                        width = '514' 
                        height='700px' 
                        objectFit="fill" placeholder="blurDataUrl"
                        alt = {info.information[index].name}
                    />
                </div>
            </div>
            </>
        ) : (
            null
        )}
        </>
    )
}

export default CrewPage;