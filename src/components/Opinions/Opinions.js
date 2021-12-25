import Opinion from './Opinion/Opinion';
import styles from './Opinions.module.scss';
const INIT_OPINIONS = [
    {
        avatar: null,
        name: 'Jan',
        content: 'Dobre jedzenie',
    },
    {
        avatar: null,
        name: 'Jan',
        content: 'Dobre jedzenie',
    },
    {
        avatar: null,
        name: 'Jan',
        content: 'Dobre jedzenie',
    },
];
const Opinions = (props) => {
    return (
        <>
        <h1 className={styles.opinions}>Reviews</h1>
        <div className={styles.splitter}></div>
            {INIT_OPINIONS.map((element) => {
                return <Opinion user={element} />;
            })}
            ;
        </>
    );
};
export default Opinions;
