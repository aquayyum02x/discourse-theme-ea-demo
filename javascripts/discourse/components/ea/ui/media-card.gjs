import Component from "@glimmer/component";
import { or } from "discourse/truth-helpers";

// EA UI kit — media card.
// Shared anatomy behind the announcement cards, the box-art slider cards and
// the recommended tiles: rounded media (16/9 by default, lazy, decorative alt)
// with an absolutely-positioned overlay slot, plus an optional body slot.
//
//   <EaMediaCard @href={{card.link}} @image={{card.image}} class="my-card">
//     <:overlay><EaBadge @variant="solved" @icon="check">Solved</EaBadge></:overlay>
//     <:body><span class="my-card__title">{{card.title}}</span></:body>
//   </EaMediaCard>
//
// @href       — whole card is one link (announcements, box art).
// @mediaHref  — only the media area links (recommended tiles, where the body
//               carries its own title link); the media link is presentation-only.
// @placeholder — render a surface placeholder when @image is missing.
// @featured   — adds the --featured modifier class to the card root.
export default class EaMediaCard extends Component {
  <template>
    {{#if @href}}
      <a
        href={{@href}}
        class="ea-media-card {{if @featured '--featured'}}"
        ...attributes
      >
        {{#if (or @image @placeholder (has-block "overlay"))}}
          <span class="ea-media-card__media">
            {{#if @image}}
              <img
                class="ea-media-card__image"
                src={{@image}}
                alt=""
                loading="lazy"
              />
            {{else if @placeholder}}
              <span class="ea-media-card__placeholder"></span>
            {{/if}}
            {{yield to="overlay"}}
          </span>
        {{/if}}
        {{#if (has-block "body")}}
          <div class="ea-media-card__body">
            {{yield to="body"}}
          </div>
        {{/if}}
      </a>
    {{else}}
      <div class="ea-media-card {{if @featured '--featured'}}" ...attributes>
        {{#if (or @image @placeholder (has-block "overlay"))}}
          {{#if @mediaHref}}
            <a
              class="ea-media-card__media"
              href={{@mediaHref}}
              tabindex="-1"
              aria-hidden="true"
            >
              {{#if @image}}
                <img
                  class="ea-media-card__image"
                  src={{@image}}
                  alt=""
                  loading="lazy"
                />
              {{else if @placeholder}}
                <span class="ea-media-card__placeholder"></span>
              {{/if}}
              {{yield to="overlay"}}
            </a>
          {{else}}
            <span class="ea-media-card__media">
              {{#if @image}}
                <img
                  class="ea-media-card__image"
                  src={{@image}}
                  alt=""
                  loading="lazy"
                />
              {{else if @placeholder}}
                <span class="ea-media-card__placeholder"></span>
              {{/if}}
              {{yield to="overlay"}}
            </span>
          {{/if}}
        {{/if}}
        {{#if (has-block "body")}}
          <div class="ea-media-card__body">
            {{yield to="body"}}
          </div>
        {{/if}}
      </div>
    {{/if}}
  </template>
}
