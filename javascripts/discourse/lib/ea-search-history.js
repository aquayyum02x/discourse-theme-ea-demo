const TERMS_KEY = "ea_search_recent_terms";
const TOPICS_KEY = "ea_search_recent_topics";
const MAX_ENTRIES = 5;

function readList(key) {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeList(key, list) {
  try {
    window.localStorage.setItem(key, JSON.stringify(list.slice(0, MAX_ENTRIES)));
  } catch {
    // Private browsing and quota errors must never break search.
  }
}

// Anything read back out of localStorage is untrusted input, so navigable
// values are restricted to same-origin paths before they reach an href.
function isSafePath(value) {
  return typeof value === "string" && /^\/[^/\\]/.test(value);
}

function isSafeImage(value) {
  return isSafePath(value) || /^https:\/\/[^\s"'<>]+$/i.test(value || "");
}

function isHexColor(value) {
  return /^[0-9a-f]{6}$/i.test(value || "");
}

export function readRecentTerms() {
  return readList(TERMS_KEY).filter(
    (term) => typeof term === "string" && term.trim()
  );
}

export function rememberTerm(term) {
  const clean = String(term || "").trim();

  if (!clean) {
    return;
  }

  writeList(TERMS_KEY, [
    clean,
    ...readRecentTerms().filter((existing) => existing !== clean),
  ]);
}

export function readRecentTopics() {
  return readList(TOPICS_KEY).filter(
    (topic) => topic && typeof topic.title === "string" && isSafePath(topic.url)
  );
}

export function rememberTopic(topic) {
  if (!topic?.id || !isSafePath(topic.url)) {
    return;
  }

  const title = String(topic.title || "").trim();

  if (!title) {
    return;
  }

  const entry = {
    id: topic.id,
    title,
    url: topic.url,
    categoryName: topic.categoryName ? String(topic.categoryName) : null,
    categoryLogo: isSafeImage(topic.categoryLogo) ? topic.categoryLogo : null,
    categoryColor: isHexColor(topic.categoryColor) ? topic.categoryColor : null,
  };

  writeList(TOPICS_KEY, [
    entry,
    ...readRecentTopics().filter((existing) => existing.id !== entry.id),
  ]);
}
