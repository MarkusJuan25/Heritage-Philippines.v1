export default function Section({ eyebrow, title, intro, children, className = "" }) {
  const isStoryBlock = className.split(" ").includes("story-block");
  const content = (
    <>
      {(eyebrow || title || intro) && (
        <div className="section__heading">
          {eyebrow && <p className="eyebrow reveal">{eyebrow}</p>}
          {title && <h2 className="reveal">{title}</h2>}
          {intro && <p className="reveal">{intro}</p>}
        </div>
      )}
      {children}
    </>
  );

  return (
    <section className={`section ${className}`.trim()}>
      {isStoryBlock ? <div className="story-content">{content}</div> : content}
    </section>
  );
}
