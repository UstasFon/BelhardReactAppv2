import React from 'react';
import ReactDOM from 'react-dom';
import storeUsers from './storeUser';
import { Provider } from 'react-redux';
import Header from './common/header/header';
import Background from './global/background/background.js';
import Container from './components/container/container.js';
import Routes from './routes/routes.js';

ReactDOM.render(
    <Provider store={storeUsers}>
        <Background>
            <Container>
                <Header/>
                <Routes/>
            </Container>
        </Background>
    </Provider>
    ,
    document.getElementById('root')
);


