import * as actionTypes from "./shopping-types";
import shoeA from '../../images/shoeA.png'
import shoeB from '../../images/shoeB.png'
import shoeC from '../../images/shoeC.png'
import shoeD from '../../images/shoeD.png'
import shoeE from '../../images/shoeE.png'
import shoeF from '../../images/shoeF.png'
import shoeG from '../../images/shoeG.png'
import shoeH from '../../images/shoeH.png'
import shoeI from '../../images/shoeI.png'
import shoeJ from '../../images/shoeJ.png'
import shoeK from '../../images/shoeK.png'
import shoeL from '../../images/shoeL.png'

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "ShoeA",
      description:
        "A shoeA is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 15.0,
      image:
        shoeA,
    },
    {
      id: 2,
      title: "ShoeB",
      description:
        "A shoeB is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeB,
    },

    {
      id: 3,
      title: "ShoeC",
      description:
        "A shoeC is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeC,
    },
    {
      id: 4,
      title: "ShoeD",
      description:
        "A shoeD is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeD,
    },
    
    {
      id: 5,
      title: "ShoeE",
      description:
        "A shoeE is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeE,
    },
    
    {
      id: 6,
      title: "ShoeF",
      description:
        "A shoeF is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeF,
    },
    
    {
      id: 7,
      title: "ShoeG",
      description:
        "A shoeG is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeG,
    },
    {
      id: 8,
      title: "ShoeH",
      description:
        "A shoeH is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeH,
    },
    
    {
      id: 9,
      title: "ShoeI",
      description:
        "A shoeI is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeI,
    },
    {
      id: 10,
      title: "ShoeJ",
      description:
        "A shoeJ is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeJ,
    },
    {
      id: 11,
      title: "ShoeK",
      description:
        "A shoeK is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeK,
    },
    {
      id: 12,
      title: "ShoeL",
      description:
        "A shoeL is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
      price: 20.0,
      image: shoeL,
    },
    
    
    
    
  ],
  cart: [], //item, qty, //we will have qty under item  
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get Item data from products array
      const item = state.products.find(   // it will go through the array and check the id
        (product) => product.id === action.payload.id  //
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false  //it will return true when item exist
      );

      return {
        ...state,
        cart: inCart 
          ? state.cart.map((item) =>
              item.id === action.payload.id //if same item exist
                ? { ...item, qty: item.qty + 1 } // it will add with previous data & it will adjust the quantity
                 : item             //otherwise add the item
            )
          : [...state.cart, { ...item, qty: 1 }], //if item is added first time
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id), //it will return everything except this confition
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
