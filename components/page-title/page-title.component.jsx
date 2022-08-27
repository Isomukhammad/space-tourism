import { useEffect } from "react";

import styles from './page-title.module.scss';

const PageTitle = ({info}) => {
    const {id} = info;
    const title = {
        1: {description: 'PICK YOUR DESTINATION'},
        2: {description: 'MEET YOUR CREW'},
        3: {description: 'SPACE LAUNCH 101'},
    }
    return(
        <>
        <div className={styles.title}>
            <span className={styles.number}>0{id}</span> 
            <span className={styles.description}>{title[id].description}</span> 
        </div>
        </>
    )
}

export default PageTitle;