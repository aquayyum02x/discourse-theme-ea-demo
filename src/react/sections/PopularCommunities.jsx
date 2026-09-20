import { Badge } from "@paloma/core-ui";
import { ArrowLeftIcon, ArrowRightIcon, UserIcon } from "@paloma/icons";
import { useCallback, useEffect, useRef, useState } from "react";

// The Figma strip contains more items than Paloma Carousel supports. Native scrolling gives us
// the required 2:3 game cards while retaining Paloma's Badge component.
export default function PopularCommunities({ heading, games = [] }) {
  const viewport = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const sync = useCallback(() => {
    const element = viewport.current;
    if (!element) return;
    setAtStart(element.scrollLeft <= 1);
    setAtEnd(element.scrollLeft + element.clientWidth >= element.scrollWidth - 1);
  }, []);
  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [games.length, sync]);
  const scrollByPage = (direction) => viewport.current?.scrollBy({ left: direction * viewport.current.clientWidth * 0.82, behavior: "smooth" });

  if (!games.length) return null;
  return (
    <section className="ea-r-section ea-r-communities">
      <header className="ea-r-section__head">
        <h2 className="ea-r-heading">{heading}<UserIcon /></h2>
        <div className="ea-r-communities__nav">
          <button type="button" aria-label="Previous games" disabled={atStart} onClick={() => scrollByPage(-1)}><ArrowLeftIcon /></button>
          <button type="button" aria-label="Next games" disabled={atEnd} onClick={() => scrollByPage(1)}><ArrowRightIcon /></button>
        </div>
      </header>
      <div className="ea-r-communities__viewport" ref={viewport} onScroll={sync}>
        <ul className="ea-r-communities__list">
          {games.map((game) => (
            <li key={`${game.title}-${game.link}`}><a className="ea-r-game" href={game.link || "#"}>
              <span className="ea-r-game__art">{game.image ? <img src={game.image} alt="" loading="lazy" /> : null}{game.owned ? <span className="ea-r-game__owned"><Badge standalone label="Owned" size="small" emphasis="bold" /></span> : null}</span>
              <span className="ea-r-game__title">{game.title}</span>
            </a></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
