import { Header } from "@paloma/core-ui/components/Header";
import { Link } from "@paloma/core-ui/components/Link";
import { Logo } from "@paloma/core-ui/components/Logo";
import { ThemeProvider } from "@paloma/core-ui/components/ThemeProvider";

export default function SiteHeader({
  productName = "EA Forums",
  homeUrl = "/",
  primaryNav = [],
  secondaryNav = [],
  onSearchSubmit,
}) {
  return (
    <ThemeProvider mode="dark">
      <Header
        logo={
          <Link href={homeUrl} aria-label="Home" hoverUnderline={false}>
            <Logo productName={productName} />
          </Link>
        }
        primaryNav={primaryNav.map(({ label, href }) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
        secondaryNav={secondaryNav.map(({ label, href }) => (
          <Link key={href} href={href} isSecondaryLink>
            {label}
          </Link>
        ))}
        searchEnabled={Boolean(onSearchSubmit)}
        onSearchSubmit={onSearchSubmit}
      />
    </ThemeProvider>
  );
}
