import React from 'react';
import styles from './App.module.scss';
import {Header} from "./components/pages/templates/organisms/header/Header";

export const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
        </div>
    );
}