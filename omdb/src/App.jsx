import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import MoviesList from './components/MoviesList/MoviesList';

const store = configureStore();

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Header />
        <MoviesList />
        {/* <Footer /> */}
      </Provider>
    </React.StrictMode>
  );
}

export default App;
