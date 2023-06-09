import React, { useContext } from 'react'
import {
    Link
} from "react-router-dom";
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        console.log(isAuth)
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            {isAuth && <MyButton onClick = {() => logout()}>Выйти</MyButton>}
            <div className='navbar__link '>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default Navbar;
