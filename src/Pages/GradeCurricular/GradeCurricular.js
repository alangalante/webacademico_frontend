import { useState } from "react";

const GradeCurricular = () => {
  const [id, setId] = useState("");
  const [idCurso, setIdCurso] = useState("");
  const [versao, setVersao] = useState("");
  const [ativo] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [qtdMinimaOptativas, setQtdMinimaOptativas] = useState("");

  function Action() {
    alert(
      id +
        ", " +
        idCurso +
        ", " +
        versao +
        ", " +
        dataInicio +
        ", " +
        ativo +
        ", " +
        dataFim +
        ", " +
        qtdMinimaOptativas +
        "."
    );
    window.location.href = "/grade_curricular";
  }

  return (
    <div className={"box"}>
      <div className={"box-header"}>Grade Curricular</div>
      <div className={"box-body"}>
        <div className={"col"}>
          <label>Id</label>
          <input
            placeholder={"Id"}
            title={"Id"}
            id={"id"}
            onChange={(e) => {
              setId(e.target.value);
            }}
            type={"text"}
          />
        </div>
        <div className={"col"}>
          <label>Id Curso</label>
          <input
            placeholder={"Id Curso"}
            title={"Id Curso"}
            id={"id-curso"}
            onChange={(e) => {
              setIdCurso(e.target.value);
            }}
            type={"text"}
          />
        </div>
        <div className={"col"}>
          <label>Data de Início</label>
          <input
            placeholder={"Data de Início"}
            title={"Data de Início"}
            id={"data-inicio"}
            onChange={(e) => {
              setDataInicio(e.target.value);
            }}
            type={"text"}
          />
        </div>
        <div className={"col"}>
          <label>Data de Fim</label>
          <input
            placeholder={"Data de Fim"}
            title={"Data de Fim"}
            id={"data-fim"}
            onChange={(e) => {
              setDataFim(e.target.value);
            }}
            type={"text"}
          />
        </div>
        <div className={"col"}>
          <label>Versão</label>
          <input
            placeholder={"Versão"}
            title={"Versão"}
            id={"versao"}
            onChange={(e) => {
              setVersao(e.target.value);
            }}
            type={"text"}
          />
        </div>
        <div className={"col"}>
          <label>Qtd de Optativas</label>
          <input
            placeholder={"Qtd Mínima"}
            title={"Qtd de Optativas"}
            id={"qtd-minima-opt"}
            onChange={(e) => {
              setQtdMinimaOptativas(e.target.value);
            }}
            type={"text"}
          />
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
export default GradeCurricular;
