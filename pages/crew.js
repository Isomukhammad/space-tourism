import Head from "next/head";
import CrewPage from "../components/crew-page/crew-page.component";

import style from '../styles/crew.module.css'

const Crew = () => {
    return(
        <div className={style.crew}>
            <Head>
                <title>Crew</title>
            </Head>

            <CrewPage/>
        </div>
    )
}

export default Crew;