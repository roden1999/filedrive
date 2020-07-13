import React, { useState, useEffect, useMemo } from 'react';
import { connect, Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { apihost } from './apihost';
// import { isMobile } from "react-device-detect";

//component
import UserContext from './component/context/UserContext';
import Drive from './component/Drive';
import Login from './component/Login';

function App() {
  //const isMobile = window.innerWidth <= 700;
  const [spinner, setSpinner] = useState(true);
  const loadingScreen = apihost + 'static/App_Data/phonebook-covidproj-loadingscreen.png';
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000)
  }, [spinner, setSpinner]);

  const providerValue = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin]);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Drive} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
      {/* <Dimmer active={spinner} inverted style={{ backgroundImage: `url(${loadingScreen})`, position: 'fixed', display: 'flex', justifyContent: 'center', backgroundSize: 'cover', width: '100%', height: '100%'}}>
      </Dimmer> */}
      {/* <UserContext.Provider value={providerValue}>
      {isLogin === false &&
        <Login />
      }

      {isLogin === true &&
        <Inventory />
      }
      </UserContext.Provider> */}
    </Provider>
  );
}

export default App;
