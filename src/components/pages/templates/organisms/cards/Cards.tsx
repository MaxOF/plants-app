import React from 'react';
import s from './Cards.module.scss';
import styles from '../../../../../App.module.scss';
import kaktus from '../../../../../utils/img/cards/01.jpg';
import landak from '../../../../../utils/img/cards/02.jpg';
import kecubung from '../../../../../utils/img/cards/03.jpg';
import kecubung2 from '../../../../../utils/img/cards/04.jpg';
import kecubung3 from '../../../../../utils/img/cards/05.jpg';

export const Cards = () => {
  return (
    <section className={s.page__cards}>
      <div className={`${styles.container} ${s.cards__container}`}>
        <div className={s.cards__body}>
          <h3 className={s.cards__title}>Featured Plants</h3>
          <div className={s.cards__list}>
            <div className={s.card__body}>
              <div className={s.card__icon}>
                <img src={kaktus} alt="kaktus" />
              </div>
              <div className={s.card__title}>Kaktus Plants</div>
              <div className={s.card__price}>100 RUB</div>
            </div>
            <div className={s.card__body}>
              <div className={s.card__icon}>
                <img src={landak} alt="landak" />
              </div>
              <div className={s.card__title}>Kaktus Plants</div>
              <div className={s.card__price}>100 RUB</div>
            </div>
            <div className={s.card__body}>
              <div className={s.card__icon}>
                <img src={kecubung} alt="kecubung" />
              </div>
              <div className={s.card__title}>Kaktus Plants</div>
              <div className={s.card__price}>100 RUB</div>
            </div>
            <div className={s.card__body}>
              <div className={s.card__icon}>
                <img src={kecubung2} alt="kecubung2" />
              </div>
              <div className={s.card__title}>Kaktus Plants</div>
              <div className={s.card__price}>100 RUB</div>
            </div>
            <div className={s.card__body}>
              <div className={s.card__icon}>
                <img src={kecubung3} alt="kecubung3" />
              </div>
              <div className={s.card__title}>Kaktus Plants</div>
              <div className={s.card__price}>100 RUB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
