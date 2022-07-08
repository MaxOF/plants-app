import React from 'react';
import s from './Header.module.scss';
import styles from '../../../../../App.module.scss';
import logo from '../../../../../utils/img/header/logo.svg'
import search from '../../../../../utils/img/header/search.svg'
import cart from '../../../../../utils/img/header/cart.svg'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={`${styles.container} ${s.header__container}`}>
                <div className={s.header__blockLogo}>
                    <img src={logo} alt='logo'/>
                </div>
                <nav className={s.header__menu}>
                    <li className={s.menu__item}>
                        <img src={search} alt="search"/>
                    </li>
                    <li className={s.menu__item}>
                        <img src={cart} alt="cart"/>
                    </li>
                    <li className={s.menu__item}>
                        <a href="" className={s.menu__buttonReg}>Sign up</a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="" className={s.menu__buttonLogIn}>Sign in</a>
                    </li>
                </nav>
            </div>
        </header>
    );
};