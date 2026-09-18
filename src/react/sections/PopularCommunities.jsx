import { Badge } from "@paloma/core-ui";
import { ArrowLeftIcon, ArrowRightIcon, UserIcon } from "@paloma/icons";
import { useCallback, useRef, useState } from "react";

// Paloma's Carousel asserts a hard 2-5 item limit (MIN/MAX_CAROUSEL_ITEMS), but the design shows a
// long scrolling box-art strip. This is a native scroll-snap strip instead; Paloma supplies the Badge.
export default function PopularCommunities({ heading, games = [] }) {
  const viewport = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = viewport.current;

    if (!el) {
      return;
    }

    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  const scrollBy = (direction) => {
    viewport.current?.scrollBy({
      left: direction * viewport.current.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  if (!games.length) {
    return null;
  }

  return (
    <section className="ea-r-section ea-r-communities">
      <header className="ea-r-section__head">
        <h2 className="ea-r-heading">
          {heading}
          <UserIcon />
        </h2>
        <div className="ea-r-communities__nav">
          <button
            type="button"
            aria-label="Previous games"
            disabled={atStart}
            onClick={() => scrollBy(-1)}
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            aria-label="Next games"
            disabled={atEnd}
            onClick={() => scrollBy(1)}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </header>

      <div
        className="ea-r-communities__viewport"
        ref={(el) => {
          viewport.current = el;
          sync();
        }}
        onScroll={sync}
      >
        <ul className="ea-r-communities__list">
          {games.map((game, i) => (
            <li key={i}>
              <a className="ea-r-game" href={game.link || "#"}>
                <span className="ea-r-game__art">
                  <img src={game.image} alt="" loading="lazy" />
                  {game.owned && (
                    <span className="ea-r-game__owned">
                      <Badge
                        standalone
                        label="Owned"
                        size="small"
                        emphasis="bold"
                      />
                    </span>
                  )}
                </span>
                <span className="ea-r-game__title">{game.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
