// Loads the compiled React island bundle that ships as a theme asset.
//
// The bundle lives in assets/ (declared in about.json), not javascripts/, so Discourse stores it
// as an Upload (8 MB limit) instead of a theme field (1,048,576 character limit). Its public URL
// is published to theme JS as settings.theme_uploads.<key>.

let modulePromise;

export function loadReactIsland() {
  if (modulePromise) {
    return modulePromise;
  }

  const src = settings.theme_uploads?.ea_react_js;

  if (!src) {
    modulePromise = Promise.reject(
      new Error("[ea-react] asset ea_react_js is not declared in about.json")
    );
    return modulePromise;
  }

  // Runtime URL keeps this a native dynamic import rather than something the theme build resolves.
  modulePromise = import(src);

  return modulePromise;
}
