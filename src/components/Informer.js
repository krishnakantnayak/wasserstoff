import "./Informer.css";

const Informer = ({ name1, amount, percent }) => {
  return (
    <div className="informer">
      <div className="title18">
        <div className="name14">{name1}</div>
      </div>
      <div className="value15">
        <div className="amount15">{amount}</div>
        <div className="indicator3">
          <img
            className="arrow-up-icon"
            loading="eager"
            alt=""
            src="/arrow-up-1.svg"
          />
          <div className="percent2">{percent}</div>
        </div>
      </div>
      <div className="detail3">Compared to $21,490 last year</div>
    </div>
  );
};

export default Informer;
