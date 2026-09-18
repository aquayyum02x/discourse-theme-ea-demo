import { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Carousel,
  Chip,
  SegmentedControl,
  SegmentedControlOption,
  SegmentedControlOptionList,
} from "@paloma/core-ui";
import {
  DashboardGridIcon,
  FilterSlidersHorizontalIcon,
  FireIcon,
  ListIcon,
  TrendUpIcon,
  TrophyIcon,
} from "@paloma/icons";
import { StatPills } from "./Recommended";

function Quests({ quests = [], labels }) {
  if (!quests.length) {
    return null;
  }

  // Paloma's Carousel asserts 2-5 items, so anything outside that range renders as a plain list.
  const useCarousel = quests.length >= 2 && quests.length <= 5;
  const cards = quests.map((quest, i) => (
    <article key={i} className="ea-r-quest">
      {quest.image && (
        <img
          className="ea-r-quest__art"
          src={quest.image}
          alt=""
          loading="lazy"
        />
      )}
      <div className="ea-r-quest__body">
        {quest.icon && (
          <img className="ea-r-quest__icon" src={quest.icon} alt="" />
        )}
        <div>
          <p className="ea-r-quest__title">{quest.title}</p>
          {quest.reward && (
            <p className="ea-r-quest__reward">{quest.reward}</p>
          )}
        </div>
      </div>
      <Button
        variant="inverse"
        size="large"
        onClick={() => quest.link && (window.location.href = quest.link)}
      >
        {labels.questsAccept}
      </Button>
    </article>
  ));

  return (
    <section className="ea-r-quests">
      <h3 className="ea-r-widget-heading">{labels.questsHeading}</h3>
      {useCarousel ? (
        <Carousel
          arrows
          dots
          backArrowLabel={labels.questsPrevious}
          forwardArrowLabel={labels.questsNext}
        >
          {cards}
        </Carousel>
      ) : (
        cards
      )}
    </section>
  );
}

function CommunityHeroes({ heroes = [], labels }) {
  if (!heroes.length) {
    return null;
  }

  return (
    <section className="ea-r-heroes">
      <h3 className="ea-r-widget-heading">
        <TrophyIcon />
        {labels.heroesHeading}
      </h3>
      <ol className="ea-r-heroes__list">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <a className="ea-r-hero" href={hero.path}>
              <Avatar
                size="medium"
                label={hero.displayName}
                imageSrc={hero.avatar}
              />
              <span className="ea-r-hero__text">
                <span className="ea-r-hero__name">{hero.displayName}</span>
                <span className="ea-r-hero__count">
                  {hero.count.toLocaleString()} {labels.heroesContributions}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Trending({
  heading,
  labels = {},
  filters = [],
  activeFilter,
  onFilterChange,
  topics = [],
  loading,
  error,
  quests = [],
  heroes = [],
}) {
  // View mode is pure presentation, so React owns it. Filtering re-queries Discourse,
  // so it is delegated back to the Glimmer host through onFilterChange.
  const [view, setView] = useState("card");

  return (
    <section className="ea-r-section ea-r-trending">
      <h2 className="ea-r-heading">
        {heading}
        <TrendUpIcon />
      </h2>

      <div className="ea-r-trending__controls">
        <div className="ea-r-trending__filters">
          <span className="ea-r-trending__filters-label">
            <FilterSlidersHorizontalIcon />
            {labels.filters}
          </span>
          {filters.map((filter) => (
            <Chip
              key={filter.id}
              label={filter.label}
              size="medium"
              selected={filter.id === activeFilter}
              leadingContent={filter.id === "trending" ? <FireIcon /> : undefined}
              onClick={() => onFilterChange?.(filter.id)}
            />
          ))}
        </div>

        {/* The runtime requires an OptionList wrapper even though the types allow bare Options. */}
        <SegmentedControl value={view} onChange={setView} size="medium">
          <SegmentedControlOptionList aria-label={labels.viewLabel || "Layout"}>
            <SegmentedControlOption
              id="card"
              leadingIcon={<DashboardGridIcon />}
            >
              {labels.viewCard}
            </SegmentedControlOption>
            <SegmentedControlOption id="compact" leadingIcon={<ListIcon />}>
              {labels.viewCompact}
            </SegmentedControlOption>
          </SegmentedControlOptionList>
        </SegmentedControl>
      </div>

      <div className="ea-r-trending__body">
        <div className="ea-r-trending__threads">
          {loading && <p className="ea-r-status">{labels.loading}</p>}
          {error && !loading && (
            <p className="ea-r-status ea-r-status--error">{labels.error}</p>
          )}

          {!loading && !error && !topics.length && (
            <p className="ea-r-status">{labels.empty}</p>
          )}

          {!loading && !error && topics.length > 0 && view === "card" && (
            <ul className="ea-r-trending__list">
              {topics.map((topic, index) => (
                <li key={topic.id} className="ea-r-row">
                  <p className="ea-r-row__eyebrow">
                    {topic.categoryName && <span>{topic.categoryName}</span>}
                    {topic.categoryName && <span aria-hidden="true">&bull;</span>}
                    <span>{topic.age}</span>
                  </p>

                  <h3 className="ea-r-row__title">
                    <a href={topic.url}>{topic.title}</a>
                  </h3>

                  {(topic.solved || topic.tags?.length > 0) && (
                    <div className="ea-r-row__badges">
                      {topic.solved && (
                        <Badge
                          standalone
                          label={labels.solved}
                          status="positive"
                          emphasis="bold"
                          size="small"
                        />
                      )}
                      {topic.tags?.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="x-small"
                          emphasis="subtle"
                        />
                      ))}
                    </div>
                  )}

                  {index === 0 && topic.image && (
                    <a className="ea-r-row__media" href={topic.url} tabIndex={-1} aria-hidden="true">
                      <img src={topic.image} alt="" loading="lazy" />
                    </a>
                  )}

                  <StatPills
                    likes={topic.likes}
                    replies={topic.replies}
                    views={topic.views}
                  />
                </li>
              ))}
            </ul>
          )}

          {!loading && !error && topics.length > 0 && view === "compact" && (
            <table className="ea-r-table">
              <thead>
                <tr>
                  <th scope="col">{labels.colTopic}</th>
                  <th scope="col">{labels.colAuthor}</th>
                  <th scope="col">{labels.colReplies}</th>
                  <th scope="col">{labels.colViews}</th>
                  <th scope="col">{labels.colActivity}</th>
                </tr>
              </thead>
              <tbody>
                {topics.map((topic) => (
                  <tr key={topic.id}>
                    <td>
                      <a href={topic.url}>{topic.title}</a>
                      {topic.categoryName && (
                        <span className="ea-r-table__category">
                          {topic.categoryName}
                        </span>
                      )}
                    </td>
                    <td>{topic.author}</td>
                    <td>{topic.replies?.toLocaleString()}</td>
                    <td>{topic.views?.toLocaleString()}</td>
                    <td>{topic.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <aside className="ea-r-trending__widgets">
          <Quests quests={quests} labels={labels} />
          <CommunityHeroes heroes={heroes} labels={labels} />
        </aside>
      </div>
    </section>
  );
}
