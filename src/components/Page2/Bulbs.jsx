export default function Bulbs({ visible }) {
  return (
    <div
      id="bulb-container"
      className={`${visible?'!flex':'hidden'}`}
    >
      <div className="bulb bulb-blue"></div>
      <div className="bulb bulb-green"></div>
      <div className="bulb bulb-red"></div>
      <div className="bulb bulb-yellow"></div>
      <div className="bulb bulb-orange"></div>
      <div className="bulb bulb-pink"></div>
    </div>
  );
}
