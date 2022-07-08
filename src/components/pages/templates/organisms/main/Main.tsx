import React from 'react';
import s from './Main.module.scss'
import main from '../../../../../utils/img/main/main.jpg'
import styles from "../../../../../App.module.scss";
export const Main = () => {
    return (
        <section className={s.page__main}>
            <div className={`${styles.container} ${s.main__container}`}>
                <div className={ `${styles.ibg} ${s.main__img}`}>
                    <img src={main} alt="main"/>
                </div>
                <div className={s.main__titleBlock}>
                    <h1 className={s.main__title}>Kembang Flower Mantap</h1>
                    <div className={s.main__description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </div>
                    <div className={s.main__redirect}>
                        <a href="">Get to shop</a>
                    </div>
                </div>
            </div>
        </section>
    );
};