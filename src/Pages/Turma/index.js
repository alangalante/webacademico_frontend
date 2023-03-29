import React, { Component } from "react";
import { useState } from "react";

const Turma = () => {
  const [codigoTurma, setCodigoTurma] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [encerrada] = useState("");

  function Action() {
    alert("Action: " + codigoTurma + ", " + capacidade + ".");
    window.location.href = "/turma";
  }

  return (
    <div className="box">
      <div className="box-header">Turma</div>
      <div className="box-body">
        <div className="col">
          <label>Código da Turma</label>
          <input
            placeholder="Código da Turma"
            title="Código da Turma"
            id="codigo_turma"
            onChange={(e) => {
              setCodigoTurma(e.target.value);
            }}
            type="text"
          />
        </div>
        <div className="col">
          <label>Capacidade</label>
          <input
            placeholder="Capacidade"
            title="Capacidade"
            id="capacidade"
            onChange={(e) => {
              setCapacidade(e.target.value);
            }}
            type="text"
          />
        </div>
      </div>

      <div className={"box-body"}>
        <div className={"col"}>
          <label>Encerrada</label>
          <select className={"form-select"}>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div>
      <div className="box-footer">
        <a className="btn fw-bold" href={window.location.pathname}>
          Limpar campos
        </a>
        <button type="button" className="btn btn-primary" onClick={Action}>
          Salvar
        </button>
      </div>
    </div>
  );
};
export default Turma;
