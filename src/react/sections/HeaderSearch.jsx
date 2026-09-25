import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Divider, ListItem } from "@paloma/core-ui";
import {
  CloseIcon,
  SearchIcon,
  SearchRecentIcon,
  TrendUpIcon,
} from "@paloma/icons";

const INPUT_ID = "ea-header-search-input";
const LISTBOX_ID = "ea-header-search-listbox";
const ROW_ID = "ea-header-search-row-";

const ICONS = {
  recent: SearchRecentIcon,
  trending: TrendUpIcon,
  search: SearchIcon,
};

function RowIcon({ name }) {
  const Glyph = ICONS[name] || SearchIcon;
  return <Glyph />;
}

function RowBadge({ row }) {
  if (row.badgeUrl) {
    return <img className="ea-header-search__badge" src={row.badgeUrl} alt="" />;
  }

  return (
    <span
      className="ea-header-search__badge ea-header-search__badge--letter"
      style={row.badgeColor ? { backgroundColor: `#${row.badgeColor}` } : undefined}
      aria-hidden="true"
    >
      {row.badgeInitial}
    </span>
  );
}

export default function HeaderSearch({
  placeholder = "",
  labels = {},
  sections = [],
  loading = false,
  isQuerying = false,
  onOpen,
  onQueryChange,
  onNavigate,
  onSubmitQuery,
}) {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [term, setTerm] = useState("");
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const rows = useMemo(() => {
    const flat = [];
    for (const section of sections) {
      for (const row of section.rows) {
        flat.push({ ...row, index: flat.length, domId: `${ROW_ID}${flat.length}` });
      }
    }
    return flat;
  }, [sections]);

  const grouped = useMemo(() => {
    let offset = 0;
    return sections.map((section) => {
      const slice = rows.slice(offset, offset + section.rows.length);
      offset += section.rows.length;
      return { ...section, rows: slice };
    });
  }, [sections, rows]);

  const showPanel = expanded && (loading || isQuerying || rows.length > 0);

  const open = useCallback(() => {
    setExpanded((wasExpanded) => {
      if (!wasExpanded) {
        onOpen?.();
      }
      return true;
    });
  }, [onOpen]);

  const close = useCallback(() => {
    setExpanded(false);
    setActiveIndex(-1);
  }, []);

  const openAndFocus = useCallback(() => {
    open();
    // The field is display:none on narrow viewports until `is-open` lands.
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => {
    const host = wrapperRef.current;
    if (!host) {
      return undefined;
    }
    host.dataset.eaSearchHost = "true";
    return () => delete host.dataset.eaSearchHost;
  }, []);

  const activate = useCallback(
    (row) => {
      close();
      if (row.kind === "query") {
        onSubmitQuery?.(row.query);
      } else {
        onNavigate?.(row.href);
      }
    },
    [close, onNavigate, onSubmitQuery]
  );

  // Navigation is intercepted here rather than on ListItem's onClick, which
  // delivers a react-aria PressEvent with no preventDefault().
  const onListClick = useCallback(
    (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) {
        return;
      }
      const anchor = event.target.closest("[data-row-index]");
      if (!anchor) {
        return;
      }
      event.preventDefault();
      const row = rows[Number(anchor.dataset.rowIndex)];
      if (row) {
        activate(row);
      }
    },
    [rows, activate]
  );

  const updateTerm = useCallback(
    (next) => {
      setTerm(next);
      setActiveIndex(-1);
      onQueryChange?.(next);
    },
    [onQueryChange]
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (expanded) {
          close();
        } else {
          updateTerm("");
        }
        return;
      }

      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
        return;
      }

      if (!rows.length) {
        return;
      }

      event.preventDefault();
      open();

      // Cycle through rows.length + 1 slots so -1 ("nothing selected") is reachable.
      const step = event.key === "ArrowDown" ? 1 : -1;
      const slots = rows.length + 1;
      setActiveIndex((current) => {
        const next = ((current + 1 + step + slots) % slots) - 1;
        if (next >= 0) {
          document
            .getElementById(rows[next].domId)
            ?.scrollIntoView({ block: "nearest" });
        }
        return next;
      });
    },
    [expanded, rows, close, open, updateTerm]
  );

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const active = rows[activeIndex];
      if (active) {
        activate(active);
        return;
      }
      close();
      onSubmitQuery?.(term);
    },
    [rows, activeIndex, activate, close, onSubmitQuery, term]
  );

  const onBlurCapture = useCallback(
    (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        close();
      }
    },
    [close]
  );

  const activeRowId = rows[activeIndex]?.domId;

  return (
    <div
      ref={wrapperRef}
      className={`ea-header-search${expanded ? " is-open" : ""}`}
      onBlur={onBlurCapture}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        className="ea-header-search__trigger"
        aria-label={labels.open}
        aria-expanded={showPanel}
        onClick={openAndFocus}
      >
        <SearchIcon />
      </button>

      <form className="ea-header-search__form" onSubmit={onSubmit}>
        <div className="ea-header-search__field">
          <span className="ea-header-search__field-icon" aria-hidden="true">
            <SearchIcon />
          </span>
          <input
            id={INPUT_ID}
            ref={inputRef}
            className="ea-header-search__input"
            type="search"
            autoComplete="off"
            role="combobox"
            aria-expanded={showPanel}
            aria-controls={LISTBOX_ID}
            aria-autocomplete="list"
            aria-activedescendant={activeRowId}
            aria-label={placeholder}
            placeholder={placeholder}
            value={term}
            onFocus={open}
            onChange={(event) => updateTerm(event.target.value)}
          />
        </div>

        <button
          type="button"
          className="ea-header-search__close"
          aria-label={labels.close}
          onClick={close}
        >
          <CloseIcon />
        </button>
      </form>

      {showPanel ? (
        <div
          id={LISTBOX_ID}
          className="ea-header-search__panel"
          role="listbox"
          aria-label={labels.suggestions}
        >
          {grouped.map((section, sectionIndex) => (
            <div key={section.id}>
              {sectionIndex > 0 ? (
                <Divider orientation="horizontal" emphasis="subtle" />
              ) : null}
              <section
                className="ea-header-search__section"
                role="group"
                aria-label={section.heading}
              >
                <p className="ea-header-search__heading" aria-hidden="true">
                  {section.heading}
                </p>
                <div
                  className="ea-header-search__list"
                  role="presentation"
                  onClick={onListClick}
                >
                  {section.rows.map((row) => (
                    <ListItem
                      key={row.domId}
                      as="a"
                      href={row.href}
                      id={row.domId}
                      data-row-index={row.index}
                      className={`ea-header-search__row${
                        row.index === activeIndex ? " is-active" : ""
                      }`}
                      role="option"
                      aria-selected={row.index === activeIndex}
                      size="x-small"
                      contained
                      fontWeight="bold"
                      title={row.title}
                      bodyText={row.subtitle}
                      leadingIcon={row.icon ? <RowIcon name={row.icon} /> : undefined}
                      leadingSlot={
                        row.badgeUrl || row.badgeInitial ? <RowBadge row={row} /> : undefined
                      }
                      onMouseEnter={() => setActiveIndex(row.index)}
                    />
                  ))}
                </div>
              </section>
            </div>
          ))}

          {loading ? (
            <p className="ea-header-search__status" role="status">
              {labels.loading}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
