import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroUsuario from './Pages/CadastroUsuario/CadastroUsuario';
import CadastroCurso from './Pages/CadastroCurso/CadastroCurso';
import Disciplina from "./Pages/Disciplina/Disciplina";
import Example from "./Pages/Example/Example";
import Header from "./Components/Header/Header";
import Horario from "./Pages/Horario/Horario";
import Menu from "./Components/Menu/Menu";
import Professor from "./Pages/Professor/index";
import GradeCurricular from "./Pages/GradeCurricular/GradeCurricular";
import TemplateListar from "./Pages/Example/TemplateListar";
import PeriodoLetivo from "./Pages/PeriodoLetivo/PeriodoLetivo";
import Aluno from "./Pages/Aluno/Aluno";
import Turma from "./Pages/Turma";

function App() {
  return (
    <div className="App h-100">
      <div className="container-fluid p-0 h-100">
        <BrowserRouter>
          {window.location.pathname !== "/" ? (
            <div className="h-100">
              <Header />
              <Menu />
              <div className="d-flex flex-wrap">
                <Routes>
                  <Route path="/dashboard" element={<Example />} />
                  <Route path="/curso" element={<CadastroCurso />} />
                  <Route path="/gradecurricular" element={<GradeCurricular />} />
                  <Route path="/usuario" element={<CadastroUsuario />} />
                  <Route path="/templatelistar" element={<TemplateListar />} />
                  <Route path="/horario" element={<Horario />} />
                  <Route path="/disciplina" element={<Disciplina />} />
                  <Route path="/professor" element={<Professor />} />
                  <Route path="/aluno" element={<Aluno />} />
                  <Route path="/periodo_letivo" element={<PeriodoLetivo />}/>
                  <Route path="/turma" element={<Turma />} />
                </Routes>
              </div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Example />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
