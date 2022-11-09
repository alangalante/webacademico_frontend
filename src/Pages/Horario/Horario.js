import {useState} from "react";

const Horario = () => {
    const [id, setId] = useState("");
    const [horaInicio, setHoraInicio] = useState("");
    const [horaFim, setHoraFim] = useState("");
    const [diaSemana, setDiaSemana] = useState("");
    const [ativo, setAtvio] = useState("");
    const [turno, setTurno] = useState("");

    function Action(){
        alert("Action "+ id + '' + horaInicio + '' + horaFim + ' ' + diaSemana + ativo + turno);
        window.location.href="/horario";
    }

    return(
        <div className="box">
            <div className="box-header">
                Horario
            </div>
            <div className="box-body">
                <div className="col">
                    <label>Id</label>
                    <input placeholder="id" title="Id" id="id" onChange={e=>{setId(e.target.value)}} type="text"/>
                </div>
                <div className="col">
                    <label>Hora Inicio</label>
                    <input placeholder="Hora Inicio" title="HoraInicio" id="horaInicio" onChange={e=>{setHoraInicio(e.target.value)}} type="text"/>
                </div>
                <div className={"col"}>
                    <label>Hora Fim</label>
                    <input placeholder="Hora Fim" title="HoraFim" id="horaFim" onChange={e=>{setHoraFim(e.target.value)}} type="text"/>
                </div>
            </div>
            <div className={"box-body"}>
                <div className={"col"}>
                    <label>Dia Semana</label>
                    <select className={"form-select"}>
                        <option>Segunda</option>
                        <option>Terça</option>
                        <option>Quarta</option>
                        <option>Quinta</option>
                        <option>Sexta</option>
                    </select>
                </div>
                <div className={"col"}>
                    <label>Ativo</label>
                    <select className={"form-select"}>
                        <option>Ativo</option>
                        <option>Não Ativo</option>
                    </select>
                </div>
                <div className={"col"}>
                    <label>Turno</label>
                    <select className={"form-select"}>
                        <option>Manhã</option>
                        <option>Tarde</option>
                        <option>Noite</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Horario;