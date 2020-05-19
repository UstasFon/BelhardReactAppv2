import { createStore, applyMiddleware } from 'redux';
import UserData from './reducers/users';
import thunk from 'redux-thunk'

const storeUsers = createStore(UserData, applyMiddleware(thunk));

export default storeUsers;
