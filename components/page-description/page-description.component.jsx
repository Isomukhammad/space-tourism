import { useEffect } from "react";

import styles from './page-description.module.scss';

const PageDescription = ({index, info}) => {
    const {name, description, distance, travel, role, bio} = info.information[index];
    const {id} = info;

    return(
        <div className={styles.div}>
            <div className={styles.role}>{role}</div>
            
            <div className={`${styles.title} ${bio ? styles.biotitle : null}`}>{name}</div>
            
            <div className={styles.info}>
                {`${
                    description ? description : null 
                        || 
                    bio ? bio : null
                }`
                }
            </div>
            {
                distance ? (
                    <div className={styles.additional}>
                        <div>
                            <p className={styles.subheading}>AVG. DISTANCE</p>
                            <p className={styles.number}>{distance}</p>
                        </div>
                        <div>
                            <p className={styles.subheading}>EST. TRAVEL TIME</p>
                            <p className={styles.number}>{travel}</p>
                        </div>
                    </div>
                ) : (null)
            }
        </div>
    )
}

export default PageDescription;