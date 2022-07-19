import React, { useState } from 'react';
import { connect } from 'react-redux';
import s from './App.module.scss';
import { ContentPage } from './components/ContentPage/ContentPage';
import { LogInPage } from './components/LogInPage/LogInPage';

function App({ store }) {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'));

  const mapStateToProps = (state) => {
    return {
      state,
      setIsLoggedIn,
    };
  };
  const mapStoreToProps = (dispatch) => {
    return {
      dispatch,
    };
  };

  const LogInPageContainer = connect(
    mapStateToProps,
    mapStoreToProps
  )(LogInPage);

  return (
    <div className={s.wrapper_App}>
      {isLoggedIn ? (
        <ContentPage setIsLoggedIn={setIsLoggedIn} store={store} />
      ) : (
        <LogInPageContainer />
      )}
    </div>
  );
}

export default App;
