import { Chip } from "@paloma/core-ui";
import { ChatIcon, EyeIcon, LightbulbIcon, LikeIcon } from "@paloma/icons";

export function StatPills({ likes, replies, views }) {
  const pills = [
    { icon: <LikeIcon />, value: likes, label: "likes" },
    { icon: <ChatIcon />, value: replies, label: "replies" },
    { icon: <EyeIcon />, value: views, label: "views" },
  ].filter((pill) => typeof pill.value === "number");
  if (!pills.length) {
    return null;
  }
  return <div className="ea-r-pills">{pills.map((pill) => <Chip key={pill.label} size="x-small" emphasis="minimal" leadingContent={pill.icon} label={`${pill.value.toLocaleString()} ${pill.label}`} />)}</div>;
}

function RecommendationCard({ topic }) {
  return (
    <article className="ea-r-recommendation">
      <a className="ea-r-recommendation__link" href={topic.url}>
        <div className="ea-r-recommendation__media">{topic.image ? <img src={topic.image} alt="" loading="lazy" /> : null}</div>
        <div className="ea-r-recommendation__scrim" />
        <div className="ea-r-recommendation__content">
          {topic.categoryName ? <p className="ea-r-recommendation__category">{topic.categoryName}</p> : null}
          <h3>{topic.title}</h3>
          {topic.author ? <p>{topic.author}</p> : null}
        </div>
      </a>
      <div className="ea-r-recommendation__stats"><StatPills likes={topic.likes} replies={topic.replies} views={topic.views} /></div>
    </article>
  );
}

export default function Recommended({ heading, seeAllLabel, seeAllUrl, topics = [] }) {
  return (
    <section className="ea-r-section ea-r-recommended">
      <header className="ea-r-section__head">
        <h2 className="ea-r-heading">{heading}<LightbulbIcon /></h2>
        {seeAllUrl ? <a className="ea-r-seeall" href={seeAllUrl}>{seeAllLabel}</a> : null}
      </header>
      {topics.length ? <div className="ea-r-recommended__grid">{topics.slice(0, 5).map((topic) => <RecommendationCard key={topic.id} topic={topic} />)}</div> : <p className="ea-r-status">No recommendations yet.</p>}
    </section>
  );
}
