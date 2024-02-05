import NavigationBar from "../components/NavigationBar";
import FrameComponent1 from "../components/FrameComponent1";
import BigWidgetBubbleChart from "../components/BigWidgetBubbleChart";
import "./BubbleChart.css";

const BubbleChart = () => {
  return (
    <div className="bubble-chart">
      <NavigationBar
        backgroundPadding="var(--padding-3xs) var(--padding-41xl) 0px var(--padding-16xl)"
        nameWidth="307px"
      />
      <main className="inner-frame-frame">
        <div className="orion-data-visualisation1">
          <FrameComponent1 />
        </div>
        <section className="big-widget-icon">
          <div className="background" />
          <div className="bubble18" />
          <div className="bubble-chart-frame">
            <b className="timeline">Timeline</b>
          </div>
          <div className="development-frame">
            <div className="investments-frame">
              <div className="bubble19" />
              <div className="value-text">
                <div className="business-frame">
                  <div className="timeline1">
                    <div className="background-element" />
                    <div className="date-range-picker">
                      <div className="time-period">
                        <div className="period">1W</div>
                      </div>
                      <div className="time-period1">
                        <div className="period1">1M</div>
                      </div>
                      <div className="time-period2">
                        <div className="hover" />
                        <b className="period2">3M</b>
                      </div>
                      <div className="time-period3">
                        <div className="period3">1Y</div>
                      </div>
                      <div className="time-period4">
                        <div className="period4">ALL</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-zoom-tool-map-frame">
                    <BigWidgetBubbleChart />
                    <div className="bubble20" />
                    <div className="wrapper-icon">
                      <img
                        className="icon"
                        loading="eager"
                        alt=""
                        src="/icon-11.svg"
                      />
                    </div>
                    <div className="wrapper-icon1">
                      <img
                        className="icon1"
                        loading="eager"
                        alt=""
                        src="/icon-21.svg"
                      />
                    </div>
                    <div className="wrapper-icon2">
                      <img
                        className="icon2"
                        loading="eager"
                        alt=""
                        src="/icon-31.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value-text-inner">
                  <div className="bubble-group">
                    <div className="bubble21" />
                    <div className="bubble22" />
                  </div>
                </div>
              </div>
              <div className="investments-frame-inner">
                <div className="wrapper-zoom-parent">
                  <div className="wrapper-zoom">
                    <img
                      className="zoom-icon"
                      loading="eager"
                      alt=""
                      src="/zoom.svg"
                    />
                  </div>
                  <div className="map">
                    <div className="bg2" />
                    <img
                      className="map-icon"
                      loading="eager"
                      alt=""
                      src="/map.svg"
                    />
                  </div>
                  <div className="wrapper-tool">
                    <img
                      className="tool-icon"
                      loading="eager"
                      alt=""
                      src="/tool.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bubble-chart-frame1">
              <div className="frame-set">
                <div className="title-frame">
                  <b className="title7">Trend goods</b>
                  <div className="zoom-tool-frame">
                    <div className="value3">204</div>
                  </div>
                </div>
                <div className="title-frame1">
                  <b className="title8">Shopping views</b>
                  <div className="value-wrapper">
                    <div className="value4">65,540</div>
                  </div>
                </div>
                <div className="title-frame2">
                  <b className="title9">Store dynamics</b>
                  <div className="value-frame">
                    <div className="value5">324</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer2">
        <div className="bg3" />
        <b className="orion-data-visualisation2">Orion data visualisation</b>
        <b className="orion-footer">2022</b>
      </footer>
    </div>
  );
};

export default BubbleChart;
