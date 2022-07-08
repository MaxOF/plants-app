import React from 'react';
import styles from './App.module.scss';
import {Header} from "./components/pages/templates/organisms/header/Header";
import {Main} from "./components/pages/templates/organisms/main/Main";

export const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <main className={styles.page}>
                <Main />
            </main>
        </div>
    );
}