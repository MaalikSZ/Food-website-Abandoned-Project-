import React, { useContext, useEffect, useState } from 'react';
import ShowModal from '../UI/Modal/Modal';
import CartContext from '../cart-context/CartContext';
import ShowCartModal from '../UI/CartModal/CartModal';
import styles from './Cart.module.scss'
import Button from '../Button/Button';
const countItems = (arr) => {
    let sum = 0;
    for (const element of arr) {
        sum += element.amount;
    }
    return sum;
};
const Cart = () => {
    const [isCartShowed, setIsCartShowed] = useState(false);
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    const cartCtx = useContext(CartContext);
    const checkCart = cartCtx.cart.filter((element) => {
        return element.amount !== 0;
    });
    const countedItems = countItems(checkCart);
    useEffect(() => {
        checkCart.length > 0 ? setIsCartEmpty(false) : setIsCartEmpty(true);
    }, [checkCart]);
    return (
        <>
            {isCartShowed ? (
                isCartEmpty ? (
                    <ShowModal
                        onCancel={setIsCartShowed}
                        title={`You didn't added any food.`}
                        text={`You can add meals right now.`}
                    />
                ) : (
                    <ShowCartModal onCancel={setIsCartShowed} title={`Cart`} />
                )
            ) : (
                ' '
            )}
            <Button
                fontSize="1.2rem"
                onClick={() => {
                    setIsCartShowed(true);
                }}
            >
                <img alt='Cart' className={styles['cart-icon']} src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"/>{countedItems > 0 ? `(${countedItems})` : ''}
            </Button>
        </>
    );
};
export default Cart;
