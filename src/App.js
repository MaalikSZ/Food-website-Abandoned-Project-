import Header from './components/Header/Header';
import styles from './App.module.scss';
import FoodList from './components/FoodList/FoodList';
import { CartContextProvider } from './components/cart-context/CartContext';
import Opinions from './components/Opinions/Opinions';
import CenterDiv from './components/UI/CenterDiv/CenterDiv';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <div className={styles.app}>
            <CartContextProvider>
                <Header />
                <CenterDiv className={styles['bg-f']}>
                    <FoodList />
                </CenterDiv>
            </CartContextProvider>
            <CenterDiv className={styles['bg-f']}>
                <Opinions />
            </CenterDiv>
            <Footer />
        </div>
    );
}

export default App;
