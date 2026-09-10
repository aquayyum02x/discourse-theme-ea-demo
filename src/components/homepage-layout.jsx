import AnnouncementGrid from "./announcement-grid";
import StatSlider from "./stat-slider";

export default function HomepageLayout({ cards = [] }) {
  return (
    <main className="ea-react-homepage-layout">
      <StatSlider cards={cards} />
      <AnnouncementGrid />
    </main>
  );
}
