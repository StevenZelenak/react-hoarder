import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.scss';

import fbConnection from '../helpers/data/connection';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import EditStuff from '../components/pages/EditStuff/EditStuff';
import MyStuff from '../components/pages/MyStuff/MyStuff';
import NewStuff from '../components/pages/NewStuff/NewStuff';
import SingleStuff from '../components/pages/SingleStuff/SingleStuff';


fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={ this.state.authed }/>
            <div className="container">
              <div className="row">
              <Switch>
                <PrivateRoute path='/home' component={Home} authed={this.state.authed}/>
                <PrivateRoute path='/stuff' component={MyStuff} authed={this.state.authed}/>
                <PrivateRoute path='/newstuff' component={NewStuff} authed={this.state.authed}/>
                <PrivateRoute path='/edit/:stuffId' component={EditStuff} authed={this.state.authed}/>
                <PrivateRoute path='/singlestuff/:stuffId' component={SingleStuff} authed={this.state.authed}/>
                <PublicRoute path='/auth' component={Auth} authed={this.state.authed}/>
                <Redirect from="*" to="/home" />
              </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
