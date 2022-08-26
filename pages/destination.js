import Head from "next/head";
import DestinationPage from "../components/destination-page/destination-page.component";

import styles from '../styles/destination.module.css'

const Destination = () => {
    return(
        <div className= {styles.destination}>
            <Head>
                <title>Destination</title>
            </Head>
            <DestinationPage/>
        </div>
    )
}

export default Destination;