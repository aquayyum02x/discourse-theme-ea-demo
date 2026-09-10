import { Accordion } from "@paloma/core-ui/components/Accordion";

const STATIC_ANNOUNCEMENTS = [
  {
    title: "Apex Legends: Marked Patch Notes",
    subtitle: "Apex Legends",
    label: "Patch notes",
    content: "Read about the latest balance changes, fixes, and improvements.",
  },
  {
    title: "Friday Highlights",
    subtitle: "The Sims 4",
    label: "Community update",
    content: "See this week's featured community stories and updates.",
  },
  {
    title: "Battlefield 6 Update Notes",
    subtitle: "Battlefield",
    label: "Game update",
    content: "Explore the latest Battlefield 6 changes and new features.",
  },
  {
    title: "Full FC 27 Player Database",
    subtitle: "EA Sports FC 27",
    label: "Database",
    content: "Browse player ratings, attributes, and team information.",
  },
];

export default function AnnouncementGrid() {
  return (
    <section>
      <h2 className="ea-section-heading">Announcements</h2>
      <div>
        {STATIC_ANNOUNCEMENTS.map((announcement) => (
          <Accordion
            key={announcement.title}
            className="block-announcements__accordion"
            title={announcement.title}
            subtitle={announcement.subtitle}
            label={announcement.label}
            leadingIcon={<span aria-hidden="true">EA</span>}
          >
            <p>{announcement.content}</p>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
