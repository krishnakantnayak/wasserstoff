import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  indicator,
  title,
  amountPlaceholder,
  propWidth,
  propPadding,
  propFlex,
  propWidth1,
}) => {
  const horizontalLineChartStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const mapPinPinWithNameStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
    };
  }, [propFlex, propWidth1]);

  return (
    <div className="horizontal-line-chart" style={horizontalLineChartStyle}>
      <div className="map-pin-pin-with-name6" style={mapPinPinWithNameStyle}>
        <div className="tooltip7">
          <img className="indicator-icon6" alt="" src={indicator} />
          <div className="frame-indicator">
            <div className="title13">{title}</div>
            <input
              className="amount12"
              placeholder={amountPlaceholder}
              type="text"
            />
          </div>
          <img className="arrow-icon6" alt="" src="/arrow.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
