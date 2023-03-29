import React, { Component }  from 'react';
import './Header.css';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { MenuContext } from '../../Contexts/MenuContext/MenuContext';

const Header = () => {
    const { open, setOpen } = useContext(MenuContext);
    const user = {
        name: 'Rawlinson'
    };

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
                        <Dropdown.Item href="">Perfil</Dropdown.Item>
                        <Dropdown.Item href="/">Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>   
    );
};

export default Header;