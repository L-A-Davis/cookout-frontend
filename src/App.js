import React, { Component } from 'react';
import './App.css';
import adapter from './adapter'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    auth: {
      currentUser: null,
      loggingIn: true
    }
  }

 setLoggedInUser = (user) => {
     localStorage.setItem('token', user.token)
     this.setState({
       auth: {
         currentUser: {
           email: user.email,
           id: user.id
         },
         loggingIn: false
       }
     })
     this.props.history.push('/profile')
  }

 removeLoggedInUser = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: { currentUser: null, loggingIn: false }
    })
    this.props.history.push('/login')
  }


componentDidMount() {
  const token = localStorage.getItem('token');
  if (token) {
    adapter.auth.getLoggedInUser().then(user => {
      if (user) {
        this.setState({ auth: {
          currentUser: user
        },
        loggingIn: false
      })
        console.log(`user: ${user.email}`)

      } else {
        this.setState({ auth: {
          currentUser: null,
          loggingIn: false
           } })
      }
    })
  } else {
    this.setState({
      auth: { loggingIn: false }
    })
  }
}

  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path='/login' render={ (routerProps) => {
        return <Login history={routerProps.history}
        setUser={this.setLoggedInUser} />
        }} />
        <Route exact path='/signup' render={ (routerProps) => {
         return <SignUp history={routerProps.history}
         setUser={this.setLoggedInUser} />
        }} />

       <Route exact path='/profile' render={ (routerProps) => {
          return <Profile auth={this.state.auth} history={routerProps.history}
          logOut={this.removeLoggedInUser}
          />
       }} />

       <Redirect exact from="/" to="/login" />
       <Redirect to="/login" />

      </Switch>

      </div>
    );
  }
}

export default withRouter(App);
