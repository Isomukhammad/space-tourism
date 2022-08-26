import styles from './page-buttons.module.scss';

const PageButtons = ({index, setIndex, info, path}) => {
    const {information} = info;
    console.log(information);

    return(
        <div className={`${path == 'technology' ? styles.buttonstechnology : styles.buttons}`}>
            {
                information.map((tab, i) => (
                    <div 
                        key = {i}
                        className= {`
                            ${
                                path == 'destination' ? (`${styles.planets} ${index == i ? styles.active : null}`) : null
                                || path == 'crew' ? (`${index == i ? styles.crewactive : null}`) : null || path == 'technology' ? (`${index == i ? styles.technologyactive : null}`) : null}
                                
                                ${styles.cursor} `
                        } 
                        onClick = {() => setIndex(i)}
                    >
                        {path == 'destination' ? <div className={styles.planet}>{tab.name}{path == 'crew' ? i : null}</div> : null || path == 'crew' ? <div className={styles.crew}></div> : null || path == 'technology' ? <div className={styles.technology}><span className={styles.span}>{i}</span></div> : null}
                    </div>
                ))
            }
        </div>
    )
}

export default PageButtons;