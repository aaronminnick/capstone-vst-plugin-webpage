import * as a from '../actions/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case a.CONTENT_FEATURES:
      break;
    case a.CONTENT_LISTEN:
      break;
    case a.CONTENT_DOWNLOAD:
      break;
    case a.CONTENT_CONTACT:
      break;
    default:
      return state;
  }
}