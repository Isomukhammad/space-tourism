import Head from 'next/head'
import HomePage from '../components/homepage/homepage.component'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Space Tourism</title>
      </Head>
      <HomePage/> 
    </div>
  )
}
