import * as a from '../actions/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case a.CONTENT_FEATURES:
      return {...state, infoPaneContent: "Features"}
      break;
    case a.CONTENT_LISTEN:
      return {...state, infoPaneContent: "Listen"}
      break;
    case a.CONTENT_DOWNLOAD:
      return {...state, infoPaneContent: "Download"}
      break;
    case a.CONTENT_CONTACT:
      return {...state, infoPaneContent: "Contact"}
      break;
    default:
      return state;
  }
}