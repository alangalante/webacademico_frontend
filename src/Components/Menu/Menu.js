import "./Menu.css";
import { Collapse } from "react-bootstrap"
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../Contexts/MenuContext/MenuContext";
import { Link } from "react-router-dom";

const Menu = () => {
    const { open, mostrar, setMostrar } = useContext(MenuContext);
    const routes = ["/dashboard","/curso","/disciplina","/grade_curricular","/professor","/horario","/usuario"];
    const [routeActive, setRouteActive] = useState(""+window.location.pathname);
    
    if(window.localStorage.getItem("user")==="null" || window.localStorage.getItem("user")===null){
        if(window.location.pathname!=="/"){
            setMostrar(false);
        }
    }else{
        if(!mostrar){
            setMostrar(true);
        }
    }

    useEffect(()=>{
        selecionaActive();
    });

    function selecionaActive(){
        let lista = document.getElementsByTagName("li");
        setRouteActive(window.location.pathname);

        for(let i=0; i < lista.length; i++){
            let item_atual = "/"+lista[i].innerHTML.replace(" ","_");
            if(item_atual === routeActive){
                lista[i].classList.add("active");
            }else{
                lista[i].classList.remove("active");
            }
        }
    }

    function listaMenu(){
        return routes.map(route => {
            return(
                <Link to={route} key={route} onClick={()=>{setRouteActive(route)}}>
                    <li className="list-group-item list-group-item-action ">
                        {route.replace('/',"").replace(/_/g," ")}
                    </li>
                </Link>
            );
        });
    }

    function retornoMenu(){
        return(
            <div className='h-97 shadow col-md-2 col-4 float-start me-2'>
                <Collapse in={open} dimension="width">
                    <div id="collapseMenu" className='h-100 bg-light'>
                        <ul className='list-group list-group-flush'>
                            {listaMenu()}
                        </ul>
                    </div>
                </Collapse>
            </div>
        );
    };

    if(open && mostrar){
        return(retornoMenu());
    }else{
        return(
            <></>
        )
    }
}

export default Menu;