import styles from './Backdrop.module.scss';
import ReactDOM from 'react-dom';
const Backdrop = () => {
    return ReactDOM.createPortal(
        <div className={styles.backdrop}></div>,
        document.getElementById('backdrop-root')
    );
};
export default Backdrop;
