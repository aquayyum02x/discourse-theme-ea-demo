import icon from "discourse/helpers/d-icon";

// EA UI kit — section header.
// Heading (Electronic Arts Display, 28/36) with an optional icon on either side
// and a trailing slot for actions (See All link, carousel arrows, ...).
//
//   <EaSectionHeader @title={{...}} @iconAfter="users">
//     <:trailing><a class="ea-section__action" href="/latest">See All</a></:trailing>
//   </EaSectionHeader>
const EaSectionHeader = <template>
  <header class="ea-section__header" ...attributes>
    {{#if @title}}
      <h2 class="ea-section__heading">
        {{#if @iconBefore}}
          {{icon @iconBefore}}
        {{/if}}
        {{@title}}
        {{#if @iconAfter}}
          {{icon @iconAfter}}
        {{/if}}
      </h2>
    {{/if}}
    {{yield to="trailing"}}
  </header>
</template>;

export default EaSectionHeader;
