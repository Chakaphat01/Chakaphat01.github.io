import { Link } from "react-router";
import styles from "../styles/Navbar.module.css"
function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Link className={styles.title} to={''}> Home </Link>
            <Link className={styles.title} to={'about'}>About</Link>
            <Link className={styles.title} to={'Register'}> Register </Link>
            <Link className={styles.title} to={'NewRegister'}> Form </Link>
        </nav>
    )
}
export default Navbar;