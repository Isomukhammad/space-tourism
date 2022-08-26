import Logo from '../logo/logo.component';
import Categories from '../categories/categories.component';

import styles from './navbar.module.scss';

const Navbar = () => {
    return(
        <div className={styles.navbarContainer}>
            <Logo/>
            <Categories/>
        </div>
    )
}

export default Navbar;