import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ThemeOptions from './ThemeOptions';
import Layout from './Layout';
import Auth from './Auth';
import item from './item';


export default {
  Auth,
  ThemeOptions,
  Layout,
  item,
  form: formReducer
};