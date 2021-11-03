import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => { //count eact of the item and then add 
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]); //if cart value changes this will refresh

  return (

    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>SHOE STORE</h2>
      </Link>
      <Link to="/cart">
      
        <div className={styles.cart__counter}><ShoppingCartIcon fontSize="large" /><sup>{cartCount}</sup></div>
      
      </Link>
    </div>

  );
};

const mapStateToProps = (state) => { 
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar); //we have to read the data
