import { combineReducers } from "redux";
import UserData from './users.js';
import NewsData from './news.js'

const allReducers = combineReducers(
    {
        user: UserData,
        news: NewsData,
    }
);

export default allReducers;