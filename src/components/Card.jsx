import { Link } from "react-router-dom";
import CardSkeleton from "./loaders/CardSkeleton.jsx";
import SafeImage from "./SafeImage.jsx";

export default function Card({ kicker, title, text, image, to, cta = "Explore", meta, className = "", isLoading = false }) {
  if (isLoading) {
    return <CardSkeleton />;
  }

  return (
    <article className={`feature-card ${className}`.trim()}>
      {image && (
        <div className="feature-card__media">
          <SafeImage src={image} alt="" loading="lazy" decoding="async" collapseParent />
        </div>
      )}
      <div className="feature-card__body">
        {kicker && <span className="card-kicker">{kicker}</span>}
        {meta && <span className="card-meta">{meta}</span>}
        <h3>{title}</h3>
        <p>{text}</p>
        {to && <Link className="button button--ghost" to={to}>{cta}</Link>}
      </div>
    </article>
  );
}
