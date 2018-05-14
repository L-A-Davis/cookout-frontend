export default function reducerInUse(
  state = {
    currentOrder: {
      people: '',
      burgers: '',
      turkey_burgers: '',
      veggie_burgers: '',
      help_grill: false
    }
  }, action
) {
  switch (action.type) {
    case "ORDER_LOAD":
      return {
         ...state,
         currentOrder: action.payload
       };

    case "UPDATE_ORDER_FORM":
    return {
      ...state,
      currentOrder: {...state.currentOrder, ...action.payload}
    }

    case "UPDATE_ORDER_DATA":
            return {
              ...state,
              currentOrder: {...state.currentOrder, ...action.payload}
    }

    case 'SAVE_ORDER_DATA':
    return {
      ...state,
      currentOrder: {...state.currentOrder, ...action.payload}
    }

    default:
      return state;
  }
}
