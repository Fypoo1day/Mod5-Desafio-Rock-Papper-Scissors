export function initButton() {
  class ButtonElement extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallBack() {
      this.render();
    }
    render() {
      const content = this.textContent;
      const style = document.createElement("style");
      style.textContent = `
            *{
                box-sizing: border-box;
            }
            
            .button {
                width:100%;
                color:#D8FCFC;
                background-color: #006CFC;
                border:10px solid #001997;
                font-size:45px;
                font-family:"Odibee Sans";
                border-radius: 10px;
                cursor: pointer;
                
            }
            .button:hover {
                background-color: #2f44ad;
              }
            `;

      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(style);

      const div = document.createElement("button");
      div.classList.add("button");
      div.innerText = content;

      shadow.appendChild(div);
    }
  }
  customElements.define("component-button", ButtonElement);
}
