import { BaseComponent } from "./item/component.js";

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is PageComponenet!</ul>');
  }
}
