import React from 'react';
import { Route } from 'react-router-dom';

// components
import Login from './component/Login';
import Drive from './component/Drive';

const BaseRouter = () => {
    <div>
        <Route exact path='/' component={Login} />
        <Route exact path='/drive' component={Drive} />
    </div>
};

export default BaseRouter;