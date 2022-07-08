import React from 'react';
import styles from './App.module.scss';
import {Header} from "./components/pages/templates/organisms/header/Header";
import {Main} from "./components/pages/templates/organisms/main/Main";
import {Services} from "./components/pages/templates/organisms/services/Services";

export const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <main className={styles.page}>
                <Main />
                <Services />
            </main>
        </div>
    );
}