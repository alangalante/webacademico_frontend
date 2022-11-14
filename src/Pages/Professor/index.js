import React, { Component } from "react";
import axios from "axios";

export default class Professor extends Component {
  state = {
    nome: "",
    dataNasc: "",
    bloqueio: false,
    escolaridade: "",
    cor: "",
    pne: "",
  };

  txtNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  txtDataNasc = (event) => {
    this.setState({ dataNasc: event.target.value });
  };

  radioBlock = (event) => {
    if (event.target.value === "true") {
      this.setState({ bloqueio: true });
    } else {
      this.setState({ bloqueio: false });
    }
  };

  selectEscolaridade = (event) => {
    this.setState({ escolaridade: event.target.value });
  };

  selectCor = (event) => {
    this.setState({ cor: event.target.value });
  };

  selectPNE = (event) => {
    this.setState({ pne: event.target.value });
  };

  incluir = () => {
    const data = {
      nome: this.state.nome,
      dataNasc: this.state.dataNasc,
      esc: this.state.escolaridade,
      bloqueio: this.state.bloqueio,
      cor: this.state.cor,
      pne: this.state.pne,
    };

    const url = "http://localhost:8080/professor/incluir";

    axios
      .post(url, data)
      .then((res) => {
        alert("Cadastro de professor realizado com sucesso!");
      })
      .catch((err) =>
        alert("Cadastro de professor infelizmente falhou. Tente novamente.")
      );
  };

  render() {
    return (
      <div className="box">
        <div className="box-header">
          <h2>Cadastro de Professor</h2>
        </div>
        <div className="box-body">
          <div className="col">
            <label>Nome</label>
            <input
              className="form-control name-pull-image"
              title="nome"
              id="nome"
              value={this.state.nome}
              onChange={this.txtNome}
              type="text"
            />
          </div>
          <div className="col">
            <label>Data de nascimento</label>
            <input
              className="form-control name-pull-image"
              title="dataNasc"
              id="dataNasc"
              value={this.state.dataNasc}
              onChange={this.txtDataNasc}
              type="text"
            />
          </div>
        </div>
        <div className="row m-2 p-2">
          <div className="col">
            <div>
              <label>Bloqueio</label>
            </div>
            <input
              class="form-check-input me-2"
              type="radio"
              name="flexRadio"
              id="true"
              value="true"
              onChange={this.radioBlock}
            />
            <label class="form-check-label" for="true">
              Sim
            </label>
            <input
              class="form-check-input ms-2 me-2"
              type="radio"
              name="flexRadio"
              id="false"
              value="false"
              onChange={this.radioBlock}
            />
            <label class="form-check-label" for="false">
              Não
            </label>
          </div>
          <div className="col">
            <select
              class="form-select"
              aria-label="Seleção padrão"
              value={this.state.escolaridade}
              onChange={this.selectEscolaridade}
            >
              <option selected>Escolaridade</option>
              <option value="GRADUACAO">Graduação</option>
              <option value="MESTRADO">Mestrado</option>
              <option value="ESPECIALIZACAO">Especialização</option>
              <option value="DOUTORADO">Doutorado</option>
            </select>
          </div>

          <div className="col">
            <select
              class="form-select"
              aria-label="Seleção padrão"
              value={this.state.cor}
              onChange={this.selectCor}
            >
              <option selected>Cor</option>
              <option value="AMARELO">Amarelo</option>
              <option value="INDIGENA">Indígena</option>
              <option value="PRETO">Preto</option>
              <option value="PARDO">Pardo</option>
              <option value="BRANCO">Branco</option>
            </select>
          </div>

          <div className="col">
            <select
              class="form-select"
              aria-label="Seleção padrão"
              value={this.state.pne}
              onChange={this.selectPNE}
            >
              <option selected>PNE</option>
              <option value="BAIXAVISAO">Baixa visão</option>
              <option value="CEGUEIRA">Cegueira</option>
              <option value="AUDITIVA">Auditiva</option>
              <option value="FISICA">Física</option>
              <option value="INTELECTUAL">Intelectual</option>
              <option value="SURDEZ">Surdez</option>
              <option value="SURDOCEGUEIRA">Surdocegueira</option>
              <option value="TGDTEA">TGDTEA</option>
              <option value="ALTASHABILIDADES">Altas habilidades</option>
            </select>
          </div>
        </div>

        <div className="box-footer">
          <a className="btn fw-bold" href={window.location.pathname}>
            Limpar campos
          </a>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => this.incluir()}
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }
}
