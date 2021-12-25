import { useContext } from 'react';
import CartContext from '../cart-context/CartContext';
import { countSum } from '../UI/CartModal/CartModal';
import Button from '../Button/Button';
const FoodItemCart = (props) => {
    const cartCtx = useContext(CartContext);
    const onChangeHandler = (event) => {
        cartCtx.onAddItemToCart(
            { name: props.name, price: props.price },
            Number(event.target.value)
        );
        props.setSummary(countSum(cartCtx.cart));
    };
    return (
        <div>
            <div>
                {`${props.name}, ${props.price}$, `}
                {
                    <>
                        <input
                            onChange={onChangeHandler}
                            type="number"
                            min="1"
                            defaultValue={props.amount}
                        ></input>
                        <Button
                            onClick={() => {
                                cartCtx.onAddItemToCart(
                                    { name: props.name, price: props.price },
                                    0
                                );
                                props.setSummary(countSum(cartCtx.cart));
                            }}
                        >
                            Delete
                        </Button>
                    </>
                }
            </div>
        </div>
    );
};
export default FoodItemCart;
