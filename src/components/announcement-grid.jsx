import { useState } from "react";
import { Accordion } from "@paloma/core-ui/components/Accordion";

function shuffle(cards) {
  const result = [...cards];

  for (let index = result.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }

  return result;
}

function AnnouncementCard({ card, isBig }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <Accordion
      className={`block-announcements__card${isBig ? " --big" : ""}`}
      expanded={expanded}
      title={card.title}
      subtitle={card.subtitle}
      label={card.link ? "Open" : undefined}
      leadingIcon={
        card.image ? (
          <img
            className="block-announcements__accordion-icon"
            src={card.image}
            alt=""
          />
        ) : undefined
      }
      onToggle={(_event, nextExpanded) => setExpanded(nextExpanded)}
    >
      {card.image && (
        <div className="block-announcements__media">
          <img
            className="block-announcements__image"
            src={card.image}
            alt={card.title}
            loading="lazy"
          />
        </div>
      )}
      {card.link && (
        <a className="block-announcements__link" href={card.link}>
          Open announcement
        </a>
      )}
    </Accordion>
  );
}

export default function AnnouncementGrid({
  cards = [],
  heading,
  shuffle: shouldShuffle = false,
}) {
  const orderedCards = shouldShuffle ? shuffle(cards) : cards;
  const bigCard =
    orderedCards.find((card) => card.size === "big") || orderedCards[0];
  const smallCards = orderedCards.filter((card) => card !== bigCard);

  if (!orderedCards.length) {
    return null;
  }

  return (
    <section>
      {heading && <h2 className="ea-section-heading">{heading}</h2>}
      <div className="block-announcements__grid">
        <div className="block-announcements__hero">
          <AnnouncementCard card={bigCard} isBig />
        </div>
        {smallCards.length > 0 && (
          <div className="block-announcements__small-grid">
            {smallCards.map((card) => (
              <AnnouncementCard key={card.title} card={card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
