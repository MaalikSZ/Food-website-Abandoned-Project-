import styles from './Footer.module.scss';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Contact</h2>
                <div>+48 xxx xxx xxx</div>
            </div>
            <div>
                <h2>Location</h2>
                <div>62-800 Kalisz</div>
                <div>Czestochowska 99-105</div>
            </div>
            <div>
                <h2>About us</h2>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis pharetra dui vitae viverra tempus. Nam hendrerit
                    molestie tellus. Suspendisse ullamcorper euismod justo,
                    rhoncus finibus metus congue non. Cras id lacinia diam.
                    Nulla efficitur mi ante, condimentum feugiat ex luctus a. 
                </div>
            </div>
        </footer>
    );
};
export default Footer;
