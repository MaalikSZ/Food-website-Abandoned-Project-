import React from 'react';
const DishesContext = React.createContext([
    {
        name: 'Coleslaw',
        price: 4.99,
    },
    {
        name: 'Cheeseburger',
        price: 2.99,
    },
    {
        name: 'Kebab',
        price: 8.99,
    },
]);
export default DishesContext;