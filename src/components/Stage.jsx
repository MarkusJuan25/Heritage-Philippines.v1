import { Link } from "react-router-dom";
import { stageActs } from "../data/heritage.js";
import SafeImage from "./SafeImage.jsx";

export default function Stage() {
  return (
    <section className="stage" aria-label="Heritage story acts">
      <div className="stage__panels">
        {stageActs.map((act) => (
          <Link className="stage-panel" key={act.title} to={act.to}>
            <SafeImage src={act.image} alt="" loading="eager" decoding="async" />
            <span className="stage-panel__shade" aria-hidden="true"></span>
            <span className="stage-panel__content">
              <small>{act.kicker}</small>
              <strong>{act.label}</strong>
            </span>
          </Link>
        ))}
      </div>
      <div className="stage__footer">
        <p>Three acts guide the full return: roots, journey, and homecoming.</p>
        <Link className="button button--ghost" to="/story">See the Story</Link>
      </div>
    </section>
  );
}
