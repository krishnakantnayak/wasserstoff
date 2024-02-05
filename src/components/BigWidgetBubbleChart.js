import "./BigWidgetBubbleChart.css";

const BigWidgetBubbleChart = () => {
  return (
    <div className="big-widget-bubble-chart">
      <div className="bg-lines" />
      <div className="bubble-chart-frame2">
        <div className="bg-lines1" />
        <div className="wrapper-bubble-chart">
          <img
            className="bubble-chart-icon"
            loading="eager"
            alt=""
            src="/bubble-chart.svg"
          />
        </div>
      </div>
      <div className="finance-frame">
        <div className="title-value-frame">
          <div className="finance">
            <div className="title21">Finance</div>
            <div className="value17">
              <span> $</span>
              <span className="span2">23,657</span>
            </div>
          </div>
        </div>
        <div className="development-frame1">
          <div className="development">
            <div className="title22">Development</div>
            <div className="value-frame1">
              <div className="value18">$31,657</div>
            </div>
          </div>
          <div className="investments-frame1">
            <div className="title-frame4">
              <div className="investments-wrapper">
                <div className="investments">
                  <div className="tittle">Investments</div>
                  <div className="investments-child" />
                  <div className="value-frame2">
                    <div className="value19">$76,644</div>
                  </div>
                  <div className="time-wrapper">
                    <div className="time">3 month</div>
                  </div>
                </div>
              </div>
              <div className="business">
                <div className="title23">Business</div>
                <div className="value20">$21,987</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="design-wrapper">
        <div className="design">
          <div className="title-frame5">
            <div className="title24">Design</div>
          </div>
          <div className="design-child" />
          <div className="value-frame3">
            <div className="value21">$32,982</div>
          </div>
          <div className="time-container">
            <div className="time1">3 month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigWidgetBubbleChart;
