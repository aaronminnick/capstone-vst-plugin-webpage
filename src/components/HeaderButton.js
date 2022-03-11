import React from 'react';
import { connect } from 'react-redux';

function HeaderButton(props) {

  const handleButtonClick = () => {
    const { dispatch } = this.props;
    //slider pane down animation
    dispatch({onClickAction});
    //silder pane up animation
  };

  return (
    <React.Fragment>
      <button onClick={handleButtonClick}>{props.buttonText}</button>
    </React.Fragment>
  );
}

HeaderButton = connect()(HeaderButton);

export default HeaderButton;