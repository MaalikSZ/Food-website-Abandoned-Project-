import styles from './FoodCard.module.scss';
import { useContext, useRef } from 'react';
import CartContext from '../cart-context/CartContext';
import Button from '../Button/Button';
const FoodCard = (props) => {
    const cartCtx = useContext(CartContext);
    const inputRef = useRef();
    const onButtonClickHandler = () =>{
        cartCtx.onAddItemToCart(
            props.food,
            Number(inputRef.current.value)
        );
        inputRef.current.value = '0';
    }
    return (
        <div className={styles['food-card']}>
            <div className={styles['food-card__title']}>
                {props.food.name} - {props.food.price}${' '}
            </div>

            <div>
                <label htmlFor={props.food.name}>Amount: </label><input id={props.food.name} defaultValue='0' ref={inputRef} min='0' type="number" />
                <Button
                    onClick={onButtonClickHandler}
                >
                    Add to cart
                </Button>
            </div>
        </div>
    );
};
export default FoodCard;
