function AnnouncementCard({ card, hero = false }) {
  const className = hero
    ? "ea-r-announcement ea-r-announcement--hero"
    : "ea-r-announcement";
  const content = (
    <>
      <div className="ea-r-announcement__media">
        {card.image ? <img src={card.image} alt="" loading="lazy" /> : null}
      </div>
      <div className="ea-r-announcement__content">
        {card.subtitle ? <p className="ea-r-announcement__eyebrow">{card.subtitle}</p> : null}
        <h3 className="ea-r-announcement__title">{card.title}</h3>
        {card.meta ? <p className="ea-r-announcement__meta">{card.meta}</p> : null}
      </div>
    </>
  );

  return card.link ? <a className={className} href={card.link}>{content}</a> : <article className={className}>{content}</article>;
}

export default function Announcements({ cards = [] }) {
  if (!cards.length) {
    return null;
  }

  const [hero, ...rest] = cards;
  return (
    <section className="ea-r-section ea-r-announcements" aria-label="Announcements">
      <div className="ea-r-announcements__grid">
        <AnnouncementCard card={hero} hero />
        <div className="ea-r-announcements__list">
          {rest.slice(0, 4).map((card) => <AnnouncementCard key={`${card.title}-${card.link}`} card={card} />)}
        </div>
      </div>
    </section>
  );
}
