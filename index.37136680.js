function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},s=t.parcelRequireb260;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequireb260=s),s.register("27Lyk",(function(t,n){var a,s;e(t.exports,"register",(()=>a),(e=>a=e)),e(t.exports,"resolve",(()=>s),(e=>s=e));var o={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("aQ0Ac",(function(e,t){e.exports=new URL(s("27Lyk").resolve("fdqFq"),import.meta.url).toString()})),s.register("25qx2",(function(e,t){e.exports=new URL(s("27Lyk").resolve("8qOpK"),import.meta.url).toString()})),s.register("kWvoY",(function(e,t){e.exports=new URL(s("27Lyk").resolve("fWnj3"),import.meta.url).toString()})),s("27Lyk").register(JSON.parse('{"1LzKV":"index.37136680.js","fdqFq":"tie.6586eb87.png","8qOpK":"win.bbfce0b4.png","fWnj3":"lose.b18c6366.png","ggqlk":"rules.64875818.svg","1I4AJ":"Piedra-Papel-Tijera.1b361087.svg","bUIAG":"papper-hand.7396d2a8.png","kQAzv":"scissors-hand.dcc90380.png","hXxjk":"rock-hand.3535c2a2.png"}'));const o={data:{currentGame:{computerPlay:"",myPlay:""},history:{myScore:0,computerScore:0}},getStorage(){const e=JSON.parse(localStorage.getItem("data"));localStorage.getItem("data")&&(this.data.history=e)},getState(){return this.data},setState(e){this.data=e},setMove(e){const t=this.getState();t.currentGame.myPlay=e;t.currentGame.computerPlay=["tijera","piedra","papel"][Math.floor(3*Math.random())],this.setHistory()},setHistory(){const e=this.getState(),t=this.whoWins(),n=e.history.myScore,a=e.history.computerScore;"victoria"==t&&this.setState({...e,history:{myScore:n+1,computerScore:a}}),"derrota"==t&&this.setState({...e,history:{myScore:n,computerScore:a+1}}),this.savedData()},whoWins(){const e=this.getState().currentGame;if(["tijera"==e.myPlay&&"tijera"==e.computerPlay,"piedra"==e.myPlay&&"piedra"==e.computerPlay,"papel"==e.myPlay&&"papel"==e.computerPlay].includes(!0))return"empate";return["tijera"==e.myPlay&&"papel"==e.computerPlay,"piedra"==e.myPlay&&"tijera"==e.computerPlay,"papel"==e.myPlay&&"piedra"==e.computerPlay].includes(!0)?"victoria":"derrota"},savedData(){const e=this.getState().history;localStorage.setItem("data",JSON.stringify(e))},cleanData(){localStorage.setItem("data",JSON.stringify({myScore:0,computerScore:0}))}};const r={tie:s("aQ0Ac"),win:s("25qx2"),loose:s("kWvoY")};var i;i=new URL(s("27Lyk").resolve("ggqlk"),import.meta.url).toString(),o.getStorage();var c;c=new URL(s("27Lyk").resolve("1I4AJ"),import.meta.url).toString();const d=[{path:/\/welcome/,component:function(e){const t=document.createElement("div");t.classList.add("page");const n=document.createElement("style");return t.innerHTML=`\n        <img class="pt-img" src="${c}" alt="">\n            <button-comp class="btn-comp">Empezar</button-comp>\n                <div class="hands">\n                    <hand-rock></hand-rock>\n                    <hand-paper></hand-paper>\n                    <hand-scissor></hand-scissor>\n                </div>\n    `,n.innerHTML="\n        .page{\n            width: 100%;\n\t\t    height: 100vh;\n\t\t    padding-top: 100px;\n\t\t    display: flex;\n\t\t    align-items: center;\n\t\t    flex-direction: column;\n\t\t    justify-content: space-between;\n        }\n\n        .pt-img{\n            width: 284px;\n        }\n\n        .hands{\n            width: 100%;\n            display: flex;\n            justify-content: space-evenly;\n        }\n    ",t.querySelector(".btn-comp")?.addEventListener("click",(()=>{e.goTo("/rock-papper-scissors/rules")})),t.appendChild(n),t}},{path:/\/rules/,component:function(e){const t=document.createElement("div");t.classList.add("page");const n=document.createElement("style");return t.innerHTML=`\n          <img class="img-rules" src="${i}">\n          <button-comp class="btn-comp">¡jugar!</button-comp>\n          <div class="hands">\n              <hand-scissor></hand-scissor>\n              <hand-rock></hand-rock>\n              <hand-paper></hand-paper>\n          </div>\n      `,n.innerHTML="\n      .page {\n          width: 100%;\n          height: 100vh;\n          padding-top: 100px;\n          display: flex;\n          align-items: center;\n          flex-direction: column;\n          justify-content: space-between;\n      }\n      .hands {\n          width: 100%;\n          display: flex;\n          justify-content: space-evenly;\n      }\n      .img-rules {\n          height: 240px;\n      }",t.querySelector(".btn-comp")?.addEventListener("click",(()=>{e.goTo("/desafio-modulo-5/game")})),t.appendChild(n),t}},{path:/\/game/,component:function(e){const t=document.createElement("div");t.classList.add("page");const n=document.createElement("style");let a=3;const s=setInterval((()=>{a--;t.querySelector(".counter-el").textContent=String(a),a<0&&(clearInterval(s),e.goTo("/desafio-modulo-5/rules"))}),1e3);t.innerHTML=`\n    <div class="counter-el">${a}</div>\n    <div class="hands-top">\n      <hand-scissor class="scissor-top hand-display-none"></hand-scissor>\n      <hand-rock class="stone-top hand-display-none"></hand-rock>\n      <hand-paper class="paper-top hand-display-none"></hand-paper>\n    </div>\n    <div class="hands">\n      <hand-scissor class="scissor"></hand-scissor>\n      <hand-rock class="stone"></hand-rock>\n      <hand-paper class="paper"></hand-paper>\n    </div>\n    `,n.innerHTML="\n\t  .page {\n      width: 100%;\n      height: 100vh;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n    .hands {\n      width: 100%;\n      display: flex;\n      justify-content: space-evenly;\n    }\n    .active-hands{\n      height: 157px;\n    }\n    .counter-el {\n      margin-top: 100px;\n      font-weight: bold;\n      font-size: 100px;\n      font-family: var(--font-button);\n    }\n    .actived {\n      display: inherit;\n      transform: translateY(-30px);\n      transition: all 0.5s;\n    }\n    .disabled {\n      opacity: 60%;\n      transform: translateY(30px);\n      transition: 0.5s;\n    }\n    .hands-top {\n      display: none;\n    }\n    .actived-hands-top {\n      width: 100%;\n      height: 157px;\n      display: flex;\n      justify-content: center;\n      transform: rotate(180deg);\n    }\n    .hand-display-none{\n      display: none;\n    }\n    .actived-hand-top {\n      display: flex;\n      transform: translateY(-30px);\n      transition: all 0.5s;\n    }";const r=t.querySelector(".counter-el"),i=t.querySelector(".hands").children,c=t.querySelector(".hands"),d=t.querySelector(".scissor"),l=t.querySelector(".stone"),p=t.querySelector(".paper"),h=t.querySelector(".hands-top"),u=t.querySelector(".scissor-top"),m=t.querySelector(".stone-top"),y=t.querySelector(".paper-top");for(const e of i)e.addEventListener("click",(()=>{const t=e.getAttribute("class");clearInterval(s),"scissor"==t?(o.setMove("tijera"),g("tijera")):"stone"==t?(o.setMove("piedra"),g("piedra")):"paper"==t&&(o.setMove("papel"),g("papel"))}));function g(t){for(const e of i)e.classList.add("disabled");"tijera"==t&&(d.classList.remove("disabled"),d.classList.add("actived"),setTimeout((()=>{l.classList.add("hand-display-none"),p.classList.add("hand-display-none")}),1500)),"piedra"==t&&(l.classList.remove("disabled"),l.classList.add("actived"),setTimeout((()=>{d.classList.add("hand-display-none"),p.classList.add("hand-display-none")}),1500)),"papel"==t&&(p.classList.remove("disabled"),p.classList.add("actived"),setTimeout((()=>{d.classList.add("hand-display-none"),l.classList.add("hand-display-none")}),1500)),setTimeout((()=>{const t=o.getState().currentGame.computerPlay;r.remove(),c.classList.add("active-hands"),h.classList.add("actived-hands-top"),"tijera"==t&&u.classList.add("actived-hand-top"),"piedra"==t&&m.classList.add("actived-hand-top"),"papel"==t&&y.classList.add("actived-hand-top"),setTimeout((()=>{e.goTo("/rock-papper-scissors/results")}),1500)}),1500)}return t.appendChild(n),t}},{path:/\/results/,component:function(e){const t=document.createElement("div");t.className="result-cont",t.classList.add("page");const n=o.whoWins(),a=document.createElement("style");let s;"empate"==n&&(s=r.tie,a.innerHTML="\n\t\t.result-cont {\n\t\t\tbackground: var(--fondo-gris);  \n\t\t}"),"victoria"==n?(s=r.win,a.innerHTML="\n\t\t.result-cont {\n\t\t\tbackground: var(--fondo-verde);  \n\t\t}"):"derrota"==n&&(s=r.loose,a.innerHTML="\n\t\t.result-cont {\n\t\t\tbackground: var(--fondo-rojo);\n\t\t}");const i=o.getState();t.innerHTML=`\n\t  <img class="img-win" src="${s}">\n\t  <div class="tablero">\n      <h4>Score</h4>\n      <p class="vos">Jugador: ${i.history.myScore}</p>\n      <p class="maquina">Máquina: ${i.history.computerScore}</p>\n    </div>\n\t  <button-comp class="button-back">Volver a jugar</button-comp>\n\t  <button-comp class="button-clean">Reiniciar puntajes</button-comp>\n    `,t.querySelector(".button-back").addEventListener("click",(()=>{e.goTo("/rock-papper-scissors/game")})),t.querySelector(".button-clean").addEventListener("click",(()=>{o.cleanData(),o.getStorage(),e.goTo("/rock-papper-scissors/rules")}));const c=document.createElement("style");return c.innerHTML="\n  .page {\n    width: 100%;\n    height: 100vh;\n    padding: 35px 0 20px 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .img-win {\n    width: 180px;\n  }\n  .tablero {\n    width: 259px;\n    border: 10px solid #000000;\n    background: #ffffff;\n    border-radius: 10px;\n    font-family: var(--font-button);\n    display: flex;\n    flex-direction: column;\n  }\n  .tablero > h4 {\n    font-size: 55px;\n    margin: 0 auto;\n  }\n  .tablero > p {\n    margin: 0 10px 5px 0;\n    font-size: 45px;\n    text-align: end;\n  }\n  ",t.appendChild(a),t.appendChild(c),t}}];customElements.define("button-comp",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("button"),t=document.createElement("style");e.className="button-el",t.innerHTML="\n                .button-el {\n                    color: #fff;\n                    width: 322px;\n                    height: 87px;\n                    font-size: 45px;\n                    text-align: center;\n                    border-radius: 10px;\n                    background: #006CFC;\n                    box-sizing: border-box;\n                    border: 10px solid #001997;\n                    font-family: var(--font-button);\n                }\n                ",e.textContent=this.textContent,this.shadow.appendChild(e),this.shadow.appendChild(t)}});var l;l=new URL(s("27Lyk").resolve("bUIAG"),import.meta.url).toString(),customElements.define("hand-paper",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n        <img class="hand-paper" src="${l}">\n        `,e.innerHTML="\n            .hand-paper {\n                height: 100%;\n                width: 100%\n            }\n            ",this.shadow.appendChild(e)}});var p;p=new URL(s("27Lyk").resolve("kQAzv"),import.meta.url).toString(),customElements.define("hand-scissor",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n        <img class="hand-scissor" src="${p}">\n        `,e.innerHTML="\n            .hand-paper {\n                height: 100%;\n                width: 100%\n            }\n            ",this.shadow.appendChild(e)}});var h;h=new URL(s("27Lyk").resolve("hXxjk"),import.meta.url).toString(),customElements.define("hand-rock",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n        <img class="hand-rock" src="${h}">\n        `,e.innerHTML="\n            .hand-paper {\n                height: 100%;\n                width: 100%\n            }\n            ",this.shadow.appendChild(e)}}),function(e){function t(e){history.pushState({},"",e),n(e)}function n(n){console.log("el handleRoute route recibió una nueva ruta ",n);for(const a of d)if(a.path.test(n)){const n=a.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n)}}"/"==location.pathname?t("/welcome"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.37136680.js.map
