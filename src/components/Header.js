import React from 'react';
import HeaderButton from './HeaderButton';
import * as a from '../actions/ActionTypes';

function Header() {
  return (
    <React.Fragment>
      <h1>VST Comb Filter Bank Plugin</h1>
      <h2>lorem ipsum etc. etc.</h2>
      <div className="button-row">
        <HeaderButton buttonText={"Features"} onClickAction={a.CONTENT_FEATURES} />
        <HeaderButton buttonText={"Listen"} onClickAction={a.CONTENT_LISTEN} />
        <HeaderButton buttonText={"Download"} onClickAction={a.CONTENT_DOWNLOAD} />
        <HeaderButton buttonText={"Contact"} onClickAction={a.CONTENT_CONTACT} />
      </div>
    </React.Fragment>
  );
}

export default Header;