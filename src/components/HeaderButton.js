import React from 'react';
import { connect } from 'react-redux';

function HeaderButton(props) {

  const handleButtonClick = () => {
    const { dispatch, onClickAction } = props;
    //slider pane down animation
    dispatch(onClickAction());
    //slider pane up animation
  };

  return (
    <React.Fragment>
      <button onClick={handleButtonClick}>{props.buttonText}</button>
    </React.Fragment>
  );
}

// eslint-disable-next-line
HeaderButton = connect()(HeaderButton);

export default HeaderButton;