const papperhand = require("url:../../images/papper-hand.png");
const papper = require("url:../../images/note.png");

export function initPapper() {
  class MovePapper extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
    }
    connectedCallBack() {
      this.render();
    }

    render() {
      const who = this.getAttribute("who");
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
            
            
            .active{
                height: 500px;
                color: aqua;
                margin:20px;
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
                    <img src=${papper} class="img">
                </div>
            </div>
        
        `;

      div.className = who;

      this.shadow.appendChild(div);
    }
  }

  customElements.define("move-papper", MovePapper);
}
