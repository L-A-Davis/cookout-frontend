import adapter from '../adapter'

export function fetchExistingOrder(id) {
  return dispatch => {
  adapter.eventHandlers.getOrder(id).then(data => {
      dispatch({ type: "ORDER_LOAD", payload: data.order });
    });
  };
}

export function updateOrderForm(formData) {
  return { type: "UPDATE_ORDER_FORM", payload: formData };
}


export function saveUpdatedOrder(formData) {
  return dispatch => {
    adapter.eventHandlers.editOrderInfo(formData).then(resp => {
      dispatch({ type: 'UPDATE_ORDER_DATA', payload: resp})
    })
  }
}

export function newOrderInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.saveOrderInfo(formData).then(resp => {
      dispatch({ type: 'SAVE_ORDER_DATA', payload: resp})
    })
  }
}
