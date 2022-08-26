import Link from 'next/link';
import styles from './homepage.module.scss';

const HomePage = () => {
    return(
        <div className = {styles.homepage}>
            <div>
                <p className = {styles.subheading}>
                    so, you want to travel to
                </p>

                <p className = {styles.heading}>
                    space
                </p>

                <p className = {styles.description}>
                    Let&rsquo;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&rsquo;ll give you a truly out of this world experience!
                </p>
            </div>
            <div className= {styles.explore}>
                <Link href = '/destination'>
                    <a className={styles.link}>explore</a>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;