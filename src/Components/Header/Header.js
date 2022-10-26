import './Header.css';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { MenuContext } from '../../Contexts/MenuContext/MenuContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { open, setOpen, setMostrar } = useContext(MenuContext);
    const navigate = useNavigate();
    let usuario = {nome: "", id: ""};
    let user = "";

    if(window.localStorage.getItem("user")==="null" || window.localStorage.getItem("user")===null){
        if(window.location.pathname!=="/"){
            navigate("/");
        }
    }else{
        usuario = JSON.parse(window.localStorage.getItem("user"));
        user = {
            name: usuario.nome
        };
    }

    function logOut(){
        localStorage.clear();
        setMostrar(false);
        navigate("/");
    }

    if(user!==""){
        return(
            <div className="bg-light shadow pt-2 pb-2 ps-2 d-flex">
                <div class="col-1 text-center">
                    <button className='btn' onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="collapseMenu">
                        <FaBars size={20} />
                    </button>
                </div>
                <div className='col align-self-center'>
                    <h4 className="text-dark">Web Acadêmico</h4>
                </div>
                <div class="col text-end pe-4">
                    <Dropdown>
                        <Dropdown.Toggle className='btn'  variant="" id="dropdownUser">
                            Bem vindo, {user.name} <FaUserCircle size={30} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >Perfil</Dropdown.Item>
                            <Dropdown.Item onClick={logOut}>Sair</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>   
        );
    }else{
        return(
            <></>
        )
    }
};

export default Header;