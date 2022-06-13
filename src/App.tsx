import React, { useState } from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Calculadora de Taxa de Metabolismo Basal
      </header>
      <div>
        <Form />
      </div>
    </div>
  );
}

function Form() {
  const [genero, setGenero] = useState<{ homem: boolean, mulher: boolean }>({ homem: true, mulher: false});
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [idade, setIdade] = useState<number>(0);
  const [atividade, setAtividade] = useState<string>("0");
  const [tmbResult, setTmbResult] = useState<number>(0);
  const [resultadoResult, setResultadoResult] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Calculo();
  };

  const Calculo = () => {
    let tmb = 0;
    let resultado = 0;

    if (genero.homem === true) {
      tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
      atividade == "0"
        ? (resultado = tmb + tmb * 0.25)
        : atividade == "1"
        ? (resultado = tmb + tmb * 0.35)
        : (resultado = tmb + tmb * 0.45);
    } else {
      tmb = 665 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade);
      atividade == "0"
        ? (resultado = tmb + tmb * 0.2)
        : atividade == "1"
        ? (resultado = tmb + tmb * 0.3)
        : (resultado = tmb + tmb * 0.4);
    }
    setTmbResult(tmb);
    setResultadoResult(resultado);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Qual o seu gênero? </label>
        <input
          type="radio"
          value="homem"
          id="genero"
          checked={genero.homem}
          onChange={(e) => setGenero({ mulher: !e.target.checked , homem: e.target.checked })}
        />
        Homem
        <input
          type="radio"
          value="mulher"
          id="genero" 
          checked={genero.mulher}
          onChange={(e) => setGenero({ homem: !e.target.checked, mulher: e.target.checked })}
        />
        Mulher
      </div>
      <div>
        <label> Qual é seu peso? </label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(parseInt(e.target.value))}
        />{" "}
        quilos
      </div>
      <div>
        <label> Qual é sua altura? </label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(parseInt(e.target.value))}
        />{" "}
        centímetros
      </div>
      <div>
        <label> Qual é sua idade? </label>
        <input
          type="number"
          id="idade"
          value={idade}
          onChange={(e) => setIdade(parseInt(e.target.value))}
        />{" "}
        anos
      </div>
      <div>
        <label> Quanta atividade física você faz? </label>
        <select
          id="atividade"
          value={atividade}
          onChange={(e) => setAtividade(e.target.value)}
        >
          <option value="0">Nenhuma</option>
          <option value="1">Moderada</option>
          <option value="2">Intensa</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Enviar" />
      </div>
      {resultadoResult && tmbResult ? (
        <div>
          Para perder peso, você pode consumir no máximo de{" "}
          {resultadoResult - 600} a {resultadoResult - 500} calorias{" "}
          diariamente. Mas cuidado! Não consuma menos que {tmbResult} por longos{" "}
          períodos. Para manter o peso, consuma até {resultadoResult} por dia.
        </div>
      ) : null}
    </form>
  );
}

export default App;