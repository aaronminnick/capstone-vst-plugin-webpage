import React from "react";
import { connect } from "react-redux";

function SildingInfoPane(props) {

  let content;
  switch (props.content) {
    case "Features":
      content = <p>Features</p>
      break;
    case "Listen":
      content = <p>Listen</p>
      break;
    case "Download":
      content = <p>Download</p>
      break;
    case "Contact":
      content = <p>Contact</p>
      break;
    default:
      content = <p>Default</p>
  }


  return (
    <React.Fragment>
      <div className="pane">
        <div className="teeth">
          <div className="tooth">
            <div className="comb-tooth-L"></div>
            <div className="comb-tooth-R"></div>
          </div>
          <div className="tooth">
            <div className="comb-tooth-L"></div>
            <div className="comb-tooth-R"></div>
          </div>
          <div className="tooth">
            <div className="comb-tooth-L"></div>
            <div className="comb-tooth-R"></div>
          </div>
          <div className="tooth">
            <div className="comb-tooth-L"></div>
            <div className="comb-tooth-R"></div>
          </div>
          <div className="tooth">
            <div className="comb-tooth-L"></div>
            <div className="comb-tooth-R"></div>
          </div>
        </div>
        <div className="content-div">
          <p>{content}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    content: state.infoPaneContent
  }
};

SildingInfoPane = connect(mapStateToProps)(SildingInfoPane);

export default SildingInfoPane;