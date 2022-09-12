import { useState } from "react";

const Example = () => {
    const [example1, setExample1] = useState("");
    const [example2, setExample2] = useState("");
    const [example3, setExample3] = useState("");

    function Action(){
        alert("Action "+example1 + ' ' + example2 + ' ' + example3);
        window.location.href="/dashboard";
    }

    return(
        <div className="box">
            <div className="box-header">
                Example
            </div>
            <div className="box-body">
                <div className="col">
                    <label>Exaple label</label>
                    <input placeholder="example1" title="example1" id="example1" onChange={e=>{setExample1(e.target.value)}} type="text" />
                </div>
                <div className="col">
                    <label>Exaple label</label>
                    <input placeholder="example2" title="example2" id="example2" onChange={e=>{setExample2(e.target.value)}} type="text" />
                </div>
                <div className="col">
                    <label>Exaple label</label>
                    <input placeholder="example3" title="example3" id="example3" onChange={e=>{setExample3(e.target.value)}} type="text" />
                </div>
            </div>
            <div className="box-footer">
                <a className="btn fw-bold" href={window.location.pathname}>Limpar campos</a>
                <button type="button" class="btn btn-primary" onClick={Action}>
                    Salvar
                </button>
            </div>
        </div>

    );
};

export default Example;