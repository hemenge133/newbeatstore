import React from 'react';
import 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './components/contact.js'
import NavBar from './components/NavBar.js'
import Main from './components/main.js'
import NotFound from './components/NotFound'
import Beats from './components/Beats'
import './css/App.css'
import './useWindowDimensions'
import useWindowDimensions from "./useWindowDimensions";
import { useInView } from 'react-intersection-observer';
import './css/bootstrap.min.css'
import Console from './components/Console'

function App() {
    const {height, width} = useWindowDimensions();
    const [mainref, mainView] = useInView({
        threshold: .7,
    });

    const heightRef = React.useRef();
    const [heightState, setHeightState] = React.useState(100);

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
                <Route exact path='/console' component={Console} />
                <Route exact path='/' >
                    <Redirect to="/home"/>
                </Route>
            </Switch>
        </main>
    </>
  );
}

export default App;
