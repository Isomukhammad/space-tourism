import Head from "next/head"

import TechnlogyPage from "../components/technology-page/technology-page.component";

import styles from '../styles/technology.module.css'

const Technology = () => {
    return(
        <div className={styles.technology}>
            <Head>
                <title>Technology</title>
            </Head>
            <TechnlogyPage/>
        </div>
    )
}

export default Technology;