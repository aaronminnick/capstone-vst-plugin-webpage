import * as a from '../actions/ActionTypes';

const contentReducer = (state = {}, action) => {
  switch (action.type) {
    case a.CONTENT_FEATURES:
      return {...state, infoPaneContent: "Features"}
    case a.CONTENT_LISTEN:
      return {...state, infoPaneContent: "Listen"}
    case a.CONTENT_DOWNLOAD:
      return {...state, infoPaneContent: "Download"}
    case a.CONTENT_CONTACT:
      return {...state, infoPaneContent: "Contact"}
    default:
      return state;
  }
}

export default contentReducer;