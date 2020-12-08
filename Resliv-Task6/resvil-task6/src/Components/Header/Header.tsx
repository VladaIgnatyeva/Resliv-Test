import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header-container'>
            <Link to='/'>
                <span>Главная</span>
            </Link>

            <Link to='/employees'>
                <span>Сотрудники</span>
            </Link>

        </div>
    )
}