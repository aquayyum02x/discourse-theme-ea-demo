import { Carousel } from "@paloma/core-ui/components/Carousel";

function GameCard({ card }) {
  const content = (
    <article className="block-stat-slider__paloma-card">
      {card.image && (
        <img
          className="block-stat-slider__paloma-image"
          src={card.image}
          alt={card.title}
          loading="lazy"
        />
      )}
      <span className="block-stat-slider__paloma-title">{card.title}</span>
    </article>
  );

  return card.link ? (
    <a className="block-stat-slider__paloma-link" href={card.link}>
      {content}
    </a>
  ) : (
    content
  );
}

export default function StatSlider({ cards = [], title = "Help by games" }) {
  const carouselCards = cards.filter((card) => card?.title).slice(0, 10);

  if (!carouselCards.length) {
    return null;
  }

  if (carouselCards.length === 1) {
    return (
      <section className="block-stat-slider">
        <h2 className="block-stat-slider__title">{title}</h2>
        <GameCard card={carouselCards[0]} />
      </section>
    );
  }

  return (
    <section className="block-stat-slider">
      <Carousel
        title={title}
        arrows
        dots
        backArrowLabel="Previous games"
        forwardArrowLabel="Next games"
        className="block-stat-slider__paloma-carousel"
        carouselItemWrapperClassname="block-stat-slider__paloma-item"
      >
        {carouselCards.map((card) => (
          <GameCard key={`${card.title}-${card.link || "card"}`} card={card} />
        ))}
      </Carousel>
    </section>
  );
}
