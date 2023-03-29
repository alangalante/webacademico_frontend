import React, { Component }  from 'react';
import {useState} from "react";

const Disciplina = () => {
    const [id, setId] = useState("");
    const [cargaHoraria, setCargaHr] = useState("");
    const [credito, setCredito] = useState("");
    const [formato] = useState("");
    const [ativo ] = useState("");

    function Action(){
        alert("Action " + id + '' + cargaHoraria + '' + credito + '' + formato + '' + ativo);
        window.location.href="/disciplina";
    }

    return(
        <div className={"box"}>
            <div className={"box-header"}>
                Disciplina
            </div>
            <div className={"box-body"}>
                <div className={"col"}>
                    <label>Id</label>
                    <input placeholder={"id"} title={"Id"} id={"id"} onChange={e=>{setId(e.target.value)}} type={"text"}/>
                </div>
                <div className={"col"}>
                    <label>Carga Horaria</label>
                    <input placeholder={"Carga Horaria"} title={"CargaHoraria"} id={"cargaHoraria"} onChange={e=>{setCargaHr(e.target.value)}} type={"text"}/>
                </div>
                <div className={"col"}>
                    <label>Credito</label>
                    <input placeholder={"Credito"} title={"credito"} id={"credito"} onChange={e=>{setCredito(e.target.value)}} type={"text"}/>
                </div>
            </div>
            <div className={"box-body"}>
                <div className={"col"}>
                    <label>Formato</label>
                    <select className={"form-select"}>
                        <option>Presencial</option>
                        <option>Semi-Presencial</option>
                        <option>EAD</option>
                    </select>
                </div>
                <div className={"col"}>
                    <label>Ativo</label>
                    <select className={"form-select"}>
                        <option>Ativo</option>
                        <option>Não Ativo</option>
                    </select>
                </div>
            </div>
            <div className="box-footer">
                <a className="btn fw-bold" href={window.location.pathname}>Limpar campos</a>
                <button type="button" className="btn btn-primary" onClick={Action}>
                    Salvar
                </button>
            </div>
        </div>
    )
}
export default Disciplina;