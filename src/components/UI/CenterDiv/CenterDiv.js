import styles from './CenterDiv.module.scss';
const CenterDiv = props =>{
    return <div className={`${styles.center} ${props.className}`}>{props.children}</div>
}
export default CenterDiv;