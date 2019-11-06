import React from 'react';
import 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import Contact from './components/contact.js'
import NavBar from './components/NavBar.js'
import Main from './components/main.js'
import Store from './components/store.js'
import './css/App.css'
import './useWindowDimensions'
import NotFound from './components/NotFound.js'
import useWindowDimensions from "./useWindowDimensions";

function App() {
    const {height, width} = useWindowDimensions();

    return(
        <div>
            <NavBar/>
            <main>
                <div className='container-fluid'>
                    <section id="first" style={{height: height, width: width}}>
                        <Main name="main"/>
                    </section>
                    <section id="second" style={{height: height, width: width}}>
                        <Store name="store"/>
                    </section >
                    <section id="third" style={{height: height, width: width}}>
                        <Contact name="contact"/>
                    </section>
                </div>
            </main>
        </div>
    );
  // return (
  //   <>
  //       <NavBar/>
  //       <main className="container-fluid">
  //           <Switch>
  //               <Route exact path='/store' component={Store} />
  //               <Route exact path='/contact' component={Contact} />
  //               <Route exact path='/home' component={Main} />
  //               <Route exact path='/' >
  //                   <Redirect to="/home"/>
  //               </Route>
  //               <Route component={NotFound}/>
  //           </Switch>
  //       </main>
  //   </>
  // );
}

export default App;
