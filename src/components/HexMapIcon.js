import { useMemo } from "react";
import "./HexMapIcon.css";

const HexMapIcon = ({ propOverflow, propMaxHeight }) => {
  const hexMapIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
      maxHeight: propMaxHeight,
    };
  }, [propOverflow, propMaxHeight]);

  return (
    <img
      className="hex-map-icon"
      alt=""
      src="/hex-map.svg"
      style={hexMapIconStyle}
    />
  );
};

export default HexMapIcon;
