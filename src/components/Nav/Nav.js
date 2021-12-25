import Cart from "../Cart/Cart";
import styles from './Nav.module.scss';
const Nav = (props) => {
    return (
        <nav>
            <ul className={styles.list}>
                <li><Cart /></li>
            </ul>
        </nav>
    );
};
export default Nav;
