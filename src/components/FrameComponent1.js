import Informer from "./Informer";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-title-value">
      <h1 className="title19">Design faster</h1>
      <div className="widget-m-size-combined-cir">
        <div className="graph3">
          <img
            className="chart-double-big-circle-char"
            loading="eager"
            alt=""
            src="/chart--double-big-circle-chart.svg"
          />
          <div className="info6">
            <div className="title20">
              <h3 className="name15">Total earning</h3>
            </div>
            <div className="value16">
              <div className="amount16">$12,875</div>
              <div className="indicator4">
                <img
                  className="arrow-up-icon1"
                  loading="eager"
                  alt=""
                  src="/arrow-up.svg"
                />
                <div className="percent3">2%</div>
              </div>
            </div>
            <div className="detail4">Compared to $21,504 last year</div>
          </div>
        </div>
        <div className="table">
          <div className="row">
            <div className="name16">Presentation</div>
            <div className="amount17">862</div>
            <div className="graph4">
              <div className="column145" />
              <div className="column146" />
              <div className="column147" />
              <div className="column148" />
              <img
                className="chart-icon"
                loading="eager"
                alt=""
                src="/chart.svg"
              />
            </div>
          </div>
          <div className="row1">
            <div className="name17">Development</div>
            <div className="amount18">753</div>
            <div className="graph5">
              <div className="column149" />
              <div className="column150" />
              <div className="column151" />
              <div className="column152" />
              <img
                className="chart-icon1"
                loading="eager"
                alt=""
                src="/chart-1.svg"
              />
            </div>
          </div>
          <div className="row2">
            <div className="name18">Research</div>
            <div className="amount19">553</div>
            <div className="graph6">
              <div className="column153" />
              <div className="column154" />
              <div className="column155" />
              <div className="column156" />
              <img
                className="chart-icon2"
                loading="eager"
                alt=""
                src="/chart-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="widget-m-size-omposite-in">
        <Informer name1="Total earning" amount="$12,875" percent="10%" />
        <img
          className="divider-icon"
          loading="eager"
          alt=""
          src="/divider.svg"
        />
        <Informer name1="Sales" amount="$43,123" percent="12%" />
      </div>
      <div className="table-indicator-table">
        <div className="row3">
          <div className="summary">
            <div className="name19">Travel</div>
            <div className="amount20">760</div>
            <div className="summary1">2,540</div>
          </div>
          <div className="status">
            <img
              className="arrow-up-icon2"
              loading="eager"
              alt=""
              src="/arrow-up.svg"
            />
            <img className="arrow-up-icon3" alt="" src="/arrow-up.svg" />
          </div>
        </div>
        <div className="row4">
          <div className="summary2">
            <div className="name20">Presentation</div>
            <div className="amount21">650</div>
            <div className="summary3">2,304</div>
          </div>
          <div className="status1">
            <img className="arrow-up-icon4" alt="" src="/arrow-up.svg" />
            <img
              className="arrow-up-icon5"
              loading="eager"
              alt=""
              src="/arrow-up.svg"
            />
          </div>
        </div>
        <div className="row5">
          <div className="summary4">
            <div className="name21">Business</div>
            <div className="amount22">612</div>
            <div className="summary5">2,140</div>
          </div>
          <div className="status2">
            <img
              className="arrow-up-icon6"
              loading="eager"
              alt=""
              src="/arrow-up.svg"
            />
            <img className="arrow-up-icon7" alt="" src="/arrow-up.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
