import {
  REMOVE_FROM_BASKET,
  ADD_TO_BASKET,
  INCREMENT,
  DECREMENT,
  ADD_TO_SAVED,
  REMOVE_FROM_SAVED,
  SAVED_NOTIFIER_REMOVE,
  INC,
  DEC,
  SAVE_ADDRESS,
  ADD_USER,
} from '../Actons/types';

const initialState = {
  basket: [],
  user: [],
  address: [],
  notifier: 0,
  savedNotifier: 0,
  saved: [],
  ALL_DATA: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.qty + amount, 0);

export const getSavedTotal = (saved) =>
  saved?.reduce((amount, item) => item.price * item.qty + amount, 0);

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVED_NOTIFIER_REMOVE:
      return {
        ...state,
        savedNotifier: state.savedNotifier - 1,
      };
    case 'QTY_REMOVE':
      return {
        ...state,
        notifier: state.notifier - 1,
      };
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.itemData],
        notifier: state.notifier + 1,
      };
    case 'ADD_TO_DATA':
      return {
        ...state,
        ALL_DATA: [...state.ALL_DATA, action.payload],
      };
    case ADD_TO_SAVED:
      return {
        ...state,
        saved: [...state.saved, action.itemData],
        savedNotifier: state.savedNotifier + 1,
      };
    case SAVE_ADDRESS:
      return {
        ...state,
        address: [...state.address, action.payload],
      };

    case INCREMENT:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id ? {...item, qty: item.qty + 1} : item,
        ),
      };

    case DECREMENT:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? {
                ...item,
                qty: item.qty !== 1 ? item.qty - 1 : 1,
              }
            : item,
        ),
      };
    case REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id,
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove item (id: ${action.id}) as it is not in the basket!`,
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case REMOVE_FROM_SAVED:
      const i = state.saved.findIndex(
        (savedItem) => savedItem.id === action.id,
      );
      let newSaved = [...state.saved];

      if (i >= 0) {
        newSaved.splice(i, 1);
      } else {
        console.warn(
          `Can't remove item (id: ${action.id}) as it is not in the basket!`,
        );
      }
      return {
        ...state,
        saved: newSaved,
      };

    case INC:
      return {
        ...state,
        saved: state.saved.map((item) =>
          item.id === action.id ? {...item, qty: item.qty + 1} : item,
        ),
      };

    case DEC:
      return {
        ...state,
        saved: state.saved.map((item) =>
          item.id === action.id
            ? {
                ...item,
                qty: item.qty !== 1 ? item.qty - 1 : 1,
              }
            : item,
        ),
      };
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
    case 'SEARCH_OPEN':
      return {
        ...state,
        searching: true,
      };
    case 'SEARCH_CLOSE':
      return {
        ...state,
        searching: false,
      };
    case 'EMPTY_SAVED_NOTIFIER':
      return {
        ...state,
        savedNotifier: 0,
      };
    default:
      return state;
  }
};

export default rootReducer;
