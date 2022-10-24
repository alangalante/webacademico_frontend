import React, { Component } from "react";

export default class Cadastro_Usuario extends Component {

    state = {
        nome: "",
        email: "",
        senha: "",
        bloqueio: false,
        nivel_acesso: ""
    }

    txtNome_change = (event) => {
        this.setState({nome: event.target.value})
    }

    txtEmail_change = (event) => {
        this.setState({email: event.target.value})
    }

    txtSenha_change = (event) => {
        this.setState({senha: event.target.value})
    }
    
    radioBloqueio_change = (event) => {
        if (event.target.value == "true"){
            this.setState({bloqueio: true})
        }else{
            this.setState({bloqueio: false})
        }
        
    }

    select_nivelAcesso_change = (event) =>{
        this.setState({nivel_acesso: event.target.value})
    }

    cadastrar = () => {
        const dados = {
            "nome": this.state.nome,
            "email": this.state.email,
            "senha": this.state.senha,
            "bloqueado": this.state.bloqueio,
            "nivelAcesso": this.state.nivel_acesso
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        }

        const url = "http://localhost:8080/usuario/incluir"

        fetch(url, requestOptions)
            .then(alert("Cadastro de usuário realizado com sucesso!"))
            .catch(erro => alert(erro));

        
        window.location.href="/dashboard";
    }

    render(){
    return(
        <div>
            <div className="row m-2 pt-5">
                <h2>Cadastro de Usuário</h2>
            </div>
            <div className="row m-2 p-2">
                <div className="col">
                    <label>Nome</label>
                </div> 
                <div className="col-3">   
                    <input className="form-control name-pull-image" title="nome" id="nome" value={this.state.nome} onChange={this.txtNome_change} type="text" />
                </div>
                <div className="col">
                    <label>E-mail</label>
                </div> 
                <div className="col-3">       
                    <input className="form-control name-pull-image" title="e-mail" id="e-mail" value={this.state.email} onChange={this.txtEmail_change} type="text" />
                </div>
                <div className="col">
                    <label>Senha</label>
                </div>
                <div className="col-3">    
                    <input className="form-control name-pull-image" title="senha" id="senha" value={this.state.senha} onChange={this.txtSenha_change} type="text" />
                </div>
            </div>        
            <div className="row m-2 p-2">
                <div className="col-1">
                    <label>Bloqueio</label>
                </div>
                <div className="col-1">   
                            <input class="form-check-input" type="radio" name="flexRadio" id="true" value="true" onChange={this.radioBloqueio_change} />
                            <label class="form-check-label" for="true">Sim</label>
                </div> 
                <div className="col-1">   
                            <input class="form-check-input" type="radio" name="flexRadio" id="false" value="false" onChange={this.radioBloqueio_change}/>
                            <label class="form-check-label" for="false">Não</label>
                </div>
                <div className="col-3">
                <select class="form-select" aria-label="Default select example" value={this.state.nivel_acesso} onChange={this.select_nivelAcesso_change}>
                    <option selected>Nível de acesso</option>
                    <option value="ALUNO">Aluno</option>
                    <option value="PROFESSOR">Professor</option>
                    <option value="SECRETARIA">Secretaria</option>
                    <option value="DIRECAO">Direção</option>
                    <option value="COORDENACAO">Coordenação</option>
                    <option value="SECRETARIA_ADM">Secretaria Adm</option>
                    <option value="ADMINISTRADOR">Administrador</option>
                </select>
                    
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

