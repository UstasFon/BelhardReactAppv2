import React, { Component } from 'react';
import { connect } from 'react-redux';
import storeNews from "../../storeNews.js";
import './news.scss';

class News extends Component {
    showNews() {
        return this.props.news.getState().map((news) => {
            return(
                <div className="news_wrapper">
                    <h1 className="news_text">{news.title}</h1>
                    <img className="news_image" src={news.image} alt=""/>
                    <p className="news_text">{news.text}</p>
                </div>
            )
        })
    }
    render() {
        return(
            <div className="news">
                {this.showNews()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: storeNews
    }
}

export default connect(mapStateToProps)(News);