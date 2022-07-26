import { state } from "../../state";

const resultImages = {
  tie: require("url:../../assets/tie.png"),
  win: require("url:../../assets/win.png"),
  loose: require("url:../../assets/lose.png"),
};

export function initResults(params) {
  const div = document.createElement("div");
  div.className = "result-cont";
  div.classList.add("page");

  const resultado = state.whoWins();

  const styleBackground = document.createElement("style");
  let imagen;
  if (resultado == "empate") {
    imagen = resultImages.tie;
    styleBackground.innerHTML = `
		.result-cont {
			background: var(--fondo-gris);  
		}`;
  }
  if (resultado == "victoria") {
    imagen = resultImages.win;
    styleBackground.innerHTML = `
		.result-cont {
			background: var(--fondo-verde);  
		}`;
  } else if (resultado == "derrota") {
    imagen = resultImages.loose;
    styleBackground.innerHTML = `
		.result-cont {
			background: var(--fondo-rojo);
		}`;
  }

  const currentState = state.getState();
  div.innerHTML = `
	  <img class="img-win" src="${imagen}">
	  <div class="tablero">
      <h4>Score</h4>
      <p class="vos">Jugador: ${currentState.history.myScore}</p>
      <p class="maquina">Máquina: ${currentState.history.computerScore}</p>
    </div>
	  <button-comp class="button-back">Volver a jugar</button-comp>
	  <button-comp class="button-clean">Reiniciar puntajes</button-comp>
    `;

  const buttonBack = div.querySelector(".button-back") as Element;
  buttonBack.addEventListener("click", () => {
    params.goTo("/rock-papper-scissors/game");
  });

  const buttonClean = div.querySelector(".button-clean") as Element;
  buttonClean.addEventListener("click", () => {
    state.cleanData();
    state.getStorage();
    params.goTo("/rock-papper-scissors/rules");
  });

  const style = document.createElement("style");
  style.innerHTML = `
  .page {
    width: 100%;
    height: 100vh;
    padding: 35px 0 20px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .img-win {
    width: 180px;
  }
  .tablero {
    width: 259px;
    border: 10px solid #000000;
    background: #ffffff;
    border-radius: 10px;
    font-family: var(--font-button);
    display: flex;
    flex-direction: column;
  }
  .tablero > h4 {
    font-size: 55px;
    margin: 0 auto;
  }
  .tablero > p {
    margin: 0 10px 5px 0;
    font-size: 45px;
    text-align: end;
  }
  `;

  div.appendChild(styleBackground);
  div.appendChild(style);
  return div;
}
