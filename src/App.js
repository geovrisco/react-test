
import React, {useState, useEffect} from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import './main.css'

import { Provider } from 'react-redux'
import store from './store'; 

import {
    Home,
    Hero,
    Favourite
} from './views'

export const AppRouter = () =>(
    <Provider store={store}>
        <Switch>
            <Route exact path='/'> <Home></Home></Route>
            <Route path='/hero/:heroId'> <Hero></Hero></Route>
            <Route path ='/favourite'><Favourite></Favourite> </Route>
        </Switch>   
    </Provider>
) 

function App(){

    return(
        // <Provider store={store}>
            <div className="body">
                <span className="title blue">DOTO DUMMY</span>
                <Router>
                    <div className="body">
                        <nav>
                            <span>
                                <Link data-testid='btn-home' to="/"  className="trajan blue pad1">Home</Link>
                            </span>
                            <span>
                                <Link data-testid='btn-favesNav' to="/favourite"  className="trajan blue pad1">Favourite</Link>
                            </span>
                        </nav>
                        <AppRouter></AppRouter>
                        {/* <Switch>
                            <Route exact path='/'> <Home></Home></Route>
                            <Route path='/hero/:heroId'> <Hero></Hero></Route>
                            <Route path ='/favourite'><Favourite></Favourite> </Route>
                        </Switch> */}
                    </div>
                </Router>
            </div>
        // </Provider>
    )
}

export default App