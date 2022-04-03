const scissorshand = require("url:../../images/scissors-hand.png");
const scissors = require("url:../../images/scissors.png");

export function initScissors() {
  class MoveScissors extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      let style = document.createElement("style");
      style.textContent = `
            *{
                box-sizing: border-box;
            }
            
            .container{
                width:100%;
                
                
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
            `;
      this.shadow.appendChild(style);

      let div = document.createElement("div");
      div.classList.add("container");

      div.innerHTML = `
                <div class="move-container">
                    <div>
                    <img src=${scissors} class="img" who="scissors">
                    </div>
                </div>
            
            `;

      this.shadow.appendChild(div);
    }
  }
  customElements.define("move-scissors", MoveScissors);
}
