import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navigation from './components/navigation'
import { BrowserRouter as Router, Route} from "react-router-dom"; 
import L from 'react-loadable'

const Loading  = () => <div>Loading...</div>

const Loadable = (opts) => L({
  loading: Loading,
  ...opts
})

const AsyncHome = Loadable({
  loader: () => import('./pages/Hompege')
})

const AsyncRocket = Loadable({
  loader: () => import('./pages/Rocket')
})

const AsyncLaunches = Loadable({
  loader: () => import('./pages/Launches')
})

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navigation />
        <Route path="/Home" exact component={AsyncHome}/>
        <Route path="/Rocket" exact component={AsyncRocket}/>
        <Route path="/Launches" exact component={AsyncLaunches}/>
      </React.Fragment>
    </Router>
  );
}

export default App;
