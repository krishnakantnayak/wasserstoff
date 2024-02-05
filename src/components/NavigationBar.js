import { useMemo } from "react";
import "./NavigationBar.css";

const NavigationBar = ({ backgroundPadding, nameWidth }) => {
  const navigationBarStyle = useMemo(() => {
    return {
      padding: backgroundPadding,
    };
  }, [backgroundPadding]);

  const amountTextStyle = useMemo(() => {
    return {
      width: nameWidth,
    };
  }, [nameWidth]);

  return (
    <header className="navigation-bar" style={navigationBarStyle}>
      <div className="background1" />
      <img
        className="wstf-logo-1-icon"
        loading="eager"
        alt=""
        src="/wstflogo-1.svg"
      />
      <div className="amount-text" style={amountTextStyle}>
        <div className="name12">WASSERSTOFF</div>
      </div>
      <div className="footer-description">
        <div className="search">
          <div className="input" />
          <img className="icon3" loading="eager" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="colorful-columns">
        <div className="label">Statistics</div>
      </div>
      <div className="fourth-column-frame">
        <div className="fifth-column-frame">
          <div className="label1">Overview</div>
          <div className="tab" />
        </div>
      </div>
      <div className="eighth-column-frame">
        <div className="ninth-column-frame">
          <div className="label2">Dashboard</div>
          <div className="label3">Analytics</div>
        </div>
      </div>
      <div className="frame-for-tooltip">
        <img
          className="profile-icon"
          loading="eager"
          alt=""
          src="/profile.svg"
        />
      </div>
      <div className="frame-for-tooltip1">
        <img className="option-icon" loading="eager" alt="" src="/option.svg" />
      </div>
    </header>
  );
};

export default NavigationBar;
