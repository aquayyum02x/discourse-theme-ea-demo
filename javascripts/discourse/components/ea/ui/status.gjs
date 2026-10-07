// EA UI kit — status line for async sections (loading / error / empty).
// The data-state attribute is omitted when @state is not set.
//
//   <EaStatus @state="loading">{{i18n ...}}</EaStatus>
const EaStatus = <template>
  <p class="ea-section__status" data-state={{@state}} ...attributes>
    {{yield}}
  </p>
</template>;

export default EaStatus;
