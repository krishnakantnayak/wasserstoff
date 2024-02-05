import "./MapPinPinWithName.css";

const MapPinPinWithName1 = ({ indicator, title, amountPlaceholder }) => {
  return (
    <div className="map-pin-pin-with-name7">
      <div className="tooltip-wrapper">
        <div className="tooltip8">
          <img className="indicator-icon7" alt="" src={indicator} />
          <div className="map-pin-frame-title-amount">
            <div className="title14">{title}</div>
            <input
              className="amount13"
              placeholder={amountPlaceholder}
              type="text"
            />
          </div>
          <img className="arrow-icon7" alt="" src="/arrow.svg" />
        </div>
      </div>
    </div>
  );
};

export default MapPinPinWithName1;
