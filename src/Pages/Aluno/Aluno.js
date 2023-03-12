import React, { Component } from "react";
import axios from "axios";

export default class Aluno extends Component {
    state = {
        nome: "",
        matricula: "",
        anoIngresso: "",
        semestreIngresso: "",
        idInep: "",
        endereco: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        cep: "",
        pai: "",
        mae: "",
        rg: "",
        emissor: "",
        dataRg: "",
        cpf: "",
        sexo: "",
        dataNasc: "",
        cor : "",
        naturalidadeCidade: "",
        naturalidadeEstado: "",
        nacionalidade: "",
        email: "",
        celular: "",
        tituloEleitor: "",
        certificadoReservista: "",
        nomeEscola: "",
        ufEscola: "",
        bloqueio: false,
    };

    txtNome = (event) => {
        this.setState({ nome: event.target.value });
    };

    txtMatricula = (event) => {
        this.setState({ matricula: event.target.value});
    }

    txtAnoIngresso = (event) => {
        this.setState({ anoIngresso: event.target.value});
    }
    
    txtSemestreIngresso = (event) => {
        this.setState({ semestreIngresso: event.target.value});
    }

    txtIdInep = (event) => {
        this.setState({ idInep: event.target.value });
    };

    txtEndereco = (event) => {
        this.setState({ endereco: event.target.value });
    };

    txtNumero= (event) => {
        this.setState({ numero: event.target.value });
    };

    txtComplemento= (event) => {
        this.setState({ complemento: event.target.value });
    };

    txtBairro= (event) => {
        this.setState({ bairro: event.target.value });
    };

    txtCidade= (event) => {
        this.setState({ cidade: event.target.value });
    };

    txtCep= (event) => {
        this.setState({ cep: event.target.value });
    };

    txtPai= (event) => {
        this.setState({ pai: event.target.value });
    };

    txtMae= (event) => {
        this.setState({ mae: event.target.value });
    };

    txtRg= (event) => {
        this.setState({ rg: event.target.value });
    };

    txtEmissor= (event) => {
        this.setState({ emissor: event.target.value });
    };

    txtDataRg= (event) => {
        this.setState({ dataRg: event.target.value });
    };

    txtCpf= (event) => {
        this.setState({ cpf: event.target.value });
    };

    txtSexo= (event) => {
        this.setState({ sexo: event.target.value });
    };

    txtDataNasc= (event) => {
        this.setState({ dataNasc: event.target.value });
    };

    selectCor = (event) => {
        this.setState({ cor: event.target.value });
    };

    txtNaturalidadeCidade= (event) => {
        this.setState({ naturalidadeCidade: event.target.value });
    };

    txtNaturalidadeEstado= (event) => {
        this.setState({ naturalidadeEstado: event.target.value });
    };

    txtNacionalidade= (event) => {
        this.setState({ nacionalidade: event.target.value });
    };

    txtEmail= (event) => {
        this.setState({ email: event.target.value });
    };

    txtCelular= (event) => {
        this.setState({ celular: event.target.value });
    };

    txtTituloEleitor= (event) => {
        this.setState({ tituloEleitor: event.target.value });
    };

    txtCertificadoReservista= (event) => {
        this.setState({ certificadoReservista: event.target.value });
    };

    txtNomeEscola= (event) => {
        this.setState({ nomeEscola: event.target.value });
    };

    txtUfEscola= (event) => {
        this.setState({ ufEscola: event.target.value });
    };

    radioBlock = (event) => {
        if (event.target.value === "true") {
          this.setState({ bloqueio: true });
        } else {
          this.setState({ bloqueio: false });
        }
    };


    incluir = () => {
        const data = {
            nome: this.state.nome,
            matricula: this.state.matricula,
            anoIngresso: this.state.anoIngresso,
            semestreIngresso: this.state.semestreIngresso,
            idInep: this.state.idInep,
            endereco: this.state.endereco,
            numero: this.state.numero,
            complemento: this.state.complemento,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            cep: this.state.cep,
            pai: this.state.pai,
            mae: this.state.mae,
            rg: this.state.rg,
            emissor: this.state.emissor,
            dataRg: this.state.dataRg,
            cpf: this.state.cpf,
            sexo: this.state.sexo,
            dataNasc: this.state.dataNasc,
            cor : this.state.cor,
            naturalidadeCidade: this.state.naturalidadeCidade,
            naturalidadeEstado: this.state.naturalidadeEstado,
            nacionalidade: this.state.nacionalidade,
            email: this.state.email,
            celular: this.state.celular,
            tituloEleitor: this.state.tituloEleitor,
            certificadoReservista: this.state.certificadoReservista,
            nomeEscola: this.state.nomeEscola,
            ufEscola: this.state.ufEscola,
            bloqueio: this.state.bloqueio,
        };

        const url = "http://localhost:8080/aluno/incluir";

        axios
          .post(url, data)
          .then((res) => {
            alert("Aluno cadastrado com sucesso!");
          })
          .catch((err) =>
            alert("Cadastro de aluno infelizmente falhou. Tente novamente.")
          );
    }

    render() {
        return (
          <div className="box">
            <div className="box-header">
              <h2>Cadastro de Aluno</h2>
            </div>
            <div className="box-body">
              <div className="col-5">
                <label>Matrícula</label>
                <input
                  className="form-control name-pull-image"
                  title="matricula"
                  id="matricula"
                  value={this.state.matricula}
                  onChange={this.txtMatricula}
                  type="text"
                />
              </div>
              <div className="col-md-auto">
                <label>Ano de Ingresso</label>
                <input
                  className="form-control name-pull-image"
                  title="anoIngresso"
                  id="anoIngresso"
                  value={this.state.anoIngresso}
                  onChange={this.txtAnoIngresso}
                  type="text"
                />
              </div>
              <div className="col-md-auto">
                <label>Semestre de Ingresso</label>
                <input
                  className="form-control name-pull-image"
                  title="semestreIngresso"
                  id="semestreIngresso"
                  value={this.state.semestreIngresso}
                  onChange={this.txtSemestreIngresso}
                  type="text"
                />
              </div>
              <div className="col-2">
                  <label>Id INEP</label>
                  <input
                    className="form-control name-pull-image"
                    title="idInep"
                    id="idInep"
                    value={this.state.idInep}
                    onChange={this.txtIdInep}
                    type="text"
                  />
              </div>
            </div>
            <div className="box-body">
              <div className="col-5">
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
              <div className="col-3">
                  <label>RG</label>
                  <input
                    className="form-control name-pull-image"
                    title="rg"
                    id="rg"
                    value={this.state.rg}
                    onChange={this.txtRg}
                    type="text"
                  />
                </div>
                <div className="col-2">
                  <label>Emissor</label>
                  <input
                    className="form-control name-pull-image"
                    title="emissor"
                    id="emissor"
                    value={this.state.emissor}
                    onChange={this.txtEmissor}
                    type="text"
                  />
                </div>
                <div className="col-2">
                <label>Data de Expedição</label>
                <input
                  className="form-control name-pull-image"
                  title="dataRg"
                  id="ano de ingresso"
                  value={this.state.dataRg}
                  onChange={this.txtDataRg}
                  type="text"
                />
              </div>
            </div>
            <div className="box-body">
              <div className="col-5">
                  <label>CPF</label>
                  <input
                    className="form-control name-pull-image"
                    title="cpf"
                    id="cpf"
                    value={this.state.cpf}
                    onChange={this.txtCpf}
                    type="text"
                  />
                </div>
                <div className="col-1">
                  <label>Sexo</label>
                  <input
                    className="form-control name-pull-image"
                    title="sexo"
                    id="sexo"
                    value={this.state.sexo}
                    onChange={this.txtSexo}
                    type="text"
                  />
                </div>
                <div className="col-2">
                  <label>Data de Nascimento</label>
                  <input
                    className="form-control name-pull-image"
                    title="dataNasc"
                    id="dataNasc"
                    value={this.state.dataNasc}
                    onChange={this.txtDataNasc}
                    type="text"
                  />
                </div>
                <div className="col pt-4">
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
          </div>
          <div className="box-body">
            <div className="col-6">
                  <label>Nome do Pai</label>
                  <input
                    className="form-control name-pull-image"
                    title="pai"
                    id="pai"
                    value={this.state.pai}
                    onChange={this.txtPai}
                    type="text"
                  />
                </div>
                <div className="col-6">
                  <label>Nome da Mãe</label>
                  <input
                    className="form-control name-pull-image"
                    title="mae"
                    id="mae"
                    value={this.state.mae}
                    onChange={this.txtMae}
                    type="text"
                  />
                </div>
          </div>
          <div className="box-body">
              <div className="col-7">
                <div className="row">
                  <label>Endereço</label>
                  <input
                    className="form-control name-pull-image"
                    title="endereco"
                    id="endereco"
                    value={this.state.endereco}
                    onChange={this.txtEndereco}
                    type="text"
                  />
                  </div>
              </div>
              <div className="col-1">
                <label>Número</label>
                <input
                  className="form-control name-pull-image"
                  title="numero"
                  id="numero"
                  value={this.state.numero}
                  onChange={this.txtNumero}
                  type="text"
                />
              </div>
              <div className="col-4">
                <label>Complemento</label>
                <input
                  className="form-control name-pull-image"
                  title="complemento"
                  id="complemento"
                  value={this.state.complemento}
                  onChange={this.txtComplemento}
                  type="text"
                />
              </div>
          </div>
          <div className="box-body">
            <div className="col-4">
              <div className="row">
              <label>Bairro</label>
              <input
                className="form-control name-pull-image"
                title="bairro"
                id="bairro"
                value={this.state.bairro}
                onChange={this.txtBairro}
                type="text"
              />
              </div>
            </div>
            <div className="col-4">
              <label>Cidade</label>
              <input
                className="form-control name-pull-image"
                title="cidade"
                id="cidade"
                value={this.state.cidade}
                onChange={this.txtCidade}
                type="text"
              />
            </div>
            <div className="col-md-auto">
                <label>CEP</label>
                <input
                  className="form-control name-pull-image"
                  title="cep"
                  id="cep"
                  value={this.state.cep}
                  onChange={this.txtCep}
                  type="text"
                />
              </div>
            </div>
          <div className="box-body">
            <div className="col-4">
                <label>Naturalidade</label>
                <input
                  className="form-control name-pull-image"
                  title="naturalidadeCidade"
                  id="naturalidadeCidade"
                  value={this.state.naturalidadeCidade}
                  onChange={this.txtNaturalidadeCidade}
                  type="text"
                />
            </div>
              <div className="col-1">
                <label>UF</label>
                <input
                  className="form-control name-pull-image"
                  title="naturalidadeEstado"
                  id="naturalidadeEstado"
                  value={this.state.naturalidadeEstado}
                  onChange={this.txtNaturalidadeEstado}
                  type="text"
                />
              </div>
              <div className="col-4">
                <label>Nacionalidade</label>
                <input
                  className="form-control name-pull-image"
                  title="nacionalidade"
                  id="nacionalidade"
                  value={this.state.nacionalidade}
                  onChange={this.txtNacionalidade}
                  type="text"
                />
              </div>
          </div>
        <div className="box-body">
            <div className="col-7">
              <label>Email</label>
              <input
                className="form-control name-pull-image"
                title="email"
                id="email"
                value={this.state.email}
                onChange={this.txtEmail}
                type="text"
              />
            </div>
            <div className="col-5">
              <label>Celular</label>
              <input
                className="form-control name-pull-image"
                title="celular"
                id="celular"
                value={this.state.celular}
                onChange={this.txtCelular}
                type="text"
              />
            </div>
          </div>
          <div className="box-body">
            <div className="col-4">
                  <label>Titulo de Eleitor</label>
                  <input
                    className="form-control name-pull-image"
                    title="tituloEleitor"
                    id="tituloEleitor"
                    value={this.state.tituloEleitor}
                    onChange={this.txtTituloEleitor}
                    type="text"
                  />
                </div>
              <div className="col-4">
                <label>Certificado de Reservista</label>
                <input
                  className="form-control name-pull-image"
                  title="certificadoReservista"
                  id="certificadoReservista"
                  value={this.state.certificadoReservista}
                  onChange={this.txtCertificadoReservista}
                  type="text"
                />
              </div>
          </div>
          <div className="box-body">
              <div className="col-8">
                <label>Instituição de Ensino Médio</label>
                <input
                  className="form-control name-pull-image"
                  title="nomeEscola"
                  id="nomeEscola"
                  value={this.state.nomeEscola}
                  onChange={this.txtNomeEscola}
                  type="text"
                />
              </div>
              <div className="col-1">
                <label>UF</label>
                <input
                  className="form-control name-pull-image"
                  title="ufEscola"
                  id="ufEscola"
                  value={this.state.ufEscola}
                  onChange={this.txtUfEscola}
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