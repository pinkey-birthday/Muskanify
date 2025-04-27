export default function Balloons({ sideOnly = false, balloons = [] }) {
    return (
      <>
        {sideOnly && (
          <>
            <div
              id="balloon-left"
              className="balloon balloon-left fade_in_up"
              style={{ display: "block" }}
            ></div>
            <div
              id="balloon-right"
              className="balloon balloon-right fade_in_up"
              style={{ display: "block" }}
            ></div>
          </>
        )}
        {balloons.length > 0 && (
          <div id="balloons-container" className="balloons-container h-screen w-screen">
            {balloons.map((b) => (
              <div
                key={b.id}
                className="single-balloon"
                style={{
                  backgroundImage: `url(${b.image})`,
                  left: `${b.left}vw`,
                  top:`${b.top}vw`,
                  "--horizontal-sway": `${b.sway}vw`,
                  "--rotate-deg": `${b.rotate}deg`,
                  width: `${80 * b.scale}px`,
                  height: `${120 * b.scale}px`,
                  animationPlayState: "running",
                  animationDuration: `${b.duration}s`,
                  opacity: b.opacity,
                }}
                onAnimationEnd={(e) => e.currentTarget.remove()}
              ></div>
            ))}
          </div>
        )}
      </>
    );
  }
  