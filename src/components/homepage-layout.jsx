import { Alert } from "@paloma/core-ui/components/Alert";
import { Badge } from "@paloma/core-ui/components/Badge";
import { Button } from "@paloma/core-ui/components/Button";
import { Divider } from "@paloma/core-ui/components/Divider";
import { Link } from "@paloma/core-ui/components/Link";
import { Text } from "@paloma/core-ui/components/Text";
import { useEffect, useState } from "react";
import AnnouncementGrid from "./announcement-grid";
import CommunitySidebar from "./community-sidebar";
import GameFeed from "./game-feed";
import StatSlider from "./stat-slider";
import { ThemeProvider } from "@paloma/core-ui/components/ThemeProvider";

function HomepageTools() {
  return (
    <section className="ea-react-homepage-layout__tools">
      <Alert
        className="ea-react-homepage-layout__alert"
        status="none"
        title="EA Forums community"
        body="Find game help, updates, and the latest player discussions."
        badge="LIVE"
      />
      <Divider />
      <div className="ea-react-homepage-layout__actions">
        <Badge
          standalone
          variant="text"
          label="Community"
          appearance="highlight"
          size="small"
        />
        <Text as="p" size="small">
          Explore what is happening across EA games.
        </Text>
        <Button
          size="small"
          variant="secondary"
          onPress={() => window.location.assign("/categories")}
        >
          Browse categories
        </Button>
        <Link href="/latest" size="small" hoverUnderline>
          Latest discussions
        </Link>
      </div>
    </section>
  );
}

export default function HomepageLayout({ cards = [] }) {
  const [isHomepageVisible, setIsHomepageVisible] = useState(true);

  useEffect(() => {
    window.alert("Homepage loaded");
  }, []);

  return (
    <main className="ea-react-homepage-layout">
      <ThemeProvider mode="dark">
        <Button
          size="small"
          variant="secondary"
          onPress={() => setIsHomepageVisible((visible) => !visible)}
        >
          {isHomepageVisible ? "Hide homepage" : "Show homepage"}
        </Button>
        {isHomepageVisible && (
          <>
            <HomepageTools />
            <section className="ea-react-homepage-layout__game-slider">
              <StatSlider cards={cards} />
            </section>
            <section className="ea-react-homepage-layout__content-grid">
              <CommunitySidebar />
            </section>
            <section className="ea-react-homepage-layout__announcements">
              <AnnouncementGrid />
            </section>
          </>
        )}
      </ThemeProvider>
    </main>
  );
}
