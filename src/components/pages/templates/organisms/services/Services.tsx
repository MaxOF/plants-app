import React from 'react';
import styles from "../../../../../App.module.scss";
import s from "./Services.module.scss";
import first from '../../../../../utils/img/services/01.svg';
import second from '../../../../../utils/img/services/02.svg';
import third from '../../../../../utils/img/services/03.svg';
import fourth from '../../../../../utils/img/services/04.svg';


export const Services = () => {
    return (
        <section className={s.page__services}>
            <div className={`${styles.container} ${s.services__container}`}>
                <div className={s.services__body}>
                    <div className={s.services__column}>
                        <div className={s.services__item}>
                            <div className={s.services__icon}>
                                <img src={first} alt="01"/>
                            </div>
                            <h3 className={s.services__title}>
                                Fast Delivery
                            </h3>
                            <div className={s.services__description}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                            </div>
                        </div>
                    </div>
                    <div className={s.services__column}>
                        <div className={s.services__item}>
                            <div className={s.services__icon}>
                                <img src={second} alt="02"/>
                            </div>
                            <h3 className={s.services__title}>
                                Great Customer Service
                            </h3>
                            <div className={s.services__description}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                            </div>
                        </div>
                    </div>
                    <div className={s.services__column}>
                        <div className={s.services__item}>
                            <div className={s.services__icon}>
                                <img src={third} alt="03"/>
                            </div>
                            <h3 className={s.services__title}>
                                Original Plants
                            </h3>
                            <div className={s.services__description}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                            </div>
                        </div>
                    </div>
                    <div className={s.services__column}>
                        <div className={s.services__item}>
                            <div className={s.services__icon}>
                                <img src={fourth} alt="04"/>
                            </div>
                            <h3 className={s.services__title}>
                                Affordable Price
                            </h3>
                            <div className={s.services__description}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};