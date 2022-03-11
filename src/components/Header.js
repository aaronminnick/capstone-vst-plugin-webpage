import React from 'react';
import HeaderButton from './HeaderButton';
import * as a from '../actions/index';

function Header() {
  return (
    <React.Fragment>
      <h1>VST Comb Filter Bank Plugin</h1>
      <h2>lorem ipsum etc. etc.</h2>
      <div className="button-row">
        <HeaderButton buttonText={"Features"} onClickAction={a.contentFeatures} />
        <HeaderButton buttonText={"Listen"} onClickAction={a.contentListen} />
        <HeaderButton buttonText={"Download"} onClickAction={a.contentDownload} />
        <HeaderButton buttonText={"Contact"} onClickAction={a.contentContact} />
      </div>
    </React.Fragment>
  );
}

export default Header;