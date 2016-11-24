import * as Actions from '../actions/CounterActions';

export default function Root(state = {
  count: 0
}, action) {
  switch(action.type) {
    case Actions.COUNTER_DECREMENT:
      return Object.assign({}, {count: state.count - 1})
    case Actions.COUNTER_INCREMENT:
      return Object.assign({}, {count: state.count + 1})
    default: 
      return state
  }
}