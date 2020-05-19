import React, { Component } from 'react';
import './home.scss'

class Home extends Component {
    render() {
        return(
            <div className="home_intro">
                <h1 className="home_title">Организация семинаров и коучингов <span
                    className="home_title__underline">под ключ</span></h1>
                <p className="home_text">Оставьте заявку до <b>10 октября</b> и получите в порадок кейтеринг <b>на 10 персон</b></p>
                <ul className="home_content">
                    <li className="home_item">Конференции</li>
                    <li className="home_item">Тимбилдинги и корпоративы</li>
                    <li className="home_item">Бизнес-завтраки</li>
                </ul>
            </div>
        );
    }
}

export default Home;