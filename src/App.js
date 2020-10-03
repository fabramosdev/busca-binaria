import React, { useState } from "react";
import "./App.css";

function App() {
  // ESTADO DO JOGO (ENTRADA ou RODANDO)
  const [estado, setEstado] = useState("ENTRADA");

  // PALPITE DA MAQUINA (Chutando a metade do valor maximo [valor max: 300])
  const [palpite, setPalpite] = useState(parseInt(Math.random() * (300 + 1)));

  // NUMERO DE PALPITES
  const [numPalpites, setNumPalpites] = useState(1);

  // NUMERO MINIMO, NUMERO MAXIMO
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(parseInt(Math.random() * (300 + 1)));
  };

  if (estado === "ENTRADA") {
    return (
      // MODO ENTRADA = ESTADO INICIAL
      <div className="App">
        <div className="container">
          <br />
          <div className="alert alert-primary" role="alert">
            Pense em um numero entre 0 e 300:
          </div>
          <button onClick={iniciarJogo} className="btn btn-info">
            Iniciar Jogo
          </button>
        </div>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1); // A cada erro acrescentar +1 no num. de palpites
    setMax(palpite); // Setando o valor Maximo com base no palpite
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1); // A cada erro acrescentar +1 no num. de palpites
    setMin(palpite); // Setando o valor Maximo com base no palpite
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      // MODO ENTRADA = ESTADO FINAL
      <div className="App">
        <div className="container">
          <br />
          <div class="alert alert-info" role="alert">
            FIM!
          </div>
          <div class="alert alert-info" role="alert">
            Acertei o numero {palpite} com {numPalpites}
            {numPalpites === 1 ? " palpite" : " palpites"}.
          </div>
          <button onClick={iniciarJogo} className="btn btn-info">
            Iniciar jogo novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    // MODO JOGANDO = ESTADO SETADO
    <div className="App">
      <div className="container">
        <br />
        <div class="alert alert-success" role="alert">
          O seu numero é {palpite}?
        </div>
        <button onClick={menor} className="btn btn-danger">
          Menor!
        </button>
        <button onClick={acertou} className="btn btn-success">
          Acertou
        </button>
        <button onClick={maior} className="btn btn-danger">
          Maior!
        </button>
      </div>
    </div>
  );
}

export default App;
