import React, { Component } from 'react';
import axios from 'axios';

export default class PeriodoLetivo extends Component{
  state = {
    id: "",
    ano: "",
    semestre: "",
    atual: true,
    status: "",
  };

  txtId = (event) => {
    this.setState({ id: event.target.value });
  };

  txtAno = (event) => {
    this.setState({ ano: event.target.value });
  };

  txtSemestre = (event) => {
    this.setState({ semestre: event.target.value });
  };
  
  txtStatus = (event) => {
    this.setState({ status: event.target.value });
  };

  savePeriodoLetivo = (e) => {
    e.preventDefault();
    const periodoLetivo = {
      id: this.state.id,
      ano: this.state.ano,
      semestre: this.state.semestre,
      atual: this.state.atual,
      status: this.state.status
    }

    axios
      .post("/api/periodoLetivo/", periodoLetivo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  render() {
    return (
      <div>
        <h3>Período Letivo</h3>
        <form onSubmit={this.savePeriodoLetivo}>
          <div className="form-group">
            <label>Id: </label>
            <input type="text" className="form-control" value={this.state.id} onChange={this.txtId} />
          </div>
          <div className="form-group">
            <label>Ano: </label>
            <input type="text" className="form-control" value={this.state.ano} onChange={this.txtAno} />
          </div>
          <div className="form-group">
            <label>Semestre: </label>
            <input type="text" className="form-control" value={this.state.semestre} onChange={this.txtSemestre} />
          </div>
          <div className="form-group">
            <label>Status: </label>
            <input type="text" className="form-control" value={this.state.status} onChange={this.txtStatus} />
          </div>
          <div className="form-group">
            <input type="submit" value="Save" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}