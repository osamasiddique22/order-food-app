// import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
// import CartContext from '../../store/cart-context';
import { useDispatch, useSelector } from 'react-redux';
import { minusItem, addItem } from '../../redux/Actions/MealsActions';

const Cart = (props) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(state => `Rs${state.mealsReducer.totalAmount.toFixed(2)}`);
  const items = useSelector(state => state.mealsReducer.items);

  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(minusItem(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(addItem({ ...item, amount: 1 }))
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
