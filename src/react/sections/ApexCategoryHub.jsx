import { Badge, Button, Chip } from "@paloma/core-ui";
import {
  ChatIcon,
  EyeIcon,
  LikeIcon,
  SearchIcon,
} from "@paloma/icons";
import { useState } from "react";

function Count({ value, label }) {
  if (typeof value !== "number") return null;
  return <span><strong>{value.toLocaleString()}</strong>{label}</span>;
}

function FeaturedCard({ topic, labels }) {
  return (
    <article className="ea-apex-featured-card">
      <a href={topic.url} className="ea-apex-featured-card__link">
        <span className="ea-apex-featured-card__media">
          {topic.image ? <img src={topic.image} alt="" loading="lazy" /> : <span className="ea-apex-featured-card__placeholder" aria-hidden="true">{topic.title?.slice(0, 1)}</span>}
        </span>
        <span className="ea-apex-featured-card__body">
          <Badge standalone label={labels.featured} size="small" emphasis="bold" />
          <strong>{topic.title}</strong>
          {topic.author ? <small>{topic.author}</small> : null}
          <span className="ea-apex-featured-card__stats">
            <Chip size="x-small" emphasis="minimal" leadingContent={<ChatIcon />} label={`${topic.replies || 0} ${labels.replies}`} />
            <Chip size="x-small" emphasis="minimal" leadingContent={<EyeIcon />} label={`${topic.views || 0} ${labels.views}`} />
          </span>
        </span>
      </a>
    </article>
  );
}

function PlaceCard({ place }) {
  return (
    <li>
      <a className="ea-apex-place" href={place.url}>
        <span className="ea-apex-place__icon" style={place.color ? { backgroundColor: place.color } : undefined}>
          {place.logo ? <img src={place.logo} alt="" /> : place.name?.slice(0, 1)}
        </span>
        <span className="ea-apex-place__copy">
          <strong>{place.name}</strong>
          {place.description ? <small>{place.description}</small> : null}
        </span>
        {typeof place.topics === "number" ? <span className="ea-apex-place__count">{place.topics.toLocaleString()}</span> : null}
      </a>
    </li>
  );
}

export default function ApexCategoryHub({
  title,
  eyebrow,
  description,
  logo,
  heroImage,
  topicCount,
  postCount,
  places = [],
  featuredTopics = [],
  importantLinks = [],
  loading,
  error,
  onSearch,
  onCreateTopic,
  labels = {},
}) {
  const [term, setTerm] = useState("");
  const submit = (event) => {
    event.preventDefault();
    if (term.trim()) onSearch?.(term.trim());
  };

  return (
    <section className="ea-apex-hub">
      <header
        className={`ea-apex-hero${heroImage ? " --has-image" : ""}`}
        style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
      >
        <div className="ea-apex-hero__scrim" />
        <div className="ea-apex-hero__content">
          <div className="ea-apex-hero__identity">
            {logo ? <img className="ea-apex-hero__logo" src={logo} alt="" /> : null}
            <div>
              <p className="ea-apex-hero__eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              {description ? <p className="ea-apex-hero__description">{description}</p> : null}
            </div>
          </div>

          <div className="ea-apex-hero__footer">
            <div className="ea-apex-hero__counts">
              <Count value={topicCount} label={labels.topics} />
              <Count value={postCount} label={labels.posts} />
            </div>
            <Button variant="primary" size="large" onClick={onCreateTopic}>{labels.startDiscussion}</Button>
          </div>

          <form className="ea-apex-search" onSubmit={submit}>
            <SearchIcon />
            <label className="sr-only" htmlFor="ea-apex-search">{labels.searchLabel}</label>
            <input id="ea-apex-search" type="search" value={term} onChange={(event) => setTerm(event.target.value)} placeholder={labels.searchPlaceholder} />
            <button type="submit" aria-label={labels.searchLabel}><SearchIcon /></button>
          </form>
        </div>
      </header>

      <div className="ea-apex-hub__content">
        <section className="ea-apex-section ea-apex-featured">
          <div className="ea-apex-section__heading"><div><p>{eyebrow}</p><h2>{labels.featured}</h2></div><LikeIcon /></div>
          {loading ? <p className="ea-apex-status">{labels.loading}</p> : null}
          {error ? <p className="ea-apex-status --error">{labels.error}</p> : null}
          {!loading && !error && !featuredTopics.length ? <p className="ea-apex-status">{labels.noFeatured}</p> : null}
          {featuredTopics.length ? <div className="ea-apex-featured__grid">{featuredTopics.map((topic) => <FeaturedCard key={topic.id} topic={topic} labels={labels} />)}</div> : null}
        </section>

        <div className="ea-apex-hub__columns">
          <section className="ea-apex-section ea-apex-places">
            <div className="ea-apex-section__heading"><div><p>{eyebrow}</p><h2>{labels.places}</h2></div></div>
            <ul>{places.map((place) => <PlaceCard key={place.id} place={place} />)}</ul>
          </section>

          {importantLinks.length ? <aside className="ea-apex-section ea-apex-links">
            <div className="ea-apex-section__heading"><div><p>{eyebrow}</p><h2>{labels.importantLinks}</h2></div></div>
            <ul>{importantLinks.map((link) => <li key={`${link.text}-${link.url}`}><a href={link.url}>{link.text}</a></li>)}</ul>
          </aside> : null}
        </div>
      </div>
    </section>
  );
}
