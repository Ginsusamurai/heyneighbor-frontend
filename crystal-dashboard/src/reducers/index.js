import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ThemeOptions from './ThemeOptions';
import Layout from './Layout';
import Auth from './Auth';
import item from './item';
import signup from './signup';
import user from './user';
import rental from './rental';

export default {
  Auth,
  ThemeOptions,
  Layout,
  item,
  signup,
  user,
  rental,
  form: formReducer
};