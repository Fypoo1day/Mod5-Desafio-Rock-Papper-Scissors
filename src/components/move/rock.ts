const rockhand = require("url:../../images/rock-hand.png");
const rock = require("url:../../images/stone.png");

export function initRock() {
  class MoveRock extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
    }

    connectedCallBack() {
      this.render();
    }

    render() {
      let style = document.createElement("style");
      style.textContent = `
            *{
                box-sizing: border-box;
            }
            .img{
                width:100%;
                height: 190px;
                cursor: pointer;
            }
            @media (min-width: 769px) {
                 .img{
                width:100%;
                height: 250px;
                
            }
            .img:hover {
                height: 300px;
              }
            }
            
            
            .container{
                width:100%;
                
            }
            
            `;

      this.shadow.appendChild(style);

      let div = document.createElement("div");
      div.classList.add("container");

      div.innerHTML = `
                <div class="move-container">
                    <div>
                        <img src=${rock} class="img" who="rock">
                    </div>
                
                
                </div>
            
            `;

      this.shadow.appendChild(div);
    }
  }
  customElements.define("move-rock", MoveRock);
}
