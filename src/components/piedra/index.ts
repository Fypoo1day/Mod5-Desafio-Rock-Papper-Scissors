const piedra = require("url:../../../src/assets/rock-hand.png");

customElements.define(
  "hand-rock",
  class Piedra extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const style = document.createElement("style");
      this.shadow.innerHTML = `
        <img class="hand-rock" src="${piedra}">
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
