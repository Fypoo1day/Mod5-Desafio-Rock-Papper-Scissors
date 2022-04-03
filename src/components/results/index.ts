//revisar el style tie del componente text ya que ahora uso una imagen y no modifico el texto

const imgWin = require("url:../../images/win.jpg");

const imgTie = require("url:../../images/tie.jpg");

const imgLose = require("url:../../images/lose.jpg");

export function initResults() {
  class Result extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallBack() {
      this.render();
    }
    render() {
      const variant = this.getAttribute("variant");
      var style = document.createElement("style");
      style.textContent = `
            *{
                box-sizing: border-box;
            }
            .contenedor{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
               margin: 0 auto;
                max-width: 290px;
             
            }
            
            
            .centrado{
                position: absolute;
                top: 50%;
                left: 50%;
            }
           
            .img{
                width: 200px
            }
         
            `;

      var content = this.textContent;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(style);

      var results = "";
      if (variant == "win") {
        results == imgWin;
      } else if (variant == "lose") {
        results = imgLose;
      } else {
        results = imgTie;
      }

      var div = document.createElement("div");
      div.innerHTML = `<div class="contenedor">
      <div class="result">
      
      <img src=${results} />
      </div>
  
      <div class="centrado">${content}</div>
    </div>`;

      shadow.appendChild(div);
    }
  }
  customElements.define("component-result", Result);
}
