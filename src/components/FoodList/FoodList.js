import { useContext } from 'react';
import DishesContext from '../dishes-context/dishes-context';
import FoodCard from '../FoodCard/FoodCard';
import styles from './FoodList.module.scss';
const FoodList = () => {
    const dishesCtx = useContext(DishesContext);
    return (
        <>
        <h1 className={styles.white}>Menu</h1>
            <div className={styles['food-list__control']}>
            {dishesCtx.map((element) => {
                return <FoodCard key={element.name} food={element} />;
            })}
            </div>
        </>
    );
};
export default FoodList;
