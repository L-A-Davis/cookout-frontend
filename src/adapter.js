const token = localStorage.getItem('token')

const headers = () => {
  return {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
  }
}

const Singup_headers = () => {
  return {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
 }
}

const URL_ROOT = 'http://localhost:3001'
const API_ROOT = `${URL_ROOT}/api/v1`

const login = (email, password) => {
  return fetch(`${URL_ROOT}/login`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify( {email, password})
  }).then(res => res.json())
}
const signup = (signupBody) => {
  return fetch(`${URL_ROOT}/signup`, {
    method: 'POST',
    headers: Singup_headers(),
    body: JSON.stringify({user: signupBody})
  }).then(res => res.json())
}

const getLoggedInUser = () => {
  return fetch(`${URL_ROOT}/current_user`, {
    headers: headers()
  }).then(res => res.json())
}

const getOrder = (user_id) => {
  return fetch(`${API_ROOT}/users/${user_id}`, {
    headers: headers()
  }).then(res => res.json())
}

const saveOrderInfo = (m) => {
  return fetch(`${API_ROOT}/order_data`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({order_data:
      {
        people: m.people,
        burgers: m.burgers,
        turkey_burgers: m.turkey_burgers,
        veggie_burgers: m.veggie_burgers,
        help_grill: m.help_grill}})
  }).then(res => res.json())
}


const editOrderInfo = (m) => {
  return fetch(`${API_ROOT}/order_data/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({order_data:
    {
      people: m.people,
      burgers: m.burgers,
      turkey_burgers: m.turkey_burgers,
      veggie_burgers: m.veggie_burgers,
      help_grill: m.help_grill}})
}).then(res => res.json())
}


export default {
  eventHandlers: {
    getOrder,
    saveOrderInfo,
    editOrderInfo
  },
  auth: {
    login,
    getLoggedInUser,
    signup
  }
}
