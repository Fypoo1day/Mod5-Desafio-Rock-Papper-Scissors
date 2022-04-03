export function initWelcomePage(params) {
  const style = document.createElement("style");
  style.innerHTML = `
        *{
            box-sizing: border-box;
        }
        body{
            margin:0;
        }
        .container{
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: baseline;
            height: 100vh;
            padding:20px;
            gap:20px;
        }
        @media (min-width: 769px) {
            .container {
               
                height: inherit;
            }
          }
        .mostrar{
            display:none;
        }
        .button-container{
            width:100%;
            max-width:404px;
        }
        .text-container{
            font-size: 75px;
            align-items: center;
            justify-content: center;
            padding:40px;
            max-width:317px;
            margin-top: -50px;
            color: #FAFAFA
        }
        .move-container{
            display:flex;
            width:100%;
            position: fixed;
            bottom: 10px;
            height: 150px;
            justify-content: center;
            padding:0 5px;
        }
        @media (min-width: 769px) {
            .move-container{
                height: 21.277481vh;
                width:500px;
                padding:0;
                gap:67px;
            }
        }
        
        @media (min-width: 769px) {
            .hand{
                width:100%;
            }
        }
        .desktop{}
        @media (min-width: 769px) {
            .desktop{
                display:flex;
                width:100%;
                
                justify-content: center;
            }
        }
        
    `;

  const div = document.createElement("div");
  div.innerHTML = `
        <div class="container">
            <div class="text-container">
                 <component-text variant="title">Piedra Papel ó Tijeras</component-text>
            </div>
            <div class="button-container">
                <component-button class="jugar">¡Jugar!</component-button>
            </div>  
        </div>       
        <div class="desktop"><div class="move-container">
                <div class="hand "><move-papper></move-papper></div>
                <div class="hand "><move-rock></move-rock></div>
                <div class="hand "><move-scissors></move-scissors></div>
        </div>        
        </div>
    `;

  const next = div.querySelector(".jugar");
  next.addEventListener("click", () => {
    params.goTo("/rules");
  });
  div.appendChild(style);
  return div;
}
