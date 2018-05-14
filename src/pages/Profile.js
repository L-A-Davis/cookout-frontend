import React from 'react';
// import { Redirect } from 'react-router'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WithAuth from '../wrappers/WithAuth'
import { connect } from 'react-redux'
import { fetchExistingOrder } from '../actions'
import OrderForm from './OrderForm'
import BasicInfo from './BasicInfo'

class Profile extends React.Component {

  state = {
    showAdditionalDetails: false
  }

  componentDidMount() {
    this.props.auth.currentUser ?
    this.props.fetchExistingOrder(this.props.auth.currentUser.id) : null
  }

  render() {
    return (
      <div>
      <button onClick={this.props.logout}>Logout</button>
      <BasicInfo />
      {this.state.showAdditionalDetails  &&
        <OrderForm
        currentUser = {this.props.auth.currentUser}
        history={this.props.history}
        />
      }
      </div>
    )
  }

}

export default connect(state=> {return {currentOrder: state.currentOrder}}, { fetchExistingOrder})(WithAuth(Profile))


// order = {this.props.currentOrder}
