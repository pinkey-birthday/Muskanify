export default function Cake({ show, flame }) {
    return (
      <div id="cake" className="cake" style={{ display: show ? "block" : "none" }}>
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div className="candle">
          <div className="thread"></div>
          <div
            id="flame"
            className="flame"
            style={{ display: flame ? "block" : "none" }}
          ></div>
        </div>
      </div>
    );
  }
  