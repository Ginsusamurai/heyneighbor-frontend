import {
  reducer as formReducer
} from 'redux-form'
import ThemeOptions from './ThemeOptions';
import Layout from './Layout';
import Auth from './Auth';
// import ItemReducer from '../pages/Items/store/reducer/items.reducer';
import signup from './signup';
import user from './user';
import rental from './rental';
import items from './item.js';

export default {
  Auth,
  ThemeOptions,
  Layout,
  // items: ItemReducer,
  items,
  signup,
  user,
  rental,
  form: formReducer
};