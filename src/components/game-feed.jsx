import { ListItem } from "@paloma/core-ui/components/ListItem";

const GAMEPLAY_FEED = [
  {
    title: "This is my gameplay on Apex Legends",
    pretitle: "Apex Legends General Discussion",
    body: "2 weeks ago",
    game: "Apex Legends",
    status: "Solved",
  },
  {
    title: "This is my gameplay on Apex Legends",
    pretitle: "Apex Legends General Discussion",
    body: "2 weeks ago",
    game: "Apex Legends",
    status: "Solved",
  },
  {
    title: "This is my gameplay on Apex Legends",
    pretitle: "Apex Legends General Discussion",
    body: "2 weeks ago",
    game: "Apex Legends",
    status: "Solved",
  },
  {
    title: "This is my gameplay on Apex Legends",
    pretitle: "Apex Legends General Discussion",
    body: "2 weeks ago",
    game: "Apex Legends",
    status: "Solved",
  },
];

function GameLogo() {
  return <span className="game-feed__logo" aria-hidden="true">AE</span>;
}

export default function GameFeed() {
  return (
    <section className="game-feed">
      <div className="game-feed__header">
        <div>
          <span className="game-feed__eyebrow">Community feed</span>
          <h2 className="game-feed__title">Gameplay discussions</h2>
        </div>
        <span className="game-feed__count">12,400+</span>
      </div>

      <div className="game-feed__list" role="list">
        {GAMEPLAY_FEED.map((item, index) => (
          <ListItem
            key={`${item.title}-${index}`}
            className={`game-feed__item ${index === 0 ? "--featured" : ""}`}
            contained
            size={index === 0 ? "medium" : "small"}
            pretitle={item.pretitle}
            title={item.title}
            bodyText={item.body}
            label={item.status}
            secondaryLabel={item.game}
            leadingSlot={<GameLogo />}
            trailingSlot={
              <span className="game-feed__reactions" aria-label="Community reactions">
                <span>1,000+</span>
                <span>1,000+</span>
                <span>1,000+</span>
              </span>
            }
          />
        ))}
      </div>
    </section>
  );
}
