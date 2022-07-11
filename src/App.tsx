import React from 'react';
import styles from './App.module.scss';
import {Header} from "./components/pages/templates/organisms/header/Header";
import {Main} from "./components/pages/templates/organisms/main/Main";
import {Services} from "./components/pages/templates/organisms/services/Services";
import {Cards} from "./components/pages/templates/organisms/cards/Cards";
import {Intro} from "./components/pages/templates/organisms/intro/Intro";
import {VisitCard} from "./components/pages/templates/organisms/visitCard/VisitCard";
import {Footer} from "./components/pages/templates/organisms/footer/Footer";

export const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <main className={styles.page}>
                <Main />
                <Services />
                <Cards />
                <Intro />
                <VisitCard />
            </main>
            <Footer />
        </div>
    );
}