import React, { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const { id, name, amount, price } = props.item;

  const removeItemHandler = () => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = () => {
    cartCtx.addItem({ ...props.item, amount: 1 });
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price.toFixed(2)}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
