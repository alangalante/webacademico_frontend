import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro_Usuario from "./Pages/Cadastro_Usuario/Cadastro_Usuario";
import Disciplina from "./Pages/Disciplina/Disciplina";
import Example from "./Pages/Example/Example";
import Header from "./Components/Header/Header";
import Horario from "./Pages/Horario/Horario";
import Menu from "./Components/Menu/Menu";
import Professor from "./Pages/Professor";
import GradeCurricular from "./Pages/Grade_Curricular";
import Template_Listar from "./Pages/Example/Template_Listar";

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
                  <Route path="/curso" element={<Example />} />
                  <Route
                    path="/grade_curricular"
                    element={<GradeCurricular />}
                  />
                  <Route path="/usuario" element={<Cadastro_Usuario />} />
                  <Route
                    path="/template_listar"
                    element={<Template_Listar />}
                  />
                  <Route path="/horario" element={<Horario />} />
                  <Route path="/disciplina" element={<Disciplina />} />
                  <Route path="/professor" element={<Professor />} />
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
