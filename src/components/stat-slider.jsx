import { Carousel } from "@paloma/core-ui/components/Carousel";
import { MediaCard } from "@paloma/core-ui/components/MediaCard";

function GameCard({ card }) {
  return (
    <MediaCard
      className="game-media-slider__card"
      contained
      eyebrow="EA Help"
      media={
        <img
          className="game-media-slider__image"
          src={card.image}
          alt={card.title}
          loading="lazy"
        />
      }
      title={card.title}
      titleTag="h3"
      action="Open game"
      onClick={() => card.link && window.location.assign(card.link)}
      size="medium"
      variant="base"
    />
  );
}

export default function StatSlider({ cards = [], title = "Help by games" }) {
  const carouselCards = cards.filter((card) => card?.title).slice(0, 5);

  if (!carouselCards.length) {
    return null;
  }

  if (carouselCards.length === 1) {
    return (
      <section className="game-media-slider">
        <h2 className="block-stat-slider__title">{title}</h2>
        <GameCard card={carouselCards[0]} />
      </section>
    );
  }

  return (
    <section className="game-media-slider">
      <Carousel
        title={title}
        arrows
        dots
        backArrowLabel="Previous games"
        forwardArrowLabel="Next games"
        className="game-media-slider__carousel"
        carouselItemWrapperClassname="game-media-slider__item"
      >
        {carouselCards.map((card) => (
          <GameCard key={`${card.title}-${card.link || "card"}`} card={card} />
        ))}
      </Carousel>
    </section>
  );
}
