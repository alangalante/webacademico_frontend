import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";  

import "react-datepicker/dist/react-datepicker.css";  

export default class Cadastro_Curso extends Component {

    state = {
        nome: "",
        sigla: "",
        idMec: "",
        nivelAcademico: "",
        dataInicioFuncionamento: new Date(),
        autorizacao: "",
        publicacaoDiarioOficial: "",
        ativo: true
    }

    txtNome_change = (event) => {
        this.setState({nome: event.target.value})
    }

    txtSigla_change = (event) => {
        this.setState({sigla: event.target.value})
    }

    txtIdMec_change = (event) => {
        this.setState({idMec: event.target.value})
    }

    txtNivelAcademico_change = (event) => {
        this.setState({nivelAcademico: event.target.value})
    }

    dateDataInicioFuncionamento_change = (date) => {
        this.setState({dataInicioFuncionamento: date}) 
    }

    txtAutorizacao_change = (event) => {
        this.setState({autorizacao: event.target.value})
    }

    txtPublicacaoDiarioOficial_change = (event) => {
        this.setState({publicacaoDiarioOficial: event.target.value})
    }

    radioAtivo_change = (event) => {
        if (event.target.value === "true"){
            this.setState({ativo: true})
        }else{
            this.setState({ativo: false})
        }
        
    }

    cadastrar = () => {
        const dados = {
            "nome": this.state.nome,
            "sigla": this.state.sigla,
            "idMec": this.state.idMec,
            "nivelAcademico": this.state.nivelAcademico,
            "dataInicioFuncionamento": this.state.dataInicioFuncionamento,
            "autorizacao": this.state.autorizacao,
            "publicacaoDiarioOficial": this.state.publicacaoDiarioOficial,
            "ativo": this.state.ativo
        }

        const url = "http://localhost:8080/curso/incluir"

        axios.post(url, dados)
            .then(retorno => {
                alert("Cadastro de curso realizado com sucesso!")
            })
            .catch(erro => alert(erro));

        console.log(this.state.dataInicioFuncionamento)
        //window.location.href="/dashboard";
    }
      //row m-2 p-2
    render(){
    return(
        <div className="box">
            <div className="box-header">
                <h2>Cadastro de Curso</h2>
            </div>
            <div className="box-body">                            
                <div className="col">
                    <label>Nome</label>  
                    <input className="form-control name-pull-image" title="nome" id="nome" value={this.state.nome} onChange={this.txtNome_change} type="text" />
                </div>
                <div className="col">
                    <label>Sigla</label>      
                    <input className="form-control name-pull-image" title="sigla" id="sigla" value={this.state.sigla} onChange={this.txtSigla_change} type="text" />
                </div>
                <div className="col">
                    <label>Id Mec</label>    
                    <input className="form-control name-pull-image" title="idMec" id="idMec" value={this.state.idMec} onChange={this.txtIdMec_change} type="text" />
                </div>
            </div>   
            <div className="box-body">                            
                <div className="col">
                    <label>Nível Acadêmico</label>  
                    <input className="form-control name-pull-image" title="nivelAcademico" id="nivelAcademico" value={this.state.nivelAcademico} onChange={this.txtNivelAcademico_change} type="text" />
                </div>
                <div className="col">
                    <label>Data de início de Funcionamento</label>
                    <DatePicker  selected={ this.state.dataInicioFuncionamento }  onChange={ this.dateDataInicioFuncionamento_change }  name="dataInicioFuncionamento" dateFormat="yyyy-MM-dd"  />  
                </div>
                <div className="col">
                    <label>Autorização</label>    
                    <input className="form-control name-pull-image" title="autorizacao" id="autorizacao" value={this.state.autorizacao} onChange={this.txtAutorizacao_change} type="text" />
                </div>
            </div>      
            <div className="row m-2 p-2">
                <div className="col">
                    <label>Publicação Diário Oficial</label>    
                    <input className="form-control name-pull-image" title="publicacaoDiarioOficial" id="publicacaoDiarioOficial" value={this.state.publicacaoDiarioOficial} onChange={this.txtPublicacaoDiarioOficial_change} type="text" />
                </div>
                <div className="col">
                    <div>
                        <label>Ativo</label> 
                    </div>
                    <input class="form-check-input me-2" type="radio" name="flexRadio" id="true" value="true" onChange={this.radioAtivo_change} />
                    <label class="form-check-label" for="true">Sim</label>
                    <input class="form-check-input ms-2 me-2" type="radio" name="flexRadio" id="false" value="false" onChange={this.radioAtivo_change}/>
                    <label class="form-check-label" for="false">Não</label>
                </div>    
            </div>
            <div className="box-footer">
                <a className="btn fw-bold" href={window.location.pathname}>Limpar campos</a>
                <button type="button" class="btn btn-primary" onClick={() => this.cadastrar()}>
                    Salvar
                </button>
            </div>
        </div>

    );
    }
}    

