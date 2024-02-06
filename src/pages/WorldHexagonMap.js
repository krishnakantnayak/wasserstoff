import NavigationBar from "../components/NavigationBar";
import TitleFrame from "../components/TitleFrame";
import HexMapIcon from "../components/HexMapIcon";
import FrameComponent from "../components/FrameComponent";
import MapPinPinWithName1 from "../components/MapPinPinWithName";
import MapPinPinWithName from "../components/MapPinPinWithName";
import WidgetLSizeTimelineCha from "../components/WidgetLSizeTimelineCha";
import "./WorldHexagonMap.css";

const WorldHexagonMap = () => {
  return (
    <div className="world-hexagon-map">
      <NavigationBar />
      <main className="eleventh-column-frame">
        <div className="wstf-front-end-hackathon">WSTF FRONT-END HACKATHON</div>
        <section className="info-frame">
          <div className="value-container">
            <TitleFrame />
            <div className="background-rectangle">
              <div className="arrow-shape">
                <div className="wrapper-hex-map">
                  <HexMapIcon />
                </div>
                <div className="chart-column">
                  <FrameComponent
                    indicator="/indicator.svg"
                    title="Berlin"
                    amountPlaceholder="76,541,106"
                  />
                  <div className="arrow-poly">
                    <MapPinPinWithName1
                      indicator="/indicator-1.svg"
                      title="Chicago"
                      amountPlaceholder="98,320,300"
                    />
                    <div className="graph-column">
                      <div className="frame-map-pin-pin">
                        <div className="frame-tooltip-map-pin">
                          <div className="map-pin-pin-with-name">
                            <div className="tooltip">
                              <img
                                className="indicator-icon"
                                alt=""
                                src="/indicator-2.svg"
                              />
                              <div className="tooltip1">
                                <div className="title">Giza</div>
                                <input
                                  className="amount"
                                  placeholder="10,547,980"
                                  type="text"
                                />
                              </div>
                            </div>
                            <img
                              className="arrow-icon"
                              alt=""
                              src="/arrow.svg"
                            />
                          </div>
                        </div>
                        <MapPinPinWithName1
                          indicator="/indicator-3.svg"
                          title="Shanghai"
                          amountPlaceholder="239,570,110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <FrameComponent
                  indicator="/indicator-4.svg"
                  title="Manaus"
                  amountPlaceholder="12,320,300"
                  propWidth="426px"
                  propPadding="unset"
                  propFlex="unset"
                  propWidth1="180px"
                />
              </div>
              {/* <MapPinPinWithName /> */}
            </div>
          </div>
          <WidgetLSizeTimelineCha />
        </section>
      </main>

    </div>
  );
};

export default WorldHexagonMap;
