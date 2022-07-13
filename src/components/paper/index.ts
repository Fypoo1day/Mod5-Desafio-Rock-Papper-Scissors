const papel = require("url:../../../src/assets/papper-hand.png");

customElements.define(
  "hand-paper",
  class Button extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const style = document.createElement("style");
      this.shadow.innerHTML = `
        <img class="hand-paper" src="${papel}">
        `;

      style.innerHTML = `
            .hand-paper {
                height: 100%;
                width: 100%
            }
            `;
      this.shadow.appendChild(style);
    }
  }
);
