import React from 'react';
import s from './Intro.module.scss';
import paint from '../../../../../utils/img/buyMorePlants/01.jpg'
import wall from '../../../../../utils/img/buyMorePlants/02.jpg'
import styles from "../../../../../App.module.scss";

export const Intro = () => {
    return (
        <div className={s.page__intro}>
            <div className={`${styles.container} ${s.intro__container}`}>
                <div className={s.intro__body}>
                    <div className={s.intro__textBlock}>
                        <h2>
                            Buy more plants, it helps you to be relaxed
                        </h2>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam.
                            Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim.
                            Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.
                        </div>
                    </div>
                    <div className={s.wall}>
                        <img src={wall} alt="wall"/>
                    </div>
                    <div className={s.paint}>
                        <img src={paint} alt="paint"/>
                    </div>
                </div>
            </div>

        </div>
    );
};
