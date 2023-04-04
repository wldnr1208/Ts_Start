export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}
/* Encapsulate the HTml element Creation html만드는 것을 캡슐화 */

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    //insertAdjacentElement -> 포지션을 추가하는 것이 가능
    parent.insertAdjacentElement(position, this.element);
  }
}
