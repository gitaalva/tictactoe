import { combineReducers } from 'redux';
import BoardReducer from './board_reducer.js';
import prevMove from './prevmove_reducer.js';
import prevPlayer from './prevPlayer_reducer.js';
import currentPlayer from './currentplayer_reducer.js';
import message from './message_reducer.js'
import name from './name_reducer.js';

const rootReducer = combineReducers({
  board : BoardReducer,
  prevMove: prevMove,
  prevPlayer:prevPlayer,
  currentPlayer:currentPlayer,
  message:message,
  name:name
});

export default rootReducer;
