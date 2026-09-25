import { Breadcrumb } from "@paloma/core-ui";

export default function Breadcrumbs({ crumbs = [], label = "Breadcrumb", moreLabel }) {
  if (!crumbs.length) {
    return null;
  }

  return (
    <nav className="ea-breadcrumbs" aria-label={label}>
      <Breadcrumb
        separator=">"
        locales={moreLabel ? { label: moreLabel, ariaLabel: moreLabel } : undefined}
      >
        {crumbs.map((crumb) => (
          <Breadcrumb.Item
            key={`${crumb.label}-${crumb.url || "current"}`}
            href={crumb.isActive ? undefined : crumb.url}
            current={crumb.isActive || undefined}
          >
            {crumb.label}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </nav>
  );
}
