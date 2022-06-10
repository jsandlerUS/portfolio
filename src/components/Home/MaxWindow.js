import Fog from "./Fog";

const MaxWindow = ({ exitAlert }) => {
  var elem = document.documentElement;

  const maxScreen = () => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
    exitAlert();
  };

  return (
    <div className="maxWindow">
      <div className="maxWindow-alert">
        <div className="maxWindow-title">Hello, welcome to JS Designs</div>
        <div className="maxWindow-text">
          Would you like to maximize your window for a better experience?
        </div>
        <div className="maxWindow-button">
          <div onClick={maxScreen} className="maxWindow-button__accept">
            Yes
          </div>
          <div onClick={() => exitAlert()} className="maxWindow-button__cancel">
            No
          </div>
        </div>
      </div>
      <Fog position={'fixed'}/>
    </div>
  );
};

export default MaxWindow;
