import {
  reducer as formReducer
} from 'redux-form'
import ThemeOptions from './ThemeOptions';
import Layout from './Layout';
import Auth from './Auth';
import ItemReducer from '../pages/Items/store/reducer/items.reducer';
import signup from './signup';
import user from './user'

export default {
  Auth,
  ThemeOptions,
  Layout,
  items: ItemReducer,
  signup,
  user,
  form: formReducer
};