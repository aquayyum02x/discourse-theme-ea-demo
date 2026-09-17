import Component from "@glimmer/component";
import { action } from "@ember/object";
import { service } from "@ember/service";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import {
  mountSiteHeader,
  unmount,
} from "../react-dist/ea-react-widgets";

export default class EaSiteHeader extends Component {
  @service site;
  @service router;

  mountElement;

  get primaryNav() {
    return (this.site.categories || [])
      .filter((category) => !category.parent_category_id)
      .slice(0, settings.paloma_header_primary_nav_max)
      .map((category) => ({ label: category.name, href: category.url }));
  }

  get secondaryNav() {
    return [
      { label: "Categories", href: "/categories" },
      { label: "Latest", href: "/latest" },
    ];
  }

  @action
  onSearchSubmit(term) {
    if (!term) {
      return;
    }
    this.router.transitionTo("full-page-search", { queryParams: { q: term } });
  }

  @action
  async mount(element) {
    this.mountElement = element;
    await mountSiteHeader(element, {
      productName: settings.paloma_header_product_name,
      primaryNav: this.primaryNav,
      secondaryNav: this.secondaryNav,
      onSearchSubmit: this.onSearchSubmit,
    });
  }

  willDestroy() {
    unmount(this.mountElement);
    super.willDestroy(...arguments);
  }

  <template>
    <div class="ea-site-header" {{didInsert this.mount}}></div>
  </template>
}
