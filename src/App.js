import React from 'react';
import 'react-bootstrap';
//import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './components/contact.js'
import NavBar from './components/NavBar.js'
import Main from './components/main.js'
import Store from './components/store.js'
import './css/App.css'
import './useWindowDimensions'
import useWindowDimensions from "./useWindowDimensions";
import { useInView } from 'react-intersection-observer';

function App() {
    const {height, width} = useWindowDimensions();
    const [mainref, mainView] = useInView({
        threshold: .7,
    });
    const [storeref, storeView] = useInView({
        threshold: .7,
    });
    const [contactref, contactView] = useInView({
        threshold: .4,
    });
    return(
        <div>
            <NavBar/>
            <main>
                <div className='container-fluid'>
                    <section ref={mainref} id="first" style={{height: height/1.3, width: width}}>
                        <Main name="main" mainview={mainView}/>
                    </section>
                    <section ref={storeref} id="second" style={{height: height, width: width}}>
                        <Store name="store" storeview={storeView}/>
                    </section >
                    <section ref={contactref} id="third" style={{height: height/1.3, width: width}}>
                        <Contact name="contact" contactview={contactView}/>
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
