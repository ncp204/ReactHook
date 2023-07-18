import './Nav.scss'
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="topnav">
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/timer' >Timer App</NavLink>
            <NavLink to='/todos' >Todos App</NavLink>
            <NavLink to='/blog' >Blog App</NavLink>
            <NavLink to='/secret' >Secret App</NavLink>
        </div>
    );
}

export default Nav;