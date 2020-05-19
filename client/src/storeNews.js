import { createStore } from 'redux';
import NewsData from '././reducers/news.js'

const storeNews = createStore(NewsData);

export default storeNews;
