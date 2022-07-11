import React from 'react';
import {Main} from "./templates/organisms/main/Main";
import {Services} from "./templates/organisms/services/Services";
import {Cards} from "./templates/organisms/cards/Cards";
import {Intro} from "./templates/organisms/intro/Intro";
import {VisitCard} from "./templates/organisms/visitCard/VisitCard";

export const MainPage = () => {
    return (
        <>
            <Main/>
            <Services/>
            <Cards/>
            <Intro/>
            <VisitCard/>
        </>
    );
};

