import FoodItemCart from '../../FoodItemCart/FoodItemCart';
import { useState, useContext } from 'react';
import CartContext from '../../cart-context/CartContext';
import styles from './CartModal.module.scss';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../../Button/Button';
export const countSum = (array) => {
    let sum = 0;
    for (const element of array) {
        sum += element.amount * element.price;
    }
    return sum.toFixed(2);
};
const CartModal = (props) => {
    const cartCtx = useContext(CartContext);
    const settedCart = cartCtx.cart.filter((element) => {
        return element.amount !== 0;
    });
    const [summary, setSummary] = useState(countSum(settedCart));
    return (
        <>
            <Backdrop />
            <div className={styles.modal}>
                <div className={styles.title}>
                    <h2>{props.title}</h2>
                </div>
                <hr></hr>
                <div>
                    {cartCtx.cart.map((element) => {
                        if (element.amount !== 0) {
                            return (
                                <FoodItemCart
                                    setSummary={setSummary}
                                    key={element.name}
                                    name={element.name}
                                    price={element.price}
                                    amount={element.amount}
                                />
                            );
                        }
                    })}
                </div>
                <div className={styles['total-amount']}>Total amount: {summary}$</div>
                <div className={styles['buttons-control']}>
                    <Button
                        onClick={() => {
                            props.onCancel(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button>Order</Button>
                </div>
            </div>
        </>
    );
};
const ShowCartModal = (props) => {
    return ReactDOM.createPortal(
        <CartModal
            onCancel={props.onCancel}
            title={props.title}
            text={props.text}
        />,
        document.getElementById('modal-root')
    );
};
export default ShowCartModal;
