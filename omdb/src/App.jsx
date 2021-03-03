import React from 'react';
import './styles/App.css';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './redux/configureStore';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MoviesList from './components/MoviesList/MoviesList/MoviesList';
import MovieDetail from './components/MovieDetail/MovieDetail';

const store = configureStore();

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={MoviesList} />
            <Route path="/:id" exact component={MovieDetail} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
