import { Avatar } from "@paloma/core-ui/components/Avatar";
import { Button } from "@paloma/core-ui/components/Button";
import { ListItem } from "@paloma/core-ui/components/ListItem";
import { MediaCard } from "@paloma/core-ui/components/MediaCard";

const HERO_IMAGE =
  "https://help.ea.com/_images/seegk6e7ypwi/7jN3C28fdJbwCiVBApxgDe/cadaf9fe8310b4fcc71fae54edd40810/apex-legends-box-art-image.webp";

const MEMBERS = [
  ["SimsArchitect_Maya", "2,847 Contributions"],
  ["ProPlayerKJ", "1,523 Contributions"],
  ["NightOwlGaming", "4,106 Contributions"],
  ["CasualCrafter", "4,106 Contributions"],
  ["Casual Crafter", "4,106 Contributions"],
];

export default function CommunitySidebar() {
  return (
    <aside className="community-sidebar">
      <MediaCard
        className="community-sidebar__hero"
        contained
        eyebrow="Apex Legends Forums"
        title="Contribute a post on the Apex Legends Forums"
        body="Reward Exclusive Badge"
        media={<img src={HERO_IMAGE} alt="Apex Legends" />}
        action="Accept Quest"
        onClick={() => window.location.assign("/latest")}
        titleTag="h3"
      />

      <section className="community-sidebar__panel">
        <div className="community-sidebar__panel-header">
          <h2>Community Heroes</h2>
          <Button
            iconOnly
            aria-label="View community heroes"
            size="x-small"
            variant="secondary"
          >
            +
          </Button>
        </div>
        <div className="community-sidebar__members" role="list">
          {MEMBERS.map(([name, contribution]) => (
            <ListItem
              key={name}
              className="community-sidebar__member"
              title={name}
              bodyText={contribution}
              size="small"
              leadingSlot={
                <Avatar label={name.slice(0, 2)} size="small" authenticated />
              }
            />
          ))}
        </div>
      </section>
    </aside>
  );
}
