# discourse-theme-ea-demo

## Local development

This theme is developed locally using the [Discourse Theme CLI](https://meta.discourse.org/t/discourse-theme-cli-console-app-to-help-you-build-themes/82950), which live-uploads file changes to a Discourse site as you save.

### 1. Install prerequisites

- **Ruby** (2.7+): required to install the `discourse_theme` gem.
  - Windows: install via [RubyInstaller](https://rubyinstaller.org/) (pick a "with DevKit" version).
  - macOS: `brew install ruby`, or use `rbenv`/`rvm`.
  - Linux: use your distro's package manager, or `rbenv`/`rvm`.
- Verify Ruby and gem are on your `PATH`:
  ```
  ruby -v
  gem -v
  ```

### 2. Install the Discourse Theme CLI gem

```
gem install discourse_theme
```

Verify it installed correctly:

```
discourse_theme -v
```

### 3. Get an API key

On the target Discourse site: **Admin → API → New API Key**, scoped to your user (a personal key is enough for local development).

### 4. Watch this theme

From the theme's root folder:

```
npm run watch
```

(equivalent to running `discourse_theme watch .` directly). The first run prompts for:

- the Discourse site URL (e.g. `http://localhost:3000` or a dev/staging instance)
- the API key from step 3
- which theme on that site to sync with (it can create a new one)

These are saved locally so subsequent `npm run watch` runs reconnect automatically. Once watching, saved changes to `.scss`, `.gjs`, `.js`, `settings.yml`, `locales/*.yml`, etc. are pushed live and the browser reloads.

To pull down changes made via the admin UI instead, run `npm run update`.
