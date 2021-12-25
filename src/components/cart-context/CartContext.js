import React, { useContext, useState } from 'react';
import DishesContext from '../dishes-context/dishes-context';
const CartContext = React.createContext([]);

export const CartContextProvider = (props) => {
    const dishesCtx = useContext(DishesContext);
    const [cart, setCart] = useState(
        dishesCtx.map((element) => {
            return { name: element.name, price: element.price, amount: 0 };
        })
    );
    const onAddItemToCartHandler = (meal, amount) => {
        setCart((prevCart) => {
            console.log(prevCart);
            const newCart = prevCart.map((element) => {
                if (element.name === meal.name) {
                    element.amount = amount;
                }
                console.log(element);
                return element;
            });
            console.log(newCart);
            return newCart;
        });
    };

    return (
        <CartContext.Provider
            value={{
                cart: cart,
                onAddItemToCart: onAddItemToCartHandler,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
export default CartContext;
