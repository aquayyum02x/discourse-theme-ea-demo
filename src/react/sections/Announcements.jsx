import { MediaCard } from "@paloma/core-ui";

const Media = ({ src }) => (
  <img src={src} alt="" loading="lazy" className="ea-r-media" />
);

export default function Announcements({ heading, cards = [] }) {
  if (!cards.length) {
    return null;
  }

  const [hero, ...rest] = cards;

  return (
    <section className="ea-r-section ea-r-announcements">
      {heading && <h2 className="ea-r-heading">{heading}</h2>}

      <div className="ea-r-announcements__grid">
        <MediaCard
          size="large"
          titleTag="h3"
          eyebrow={hero.subtitle}
          title={hero.title}
          meta={hero.meta}
          media={<Media src={hero.image} />}
          onClick={hero.link ? () => (window.location.href = hero.link) : undefined}
        />

        <div className="ea-r-announcements__list">
          {rest.map((card, i) => (
            <MediaCard
              key={i}
              size="medium"
              titleTag="h3"
              eyebrow={card.subtitle}
              title={card.title}
              meta={card.meta}
              media={<Media src={card.image} />}
              onClick={card.link ? () => (window.location.href = card.link) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
