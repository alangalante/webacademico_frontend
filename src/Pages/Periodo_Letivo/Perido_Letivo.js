import { useState } from "react";

const Periodo_Letivo = () => {
    const [id, setId] = useState("");
    const [ano, setAno] = useState("");
    const [semestre, setSemestre] = useState("");
    const [atual] = useState("");

    function Action(){
        alert("Action " + id + '' + ano + '' + semestre + '' + atual);
        window.location.href="/periodo_letivo";
    }

    return(
        <div className="box">
            <div className="box-header">
                Periodo Letivo
            </div>
            <div className="box-body">
                <div className="col">
                    <label>Id</label>
                    <input placeholder="id" title="Id" id="id" onChange={e=>{setId(e.target.value)}} type="text"/>
                </div>
                <div className="col">
                    <label>Ano</label>
                    <input placeholder="Ano" title="Ano" id="ano" onChange={e=>{setAno(e.target.value)}} type="text"/>
                </div>
                <div className="col">
                    <label>Semestre</label>
                    <input placeholder="Semestre" title="Semestre" id="semestre" onChange={e=>{setSemestre(e.target.value)}} type="text"/>
                </div>
                <div className={"col"}>
                    <label>Atual</label>
                    <select className={"form-select"}>
                        <option>Atual</option>
                        <option>Não Atual</option>
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
export default Periodo_Letivo;