import { Chip, MediaCard } from "@paloma/core-ui";
import { ChatIcon, EyeIcon, LightbulbIcon, LikeIcon } from "@paloma/icons";

export function StatPills({ likes, replies, views }) {
  const pills = [
    { icon: <LikeIcon />, value: likes, label: "likes" },
    { icon: <ChatIcon />, value: replies, label: "replies" },
    { icon: <EyeIcon />, value: views, label: "views" },
  ].filter((p) => typeof p.value === "number");

  if (!pills.length) {
    return null;
  }

  return (
    <div className="ea-r-pills">
      {pills.map((p) => (
        <Chip
          key={p.label}
          size="x-small"
          emphasis="minimal"
          leadingContent={p.icon}
          label={`${p.value.toLocaleString()} ${p.label}`}
        />
      ))}
    </div>
  );
}

export default function Recommended({ heading, seeAllLabel, seeAllUrl, topics = [] }) {
  return (
    <section className="ea-r-section ea-r-recommended">
      <header className="ea-r-section__head">
        <h2 className="ea-r-heading">
          {heading}
          <LightbulbIcon />
        </h2>
        {seeAllUrl && (
          <a className="ea-r-seeall" href={seeAllUrl}>
            {seeAllLabel}
          </a>
        )}
      </header>

      {topics.length ? (
        <div className="ea-r-recommended__grid">
          {topics.map((topic) => (
            <MediaCard
              key={topic.id}
              contained
              size="medium"
              titleTag="h3"
              title={topic.title}
              eyebrow={topic.categoryName}
              body={topic.author}
              badgeLabel={topic.solved ? "Solved" : undefined}
              badgeAriaLabel={topic.solved ? "Solved topic" : undefined}
              media={
                <img
                  src={topic.image}
                  alt=""
                  loading="lazy"
                  className="ea-r-media"
                />
              }
              trailingSlot={
                <StatPills
                  likes={topic.likes}
                  replies={topic.replies}
                  views={topic.views}
                />
              }
              trailingSlotBottom
              onClick={() => (window.location.href = topic.url)}
            />
          ))}
        </div>
      ) : (
        <p className="ea-r-status">No recommendations yet.</p>
      )}
    </section>
  );
}
