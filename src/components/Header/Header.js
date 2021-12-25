import Nav from '../Nav/Nav';
import styles from './Header.module.scss';
const Header = () => {
    return (
        <div className={styles.header}>
            <div><h2 className={styles.title}>Food order</h2></div>
            <div><Nav /> </div>
        </div>
    );
};
export default Header;
