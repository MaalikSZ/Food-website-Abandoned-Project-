import styles from './Opinion.module.scss';
import DefaultAvatar from '../../../assets/img/default-avatar.jpg';
const Opinion = (props) => {
    const checkUserAvatar = () =>{
        if(!props.user.avatar){
            props.user.avatar = DefaultAvatar;
        }
    }
    checkUserAvatar();
    return (
        <div className={styles.opinion}>
            <div className={styles.avatar}><img alt='user-avatar' src={props.user.avatar} /></div>
            <div className={styles.name}>{props.user.name}</div>
            <div className={styles.content}>{props.user.content}</div>
        </div>
    );
};
export default Opinion;