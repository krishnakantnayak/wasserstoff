import NavigationBar from "../components/NavigationBar";
import TitleFrame from "../components/TitleFrame";
import MapPinPinWithName from "../components/MapPinPinWithName";
import HexMapIcon from "../components/HexMapIcon";
import Group from "../components/Group";
import "./WorldHexagonMap1.css";

const WorldHexagonMap1 = () => {
  return (
    <div className="world-hexagon-map1">
      <NavigationBar
        backgroundPadding="var(--padding-3xs) var(--padding-41xl) 0px 42px"
        nameWidth="300px"
      />
      <div className="map-pin-pin-with-name1">
        <div className="tooltip2">
          <img className="indicator-icon1" alt="" src="/indicator-1.svg" />
          <div className="title1">Chicago</div>
          <div className="amount1">98,320,300</div>
        </div>
        <img className="arrow-icon1" alt="" src="/arrow.svg" />
      </div>
      <div className="map-pin-pin-with-name2">
        <div className="tooltip3">
          <img className="indicator-icon2" alt="" src="/indicator-4.svg" />
          <div className="title2">Manaus</div>
          <div className="amount2">12,320,300</div>
        </div>
        <img className="arrow-icon2" alt="" src="/arrow.svg" />
      </div>
      <div className="map-pin-pin-with-name3">
        <div className="tooltip4">
          <img className="indicator-icon3" alt="" src="/indicator.svg" />
          <div className="title3">Berlin</div>
          <div className="amount3">76,541,106</div>
        </div>
        <img className="arrow-icon3" alt="" src="/arrow.svg" />
      </div>
      <div className="map-pin-pin-with-name4">
        <div className="tooltip5">
          <img className="indicator-icon4" alt="" src="/indicator-2.svg" />
          <div className="title4">Giza</div>
          <div className="amount4">10,547,980</div>
        </div>
        <img className="arrow-icon4" alt="" src="/arrow.svg" />
      </div>
      <main className="frame-parent">
        <section className="shape-container-wrapper">
          <div className="shape-container">
            <TitleFrame />
            <div className="orion-description">
              <MapPinPinWithName />
              <div className="shape-frame">
                <div className="wrapper-hex-map1">
                  <HexMapIcon propOverflow="unset" propMaxHeight="unset" />
                </div>
                <div className="map-pin-pin-with-name5">
                  <div className="shape-frame1">
                    <div className="tooltip6">
                      <img
                        className="indicator-icon5"
                        alt=""
                        src="/indicator-3.svg"
                      />
                      <div className="text">
                        <div className="title5">Shanghai</div>
                        <input
                          className="amount5"
                          placeholder="239,570,110"
                          type="text"
                        />
                      </div>
                      <img className="arrow-icon5" alt="" src="/arrow.svg" />
                    </div>
                  </div>
                </div>
                <div className="widget-l-size-global-stati">
                  <div className="header">
                    <div className="title6">Sales Figures</div>
                    <div className="legend">
                      <div className="shape" />
                      <div className="marketing-sales">Sales</div>
                    </div>
                    <div className="legend1">
                      <div className="shape1" />
                      <div className="marketing-sales1">Users</div>
                    </div>
                    <div className="legend2">
                      <div className="shape2" />
                      <div className="marketing-sales2">Product</div>
                    </div>
                    <div className="legend3">
                      <div className="shape3" />
                      <div className="marketing-sales3">Team</div>
                    </div>
                  </div>
                  <div className="graph">
                    <div className="chart">
                      <div className="y-axis">
                        <div className="k">1k</div>
                        <div className="text1">800</div>
                        <div className="text2">600</div>
                        <div className="text3">400</div>
                        <div className="text4">200</div>
                        <div className="jan-axis-values">
                          <div className="frame-jan-feb">0</div>
                        </div>
                      </div>
                      <div className="x-axis">
                        <div className="jan">
                          <img
                            className="shape-icon"
                            loading="eager"
                            alt=""
                            src="/shape.svg"
                          />
                          <div className="name-wrapper">
                            <div className="name">Jan</div>
                          </div>
                        </div>
                        <div className="feb">
                          <div className="shape-wrapper">
                            <img
                              className="shape-icon1"
                              alt=""
                              src="/shape-1.svg"
                            />
                          </div>
                          <div className="name-container">
                            <div className="name1">Feb</div>
                          </div>
                        </div>
                        <div className="mar">
                          <img
                            className="shape-icon2"
                            alt=""
                            src="/shape.svg"
                          />
                          <div className="name2">Mar</div>
                        </div>
                        <div className="apr">
                          <div className="frame-div">
                            <img
                              className="shape-icon3"
                              alt=""
                              src="/shape.svg"
                            />
                          </div>
                          <div className="name-frame">
                            <div className="name3">Apr</div>
                          </div>
                        </div>
                        <div className="may">
                          <div className="shape-wrapper1">
                            <img
                              className="shape-icon4"
                              alt=""
                              src="/shape-4.svg"
                            />
                          </div>
                          <div className="may-inner">
                            <div className="name-wrapper1">
                              <div className="name4">May</div>
                            </div>
                          </div>
                        </div>
                        <div className="jun">
                          <img
                            className="shape-icon5"
                            alt=""
                            src="/shape-5.svg"
                          />
                          <div className="name-wrapper2">
                            <div className="name5">Jun</div>
                          </div>
                        </div>
                        <div className="jul">
                          <div className="info">
                            <img
                              className="shape-icon6"
                              alt=""
                              src="/shape-6.svg"
                            />
                          </div>
                          <div className="name6">Jul</div>
                        </div>
                        <div className="aug">
                          <img
                            className="shape-icon7"
                            alt=""
                            src="/shape-7.svg"
                          />
                          <div className="aug-inner">
                            <div className="name-wrapper3">
                              <div className="name7">Aug</div>
                            </div>
                          </div>
                        </div>
                        <div className="sep">
                          <div className="shape-wrapper2">
                            <img
                              className="shape-icon8"
                              alt=""
                              src="/shape-8.svg"
                            />
                          </div>
                          <div className="sep-inner">
                            <div className="name-wrapper4">
                              <div className="name8">Sep</div>
                            </div>
                          </div>
                        </div>
                        <div className="oct">
                          <img
                            className="shape-icon9"
                            alt=""
                            src="/shape-9.svg"
                          />
                          <div className="oct-inner">
                            <div className="name-wrapper5">
                              <div className="name9">Oct</div>
                            </div>
                          </div>
                        </div>
                        <div className="nov">
                          <img
                            className="shape-icon10"
                            alt=""
                            src="/shape-7.svg"
                          />
                          <div className="name-wrapper6">
                            <div className="name10">Nov</div>
                          </div>
                        </div>
                        <div className="dec">
                          <img
                            className="shape-icon11"
                            alt=""
                            src="/shape-7.svg"
                          />
                          <div className="dec-inner">
                            <div className="name-wrapper7">
                              <div className="name11">Dec</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="data">
                        <div className="data-inner">
                          <div className="bubble-parent">
                            <div className="bubble">
                              <div className="bubble1" />
                            </div>
                            <div className="bubble2" />
                          </div>
                        </div>
                        <div className="bubble-frame-value-text">
                          <div className="bubble3" />
                          <div className="bubble4">
                            <div className="bubble5" />
                            <div className="value">$27632</div>
                          </div>
                        </div>
                        <div className="multi-bubble">
                          <div className="bubble6" />
                          <div className="second-bubble">
                            <div className="bubble7" />
                            <div className="bubble8">
                              <div className="bubble9" />
                              <div className="value1">$27632</div>
                              <div className="bubble-frame">August</div>
                            </div>
                          </div>
                        </div>
                        <div className="timeline-widget">
                          <div className="footer-frame">
                            <div className="info-frame1">
                              <div className="bubble10" />
                            </div>
                            <div className="bubble11" />
                            <div className="first-frame">
                              <div className="bubble12" />
                              <div className="bubble13" />
                              <div className="bubble14">
                                <div className="bubble15" />
                                <div className="value2">$27632</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-wrapper">
                          <div className="text5">
                            <div className="bubble16" />
                            <div className="bubble-wrapper">
                              <div className="bubble17" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Group />
      </main>
    </div>
  );
};

export default WorldHexagonMap1;
