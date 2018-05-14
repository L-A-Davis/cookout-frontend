import React from 'react';
import { connect } from "react-redux";
import { updateOrderForm, saveUpdatedOrder, newOrderInfo } from '../actions'

class OrderForm extends React.Component {

  handleChange = (e) => {
    this.props.updateOrderForm({
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveUpdatedOrder(this.props.currentOrder)
  }

render () {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
    <label className="form-label"># Attending:</label>
      <input
        type="number"
        name="people"
        value={this.props.currentOrder.people}
        onChange={this.handleChange}
        />
    <label className="form-label"># of Burgers we want to eat:</label>
      <input
        type="number"
        min='0'
        max='5'
        step='1'
        name="burgers"
        value={this.props.currentOrder.burgers}
        onChange={this.handleChange}
        />
    <label className="form-label"># of Turkey Burgers we want to eat:</label>
      <input
        type="number"
        min='0'
        max='5'
        step='1'
        name="turkey_burgers"
        value={this.props.currentOrder.turkey_burgers}
        onChange={this.handleChange}
        />
    <label className="form-label"># of Veggie Burgers we want to eat:</label>
      <input
        type="number"
        min='0'
        max='5'
        step='1'
        name="veggie_burgers"
        value={this.props.currentOrder.veggie_burgers}
        onChange={this.handleChange}
        />
    <label className="form-label">Willing to Help Grill:</label>
      <input
        type="checkbox"
        name="help_grill"
        value={this.props.currentOrder.help_grill}
        checked={this.props.currentOrder.help_grill===true}
        onChange={this.handleChange}
        />

    <input
      type="submit"
      value="Save Order Info"
      className="form-login"
      />

    </form>
    </div>
  )
}

}

export default connect (state => {return {currentOrder: state.currentOrder}}, { updateOrderForm, saveUpdatedOrder, newOrderInfo})(OrderForm);
