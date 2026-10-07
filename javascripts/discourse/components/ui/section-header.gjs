import icon from "discourse/helpers/d-icon";

// ─────────────────────────────────────────────────────────────────────────────
// UI LIBRARY: section header — a section title with an optional icon and a
// trailing action slot (e.g. a "See All" link).
//
//   <UiSectionHeader @title="Announcements" @icon="bullhorn">
//     <:trailing><a href="/latest">See All</a></:trailing>
//   </UiSectionHeader>
//
// `<:trailing>` is a named slot — the caller's action link goes there.
// ─────────────────────────────────────────────────────────────────────────────
const UiSectionHeader = <template>
  <header class="ui-section-header" ...attributes>
    {{#if @title}}
      <h2 class="ui-section-header__heading">
        {{#if @icon}}
          {{icon @icon}}
        {{/if}}
        {{@title}}
      </h2>
    {{/if}}
    {{yield to="trailing"}}
  </header>
</template>;

export default UiSectionHeader;
