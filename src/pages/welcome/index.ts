const imgTitle = require("url:../../../src/assets/Piedra-Papel-Tijera.svg");

export function initWelcome(params) {
  const div = document.createElement("div");
  div.classList.add("page");
  const style = document.createElement("style");
  div.innerHTML = `
        <img class="pt-img" src="${imgTitle}" alt="">
            <button-comp class="btn-comp">Empezar</button-comp>
                <div class="hands">
                    <hand-rock></hand-rock>
                    <hand-paper></hand-paper>
                    <hand-scissor></hand-scissor>
                </div>
    `;

  style.innerHTML = `
        .page{
            width: 100%;
		    height: 100vh;
		    padding-top: 100px;
		    display: flex;
		    align-items: center;
		    flex-direction: column;
		    justify-content: space-between;
        }

        .pt-img{
            width: 284px;
        }

        .hands{
            width: 100%;
            display: flex;
            justify-content: space-evenly;
        }
    `;

  const button = div.querySelector(".btn-comp");
  button?.addEventListener("click", () => {
    params.goTo("/rock-papper-scissors/rules");
  });
  div.appendChild(style);
  return div;
}
