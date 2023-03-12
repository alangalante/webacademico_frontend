import React, { Component }  from 'react';

function Template_Listar() {
	
    const itens = [{nome: "exemplo1", id:1, status:true},{nome: "exemplo2", id:2, status:false}];

    
    function lista (){
        return(itens && itens.map(item=>{
            return (<li className="list-group-item d-flex flex-wrap" key={item.id}>
                <div>
                    {item.nome}
                </div>
                <div>
                    {item.status ? "ativo" : "inativo"}
                </div>
            </li>)
        })
        )
    }
    
    return(
        <div className="box">
            <div className="box-header">
                Example
            </div>
            <div className="box-body">
                <ul className="list-group col-12 p-2">{lista()}</ul>
            </div>
        </div>
    )
    
}    
export default Template_Listar;

