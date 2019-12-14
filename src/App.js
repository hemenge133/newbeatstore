import React, { useState } from 'react';
import 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './components/Views/contact.js'
import NavBar from './components/NavBar.js'
import Main from './components/Views/main.js'
import NotFound from './components/Views/NotFound'
import Beats from './components/BeatList/Beats'
import './css/App.css'
import './useWindowDimensions'
import useWindowDimensions from "./useWindowDimensions";
import { useInView } from 'react-intersection-observer';
import './css/bootstrap.min.css'
import Console from './components/Views/Console'
import SingleBeat from "./components/Views/singleBeat"
import Login from './components/views/Login.js'



class App extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <>
                <header>
                    <NavBar/>
                </header>
                <main>
                    <Switch>
                        <Route exact path='/beats' component={Beats} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/home' component={Main} />
                        <Route exact path='/login' component={Login}/>
                        <Route exact path="/songs/:id" children={<SingleBeat />} />
                        <Route exact path='/' >
                            <Redirect to="/home"/>
                        </Route>
                    </Switch>
                </main>
            </>
        );
    }

}

export default App;
