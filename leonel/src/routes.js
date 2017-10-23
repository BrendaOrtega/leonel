import React from 'react';
import Home from './Components/home/Home';
import Detail from './Components/card/Detail';
import {
    Switch,
    Route
} from 'react-router-dom';



const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/detail" component={Detail}/>
    </Switch>
);

export default Routes;
/**
 * Created by brendaortega on 23/10/17.
 */
