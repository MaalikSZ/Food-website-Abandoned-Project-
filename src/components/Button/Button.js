import styles from './Button.module.scss';
const Button = props =>{
    return <button style={{fontSize: `${props.fontSize}`}} className={styles.btn} onClick={props.onClick}>{props.children}</button>
}
export default Button;